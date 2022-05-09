import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1c8ea7c6bdf02b",
      pass: "eb7143112a419b"
    }
  });

routes.post('/feedbacks', async (req, res) => {
    const {type, message, screenshot} = req.body;

    const feedback = 

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com> 👻',
        to: 'Mateus Bellei <qualquercoisa@gmail.com>',
        subject: 'Feedback do usuário',
        html: [
            `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
            `<p>Tipo de feedback: ${type}</p>`,
            `<p>Mensagem: ${message}</p>`,
            `</div>`,
        ].join('\n'),
    });

    return res.status(201).json({ data: feedback });
});