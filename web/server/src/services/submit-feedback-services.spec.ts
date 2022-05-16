import { SubmitFeedbackService } from "./submit-feedback-services";

describe('Submit feedback', () => {
    it('should be able to submit feedback', async () => {
        const submitFeedback = new SubmitFeedbackService(
            { create: async () => {} },
            { sendMail: async () => {} }
        )

        await expect (submitFeedback.execute({
            type: 'BUG',
            message: 'bug message',
            screenshot: 'bug_screenshot.jpg',
        })).resolves.not.toThrow(); // resolver e não disparar nenhum erro
    });
});