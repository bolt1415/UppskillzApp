import { Question } from "./questionTypes";

export { Question };

export interface Profile {
  name: string;
  description: string;
  keyStrengths: string;
  trainingRecommendations: string;
}