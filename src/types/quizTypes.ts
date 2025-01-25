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

export const calculatePersonalityType = (answers: Record<number, string>, questions: Question[]): string => {
  let E = 0, I = 0, N = 0, S = 0, T = 0, F = 0, J = 0, P = 0;

  // Questions 1-10 for E/I
  for (let i = 0; i < 10; i++) {
    const answer = answers[i];
    if (answer === questions[i].options[0] || answer === questions[i].options[1]) {
      E++;
    } else {
      I++;
    }
  }

  // Questions 11-20 for N/S
  for (let i = 10; i < 20; i++) {
    const answer = answers[i];
    if (answer === questions[i].options[0] || answer === questions[i].options[1]) {
      N++;
    } else {
      S++;
    }
  }

  // Questions 21-30 for T/F
  for (let i = 20; i < 30; i++) {
    const answer = answers[i];
    if (answer === questions[i].options[0] || answer === questions[i].options[1]) {
      T++;
    } else {
      F++;
    }
  }

  // Questions 31-40 for J/P
  for (let i = 30; i < 40; i++) {
    const answer = answers[i];
    if (answer === questions[i].options[0] || answer === questions[i].options[1]) {
      J++;
    } else {
      P++;
    }
  }

  return `${E > I ? 'E' : 'I'}${N > S ? 'N' : 'S'}${T > F ? 'T' : 'F'}${J > P ? 'J' : 'P'}`;
};