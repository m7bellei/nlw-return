import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1c8ea7c6bdf02b",
      pass: "eb7143112a419b"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com> 👻',
            to: 'Mateus Bellei <qualquercoisa@gmail.com>',
            subject: subject,
            html: body
        });
    };
}