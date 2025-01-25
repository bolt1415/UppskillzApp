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

export const calculatePersonalityType = (answers: Record<number, string>): string => {
  let E = 0, I = 0, N = 0, S = 0, T = 0, F = 0, J = 0, P = 0;
  
  // Questions 1-10 for E/I
  for (let i = 0; i < 10; i++) {
    const answer = answers[i];
    if (answer === QUIZ_QUESTIONS[i].options[0] || answer === QUIZ_QUESTIONS[i].options[1]) {
      E++;
    } else {
      I++;
    }
  }
  
  // Questions 11-20 for N/S
  for (let i = 10; i < 20; i++) {
    const answer = answers[i];
    if (answer === QUIZ_QUESTIONS[i].options[0] || answer === QUIZ_QUESTIONS[i].options[1]) {
      N++;
    } else {
      S++;
    }
  }
  
  // Questions 21-30 for T/F
  for (let i = 20; i < 30; i++) {
    const answer = answers[i];
    if (answer === QUIZ_QUESTIONS[i].options[0] || answer === QUIZ_QUESTIONS[i].options[1]) {
      T++;
    } else {
      F++;
    }
  }
  
  // Questions 31-40 for J/P
  for (let i = 30; i < 40; i++) {
    const answer = answers[i];
    if (answer === QUIZ_QUESTIONS[i].options[0] || answer === QUIZ_QUESTIONS[i].options[1]) {
      J++;
    } else {
      P++;
    }
  }
  
  return `${E > I ? 'E' : 'I'}${N > S ? 'N' : 'S'}${T > F ? 'T' : 'F'}${J > P ? 'J' : 'P'}`;
};

export const QUIZ_QUESTIONS: Question[] = [
  // E/I Questions (1-10)
  {
    id: 1,
    text: "How do you prefer to spend your free time?",
    options: ["Going out with friends", "Meeting new people", "Reading alone", "Quiet activities at home"],
    category: "E/I"
  },
  {
    id: 2,
    text: "In group settings, you usually:",
    options: ["Lead the conversation", "Actively participate", "Listen and observe", "Prefer one-on-one talks"],
    category: "E/I"
  },
  {
    id: 3,
    text: "After a busy day, you feel energized by:",
    options: ["Socializing", "Group activities", "Alone time", "Quiet reflection"],
    category: "E/I"
  },
  {
    id: 4,
    text: "At parties, you tend to:",
    options: ["Talk to many people", "Start conversations", "Stay with familiar faces", "Find a quiet corner"],
    category: "E/I"
  },
  {
    id: 5,
    text: "Your ideal weekend involves:",
    options: ["Social events", "Group activities", "Solo projects", "Peaceful solitude"],
    category: "E/I"
  },
  {
    id: 6,
    text: "When solving problems, you prefer:",
    options: ["Group brainstorming", "Discussing with others", "Individual thinking", "Silent contemplation"],
    category: "E/I"
  },
  {
    id: 7,
    text: "You feel most comfortable:",
    options: ["In crowds", "At social gatherings", "With few close friends", "By yourself"],
    category: "E/I"
  },
  {
    id: 8,
    text: "Your energy comes from:",
    options: ["External activities", "Social interaction", "Inner reflection", "Quiet time"],
    category: "E/I"
  },
  {
    id: 9,
    text: "When learning something new, you prefer:",
    options: ["Group study", "Interactive workshops", "Self-study", "Individual practice"],
    category: "E/I"
  },
  {
    id: 10,
    text: "You consider yourself:",
    options: ["Very outgoing", "Sociable", "Reserved", "Private"],
    category: "E/I"
  },
  // N/S Questions (11-20)
  {
    id: 11,
    text: "When making decisions, you rely more on:",
    options: ["Possibilities", "Future potential", "Past experience", "Concrete facts"],
    category: "N/S"
  },
  // ... Add remaining N/S questions here
  {
    id: 20,
    text: "You prefer books/movies that are:",
    options: ["Abstract", "Imaginative", "Realistic", "Practical"],
    category: "N/S"
  },
  // T/F Questions (21-30)
  {
    id: 21,
    text: "When making decisions, you prioritize:",
    options: ["Logic", "Objective facts", "Personal values", "Harmony"],
    category: "T/F"
  },
  // ... Add remaining T/F questions here
  {
    id: 30,
    text: "In conflicts, you tend to:",
    options: ["Analyze facts", "Seek truth", "Consider feelings", "Maintain peace"],
    category: "T/F"
  },
  // J/P Questions (31-40)
  {
    id: 31,
    text: "You prefer your work environment to be:",
    options: ["Structured", "Organized", "Flexible", "Adaptable"],
    category: "J/P"
  },
  // ... Add remaining J/P questions here
  {
    id: 40,
    text: "Your approach to deadlines is:",
    options: ["Well ahead", "Planned", "Last minute", "Flexible"],
    category: "J/P"
  }
];