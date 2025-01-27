export interface Question {
  id: number;
  text: string;
  options: Answer[];
  category?: string;
}

export interface Answer {
  text: string;
  profiles: string[];
}