import { EI_QUESTIONS } from "./quizCategories/eiQuestions";
import { NS_QUESTIONS } from "./quizCategories/nsQuestions";
import { TF_QUESTIONS } from "./quizCategories/tfQuestions";
import { JP_QUESTIONS } from "./quizCategories/jpQuestions";
import type { Question } from "@/types/quizTypes";

export const QUIZ_QUESTIONS: Question[] = [
  ...EI_QUESTIONS,
  ...NS_QUESTIONS,
  ...TF_QUESTIONS,
  ...JP_QUESTIONS
];