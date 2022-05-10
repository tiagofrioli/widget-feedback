import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import CloseButton from "../../closeButton/CloseButton";
import ScreenshotButton from "../../screenshotButton/ScreenshotButton";
import { FeedbackType, feedbackTypes } from "../types";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

function FeedbackContentStep({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [comment, setComment] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestart}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          onChange={(event) => setComment(event.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 focus:outline-none text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex items-center justify-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}

export default FeedbackContentStep;
