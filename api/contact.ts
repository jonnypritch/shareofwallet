import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

const NOTIFY_TO = 'info@palmai.io';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, company, phone, message } = (req.body ?? {}) as ContactPayload;

  if (!email || !name) {
    res.status(400).json({ error: 'Name and email are required' });
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
    // email (with a Calendly link + signature) has been removed — the
    // contact form was attracting a lot of spam, and auto-replying to
    // spam submissions was both pointless and a bad look. If reinstated,
    // the old buildAutoReplyText/buildAutoReplyHtml + CALENDLY_URL /
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
