import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default async function ContactAPI(req, res) {
    const { name, email, message } = req.body;

    const user = process.env.USER_EMAIL;
    const password = process.env.USER_PASSWORD;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: password,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "henryribano27@gmail.com",
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        console.log("Message sent: %s", mail.messageId);

        return res.status(200).json({ message: "Success" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occurred while sending the message.",
        });
    }

    return res.status(200).json({ message: "Message sent successfully!" });
}
