export interface Question {
  id: number;
  text: string;
  options: string[];
  category: "E/I" | "N/S" | "T/F" | "J/P";
}