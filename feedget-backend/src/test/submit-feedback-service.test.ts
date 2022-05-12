import { SubmitFeedbackService } from "../services/submit-feedback-service";

describe("Submit Feedback", () => {
  it("should be able to submit a feedback", async () => {
    const submitFeedback = new SubmitFeedbackService(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Example comment",
      })
    ).resolves.not.toThrow();
  });
});
