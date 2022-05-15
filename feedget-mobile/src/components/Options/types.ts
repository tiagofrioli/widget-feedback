import { feedbackTypesProps } from "../../utils/feedbackTypes";

export interface OptionsProps {
  onFeedbackTypechanged: (feedbackType: feedbackTypesProps) => void;
}
