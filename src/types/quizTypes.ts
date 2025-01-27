import { Question } from "./questionTypes";

export type { Question };

export interface Profile {
  name: string;
  description: string;
  keyStrengths: string;
  trainingRecommendations: string;
}