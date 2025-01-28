export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  profiles: string[];
}

export interface Profile {
  name: string;
  description: string;
  keyStrengths: string;
  trainingRecommendations: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  isSubmitting: boolean;
  hasSubmitted: boolean;
}