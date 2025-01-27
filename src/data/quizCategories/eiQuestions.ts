import { Question } from "@/types/quizTypes";

export const EI_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How do you prefer to spend your free time?",
    options: [
      { text: "Going out with friends", profiles: ["E"] },
      { text: "Meeting new people", profiles: ["E"] },
      { text: "Reading alone", profiles: ["I"] },
      { text: "Quiet activities at home", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 2,
    text: "In group settings, you usually:",
    options: [
      { text: "Lead the conversation", profiles: ["E"] },
      { text: "Actively participate", profiles: ["E"] },
      { text: "Listen and observe", profiles: ["I"] },
      { text: "Prefer one-on-one talks", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 3,
    text: "After a busy day, you feel energized by:",
    options: [
      { text: "Socializing", profiles: ["E"] },
      { text: "Group activities", profiles: ["E"] },
      { text: "Alone time", profiles: ["I"] },
      { text: "Quiet reflection", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 4,
    text: "At parties, you tend to:",
    options: [
      { text: "Talk to many people", profiles: ["E"] },
      { text: "Start conversations", profiles: ["E"] },
      { text: "Stay with familiar faces", profiles: ["I"] },
      { text: "Find a quiet corner", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 5,
    text: "Your ideal weekend involves:",
    options: [
      { text: "Social events", profiles: ["E"] },
      { text: "Group activities", profiles: ["E"] },
      { text: "Solo projects", profiles: ["I"] },
      { text: "Peaceful solitude", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 6,
    text: "When solving problems, you prefer:",
    options: [
      { text: "Group brainstorming", profiles: ["E"] },
      { text: "Discussing with others", profiles: ["E"] },
      { text: "Individual thinking", profiles: ["I"] },
      { text: "Silent contemplation", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 7,
    text: "You feel most comfortable:",
    options: [
      { text: "In crowds", profiles: ["E"] },
      { text: "At social gatherings", profiles: ["E"] },
      { text: "With few close friends", profiles: ["I"] },
      { text: "By yourself", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 8,
    text: "Your energy comes from:",
    options: [
      { text: "External activities", profiles: ["E"] },
      { text: "Social interaction", profiles: ["E"] },
      { text: "Inner reflection", profiles: ["I"] },
      { text: "Quiet time", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 9,
    text: "When learning something new, you prefer:",
    options: [
      { text: "Group study", profiles: ["E"] },
      { text: "Interactive workshops", profiles: ["E"] },
      { text: "Self-study", profiles: ["I"] },
      { text: "Individual practice", profiles: ["I"] }
    ],
    category: "E/I"
  },
  {
    id: 10,
    text: "You consider yourself:",
    options: [
      { text: "Very outgoing", profiles: ["E"] },
      { text: "Sociable", profiles: ["E"] },
      { text: "Reserved", profiles: ["I"] },
      { text: "Private", profiles: ["I"] }
    ],
    category: "E/I"
  }
];
