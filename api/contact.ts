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

function buildAutoReply(firstNameOrEmail: string) {
  return `Hi ${firstNameOrEmail},

Thank you for requesting to book a call. For convenience to get this done now, you can use this link ${CALENDLY_URL} to book a time that suits you, or I will respond in person shortly. I am always happy to travel to visit you in person, so we can do that too if you'd rather.

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
      ].join('\n'),
    });

    // 2. Auto-reply to the customer
    await transporter.sendMail({
      from: `"Jonathan Pritchard, Palm AI" <${smtpUser}>`,
      to: email,
      subject: 'Thanks for reaching out to Palm AI',
      text: buildAutoReply(firstName),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact form emails', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
