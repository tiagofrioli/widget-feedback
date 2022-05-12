import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { MailRepository } from "../repositories/mail-repository";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailRepository: MailRepository
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    this.mailRepository.sendMail({
      subject: "Novo feedback",
      body: [
        `<p>Tipo feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
      ].join("\n"),
    });
  }
}
