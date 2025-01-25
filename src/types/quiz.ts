export interface User {
  email: string;
  fullName: string;
  sex: "male" | "female" | "other";
  age: number;
  answers: Record<number, string>;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How do you typically react to new situations?",
    options: [
      "Jump right in with excitement",
      "Carefully observe first",
      "Feel anxious but try anyway",
      "Prefer to avoid them",
    ],
  },
  {
    id: 2,
    text: "When making decisions, you tend to:",
    options: [
      "Follow your heart",
      "Analyze all options logically",
      "Ask others for advice",
      "Go with your first instinct",
    ],
  },
  {
    id: 3,
    text: "In group settings, you usually:",
    options: [
      "Lead the conversation",
      "Listen and observe",
      "Participate when asked",
      "Stay in the background",
    ],
  },
  {
    id: 4,
    text: "How do you prefer to spend your free time?",
    options: [
      "Socializing with friends",
      "Pursuing solo hobbies",
      "Mix of both",
      "Relaxing at home",
    ],
  },
  {
    id: 5,
    text: "When facing a problem, you typically:",
    options: [
      "Tackle it head-on",
      "Plan carefully first",
      "Seek help from others",
      "Wait and see if it resolves itself",
    ],
  },
  {
    id: 6,
    text: "How do you handle stress?",
    options: [
      "Exercise or physical activity",
      "Meditate or reflect",
      "Talk to friends",
      "Take a break and distract yourself",
    ],
  },
  {
    id: 7,
    text: "In conversations, you tend to:",
    options: [
      "Share your thoughts openly",
      "Listen more than speak",
      "Balance both equally",
      "Depend on the situation",
    ],
  },
  {
    id: 8,
    text: "How do you approach deadlines?",
    options: [
      "Start early and finish ahead",
      "Plan carefully and stay on schedule",
      "Work under pressure near the end",
      "Often need extensions",
    ],
  },
  {
    id: 9,
    text: "When learning something new, you prefer:",
    options: [
      "Hands-on practice",
      "Reading and research",
      "Watching demonstrations",
      "Trial and error",
    ],
  },
  {
    id: 10,
    text: "How do you prefer to work?",
    options: [
      "In a team",
      "Independently",
      "Mix of both",
      "Depends on the project",
    ],
  },
];