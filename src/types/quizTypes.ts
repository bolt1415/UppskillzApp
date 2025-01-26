export interface User {
  email: string;
  fullName: string;
  sex: "male" | "female" | "other";
  age: number;
  answers: Record<number, string>;
  personalityType?: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  category: "E/I" | "N/S" | "T/F" | "J/P";
}