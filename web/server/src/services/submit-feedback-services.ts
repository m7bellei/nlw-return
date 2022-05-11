import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackServiceRequest {
    type: string;
    message: string;
    screenshot?: string;
}

export class SubmitFeedbackService {

    constructor(
        private feedbacksRepository: FeedbacksRepository
    ) {}

    async execute(request: SubmitFeedbackServiceRequest) {
        const { type, message, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            message,
            screenshot,
        });
    }
}