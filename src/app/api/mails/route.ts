import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse, } from 'next';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
    },
    secure: false,
});

export async function POST(req: Request) {
    const body = await req.json();

    const { name, email, message, subject,html } = body;
    if (!name || !email) {
        return NextResponse.json({
            msg: "Email and Name is required",
            status: 400
        })
    }

    const mailOptions = {
        from: email || process.env.MAIL_ID,
        to: process.env.MAIL_ID,
        replyTo: email,            // user email for reply
        html: html || message, // use html instead of text
        subject: subject,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

}
