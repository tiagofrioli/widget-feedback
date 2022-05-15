import { feedbackTypesProps } from "../../utils/feedbackTypes";

export interface FormProps {
  feedgetTypes: feedbackTypesProps;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}
