import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import thoughtImage from "../../assets/thought.svg";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Idéia",
    image: {
      source: ideaImage,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImage,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
