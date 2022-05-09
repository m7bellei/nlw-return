import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({type, message, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                message,
                screenshot,
            },
        })
    }
}