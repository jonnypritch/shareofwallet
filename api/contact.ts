import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  website?: string; // honeypot — real visitors never fill this in
}

const NOTIFY_TO = 'info@palmai.io';

// --- Spam heuristics -------------------------------------------------
// Tuned against real spam received on this form, e.g.:
//   name: "kpHnqevmwl", company: "RLuO17ZHcn",
//   message: "nBMa6oVt09YsNWCJLXNNfjYUeO6DznJy86mjq5ljHyLanHgHQsAM9ev"
// — random mixed-case alphanumeric strings with no spaces, no real words.
// None of these checks alone is bulletproof; stacked, they catch this
// pattern without troubling real enquiries (which have spaces, vowels,
// and plausible phone formats).

// A string that's one unbroken alphanumeric blob with erratic case changes
// and no vowSels-as-a-word pattern — typical of a randomly generated token.
function looksLikeRandomToken(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < 6) return false;
  if (/\s/.test(trimmed)) return false; // real names/messages have spaces
  if (!/^[A-Za-z0-9]+$/.test(trimmed)) return false; // only plain alphanumeric

  // Count case transitions (aB, Ba) — random tokens flip case erratically;
  // real words/names essentially never do outside of one leading capital.
  let caseTransitions = 0;
  for (let i = 1; i < trimmed.length; i++) {
    const prevUpper = trimmed[i - 1] === trimmed[i - 1].toUpperCase() && /[A-Za-z]/.test(trimmed[i - 1]);
    const currUpper = trimmed[i] === trimmed[i].toUpperCase() && /[A-Za-z]/.test(trimmed[i]);
    if (prevUpper !== currUpper) caseTransitions++;
  }

  const hasDigit = /\d/.test(trimmed);
  return caseTransitions >= 3 || (hasDigit && trimmed.length >= 8);
}

function looksLikePlausiblePhone(value: string): boolean {
  if (!value || value.trim() === '') return true; // phone is optional — blank is fine
  return /^[+\d][\d\s()-]{6,20}$/.test(value.trim());
}

function isLikelySpam(payload: ContactPayload): boolean {
  // Honeypot tripped — belt-and-braces in case a bot posts directly to
  // this endpoint with a scraped copy of the form fields.
  if (payload.website && payload.website.trim() !== '') return true;

  if (payload.name && looksLikeRandomToken(payload.name)) return true;
  if (payload.company && looksLikeRandomToken(payload.company)) return true;
  if (payload.message && looksLikeRandomToken(payload.message)) return true;
  if (payload.phone && !looksLikePlausiblePhone(payload.phone)) return true;

  return false;
}
// -----------------------------------------------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const payload = (req.body ?? {}) as ContactPayload;
  const { name, email, company, phone, message } = payload;

  if (!email || !name) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }

  if (isLikelySpam(payload)) {
    // Respond as if it succeeded — no error, no email sent. This avoids
    // giving a scripted bot a signal to retry with a different pattern,
    // and keeps failed/blocked submissions out of anyone's error-monitoring
    // noise. If you ever want to audit what's being blocked, log here:
    console.log('Blocked likely-spam contact submission', { name, company, email });
    res.status(200).json({ ok: true });
    return;
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.error('Missing SMTP_USER or SMTP_PASS environment variables');
    res.status(500).json({ error: 'Email is not configured on the server' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    // Notify the team.
    // NOTE: the auto-reply that used to be sent back to the submitter's
    // email (with a Calendly link + signature) was removed 23 Sept 2026 —
    // the contact form was attracting spam, and auto-replying to spam
    // submissions was both pointless and a bad look. If reinstated, the
    // old buildAutoReplyText/buildAutoReplyHtml + CALENDLY_URL /
    // SIGNATURE_TEXT / SIGNATURE_HTML logic can be restored from git
    // history (this file, prior to 23 Sept 2026).
    await transporter.sendMail({
      from: `"Palm AI Website" <${smtpUser}>`,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New demo request — ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        `Phone: ${phone || 'Not provided'}`,
        '',
        'Message:',
        message || '(no message)',
        '',
        '---',
        'Submitted via the Book a Demo form on palmai.io',
      ].join('\n'),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact form email', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
