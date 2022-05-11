import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';
import { SubmitFeedbackService } from './services/submit-feedback-services';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const {type, message, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbacksRepository
    );

    await submitFeedbackService.execute({
        type,
        message,
        screenshot,
    });

    return res.status(201).send();
});