export interface User {
  email: string;
  fullName: string;
  sex: "male" | "female" | "other";
  age: number;
  answers: Record<number, string>;
  personalityType?: string;
  profileDescription?: string;
  keyStrengths?: string;
  trainingRecommendations?: string;
}

export interface Question {
  id: number;
  text: string;
  options: Answer[];
}

export interface Answer {
  text: string;
  profiles: string[];
}

export interface Profile {
  name: string;
  description: string;
  keyStrengths: string;
  trainingRecommendations: string;
}