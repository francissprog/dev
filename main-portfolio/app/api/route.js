import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

export const POST = async (req) => {
    try {
        const { username, email, message } = await req.json();

        if (!username || !email || !message) {
            return new NextResponse(JSON.stringify({ error: "Invalid Credentials" }), { status: 400 });
        }

        if (!validateEmail(email)) {
            return new NextResponse(JSON.stringify({ error: "Invalid Email Address" }), { status: 401 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `message from Portfolio name: ${username}`,
            text: `You have a new message from (${email}):\n\n${message}`,
            html: ` <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2 style="color: #333;">New Message from Portfolio</h2>
                    <p><strong>From:</strong> ${username} (<a href="mailto:${email}">${email}</a>)</p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border: 1px solid #ddd;">
                        <p style="margin: 0;">${message}</p>
                    </div>
                    <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
                        This email was sent from your portfolio contact form.
                    </p>
                </div>`,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);

        return new NextResponse(JSON.stringify({ messageId: info.messageId }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
};
