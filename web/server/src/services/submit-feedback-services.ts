import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackServiceRequest {
    type: string;
    message: string;
    screenshot?: string;
}

export class SubmitFeedbackService {

    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async execute(request: SubmitFeedbackServiceRequest) {
        const { type, message, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            message,
            screenshot,
        });

        await this.mailAdapter.sendMail({
            subject: "Feedback submitted",
            body: [
                `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Mensagem: ${message}</p>`,
                `</div>`,
            ].join('\n'),
        })
    }
}