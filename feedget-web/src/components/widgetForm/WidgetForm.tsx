import React, { useState } from "react";
import CloseButton from "../closeButton/CloseButton";
import FeedbackContentStep from "./steps/FeedbackContentStep";
import FeedbackSuccessStep from "./steps/FeedbackSuccessStep";

import FeedbackTypeStep from "./steps/FeedbackTypeStep";
import { FeedbackType } from "./types";

function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>();
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer>
        Feito com s2 por
        <a className="underline underline-offset-2" href="#">
          Tiago Frioli
        </a>
      </footer>
    </div>
  );
}

export default WidgetForm;
