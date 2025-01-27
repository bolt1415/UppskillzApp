export interface User {
  email: string;
  fullName: string;
  sex: "male" | "female" | "other";
  age: number;
  answers: Record<number, string>;
  personalityType?: string;
}