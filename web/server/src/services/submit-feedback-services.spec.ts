import { SubmitFeedbackService } from "./submit-feedback-services";

// spies = espiões => saber no teste se alguma função foi chamada
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit feedback', async () => {
        await expect (submitFeedback.execute({
            type: 'BUG',
            message: 'bug message',
            screenshot: 'data:image/png;base64,23849043.png',
        })).resolves.not.toThrow(); // resolver e não disparar nenhum erro

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {
        await expect (submitFeedback.execute({
            type: '',
            message: 'bug message',
            screenshot: 'data:image/png;base64,23849043.png',
        })).rejects.toThrow(); // resolver e não disparar nenhum erro
    });

    it('should not be able to submit feedback without type', async () => {
        await expect (submitFeedback.execute({
            type: 'bug',
            message: '',
            screenshot: 'data:image/png;base64,23849043.png',
        })).rejects.toThrow(); // resolver e não disparar nenhum erro
    });

    it('should not be able to submit feedback with an invalid screenshot', async () => {  
        await expect (submitFeedback.execute({
            type: 'BUG',
            message: 'bug message',
            screenshot: 'test.jpg',
        })).rejects.toThrow(); // resolver e não disparar nenhum erro
    });
});