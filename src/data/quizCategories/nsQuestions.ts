import { Question } from "@/types/quizTypes";

export const NS_QUESTIONS: Question[] = [
  {
    id: 11,
    text: "When making decisions, you rely more on:",
    options: [
      { text: "Possibilities", profiles: ["N"] },
      { text: "Future potential", profiles: ["N"] },
      { text: "Past experience", profiles: ["S"] },
      { text: "Concrete facts", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 12,
    text: "You prefer information that is:",
    options: [
      { text: "Theoretical", profiles: ["N"] },
      { text: "Abstract", profiles: ["N"] },
      { text: "Practical", profiles: ["S"] },
      { text: "Factual", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 13,
    text: "You are more interested in:",
    options: [
      { text: "What could be", profiles: ["N"] },
      { text: "Innovation", profiles: ["N"] },
      { text: "What is", profiles: ["S"] },
      { text: "Reality", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 14,
    text: "You value more:",
    options: [
      { text: "Imagination", profiles: ["N"] },
      { text: "Innovation", profiles: ["N"] },
      { text: "Experience", profiles: ["S"] },
      { text: "Tradition", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 15,
    text: "You tend to focus on:",
    options: [
      { text: "Patterns", profiles: ["N"] },
      { text: "Connections", profiles: ["N"] },
      { text: "Details", profiles: ["S"] },
      { text: "Facts", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 16,
    text: "You prefer learning about:",
    options: [
      { text: "Concepts", profiles: ["N"] },
      { text: "Theories", profiles: ["N"] },
      { text: "Applications", profiles: ["S"] },
      { text: "Practice", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 17,
    text: "You are more drawn to:",
    options: [
      { text: "Metaphors", profiles: ["N"] },
      { text: "Symbolism", profiles: ["N"] },
      { text: "Literal meanings", profiles: ["S"] },
      { text: "Clear descriptions", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 18,
    text: "You prefer projects that are:",
    options: [
      { text: "Open-ended", profiles: ["N"] },
      { text: "Experimental", profiles: ["N"] },
      { text: "Well-defined", profiles: ["S"] },
      { text: "Structured", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 19,
    text: "You are more comfortable with:",
    options: [
      { text: "Abstract ideas", profiles: ["N"] },
      { text: "Theories", profiles: ["N"] },
      { text: "Concrete examples", profiles: ["S"] },
      { text: "Real cases", profiles: ["S"] }
    ],
    category: "N/S"
  },
  {
    id: 20,
    text: "You prefer books/movies that are:",
    options: [
      { text: "Abstract", profiles: ["N"] },
      { text: "Imaginative", profiles: ["N"] },
      { text: "Realistic", profiles: ["S"] },
      { text: "Practical", profiles: ["S"] }
    ],
    category: "N/S"
  }
];
