import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

const CALENDLY_URL = 'https://calendly.com/jppalm/30min';
const NOTIFY_TO = 'info@palmai.io';

const SIGNATURE_TEXT = `Best,
Jonathan Pritchard
Founder, Palm AI
j@palmai.io | +44 (0)7746 860255
palmai.io`;

const SIGNATURE_HTML = `
  <p style="margin:0 0 4px;">Best,</p>
  <p style="margin:0; font-weight:600; color:#1e293b;">Jonathan Pritchard</p>
  <p style="margin:0; color:#4b5563;">Founder, Palm AI</p>
  <p style="margin:4px 0 0; color:#4b5563;">
    <a href="mailto:j@palmai.io" style="color:#1e3a8a; text-decoration:none;">j@palmai.io</a>
    &nbsp;|&nbsp;
    <a href="tel:+447746860255" style="color:#1e3a8a; text-decoration:none;">+44 (0)7746 860255</a>
  </p>
  <p style="margin:2px 0 0;">
    <a href="https://palmai.io" style="color:#1e3a8a; text-decoration:none;">palmai.io</a>
  </p>
`;

function buildAutoReplyText(firstNameOrEmail: string) {
  return `Hi ${firstNameOrEmail},

Thank you for requesting to book a call. For convenience to get this done now, you can use this link ${CALENDLY_URL} to book a time that suits you, or I will respond in person shortly. I am always happy to travel to visit you in person, so we can do that too if you'd rather.

${SIGNATURE_TEXT}
`;
}

function buildAutoReplyHtml(firstNameOrEmail: string) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color:#1e293b; line-height:1.6;">
      <p>Hi ${firstNameOrEmail},</p>
      <p>
        Thank you for requesting to book a call. For convenience to get this
        done now, you can use this link to
        <a href="${CALENDLY_URL}" style="color:#1e3a8a; font-weight:600;">book a time that suits you</a>,
        or I will respond in person shortly. I am always happy to travel to
        visit you in person, so we can do that too if you'd rather.
      </p>
      <div style="margin-top:24px; padding-top:16px; border-top:1px solid #e5e7eb;">
        ${SIGNATURE_HTML}
      </div>
    </div>
  `;
}

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

  const firstName = name.trim().split(/\s+/)[0] || email;

  try {
    // 1. Notify the team
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

    // 2. Auto-reply to the customer
    await transporter.sendMail({
      from: `"Jonathan Pritchard, Palm AI" <${smtpUser}>`,
      to: email,
      subject: 'Thanks for reaching out to Palm AI',
      text: buildAutoReplyText(firstName),
      html: buildAutoReplyHtml(firstName),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact form emails', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
