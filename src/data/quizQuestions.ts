import type { Question } from "@/types/quizTypes";

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
  {
    id: 12,
    text: "You prefer information that is:",
    options: ["Theoretical", "Abstract", "Practical", "Factual"],
    category: "N/S"
  },
  {
    id: 13,
    text: "You are more interested in:",
    options: ["What could be", "Innovation", "What is", "Reality"],
    category: "N/S"
  },
  {
    id: 14,
    text: "You value more:",
    options: ["Imagination", "Innovation", "Experience", "Tradition"],
    category: "N/S"
  },
  {
    id: 15,
    text: "You tend to focus on:",
    options: ["Patterns", "Connections", "Details", "Facts"],
    category: "N/S"
  },
  {
    id: 16,
    text: "You prefer learning about:",
    options: ["Concepts", "Theories", "Applications", "Practice"],
    category: "N/S"
  },
  {
    id: 17,
    text: "You are more drawn to:",
    options: ["Metaphors", "Symbolism", "Literal meanings", "Clear descriptions"],
    category: "N/S"
  },
  {
    id: 18,
    text: "You prefer projects that are:",
    options: ["Open-ended", "Experimental", "Well-defined", "Structured"],
    category: "N/S"
  },
  {
    id: 19,
    text: "You are more comfortable with:",
    options: ["Abstract ideas", "Theories", "Concrete examples", "Real cases"],
    category: "N/S"
  },
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
  {
    id: 22,
    text: "You tend to be more:",
    options: ["Analytical", "Objective", "Empathetic", "Compassionate"],
    category: "T/F"
  },
  {
    id: 23,
    text: "You value more:",
    options: ["Truth", "Accuracy", "Harmony", "Feelings"],
    category: "T/F"
  },
  {
    id: 24,
    text: "In disagreements, you focus on:",
    options: ["Facts", "Logic", "Impact on others", "Maintaining peace"],
    category: "T/F"
  },
  {
    id: 25,
    text: "You prefer feedback that is:",
    options: ["Direct", "Honest", "Gentle", "Constructive"],
    category: "T/F"
  },
  {
    id: 26,
    text: "You are more likely to trust:",
    options: ["Logic", "Analysis", "Intuition", "Feelings"],
    category: "T/F"
  },
  {
    id: 27,
    text: "You prefer to make decisions based on:",
    options: ["Data", "Facts", "Values", "Impact on people"],
    category: "T/F"
  },
  {
    id: 28,
    text: "You are more concerned with:",
    options: ["Efficiency", "Results", "Harmony", "People's feelings"],
    category: "T/F"
  },
  {
    id: 29,
    text: "You value more in others:",
    options: ["Competence", "Achievement", "Kindness", "Cooperation"],
    category: "T/F"
  },
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
  {
    id: 32,
    text: "You prefer to:",
    options: ["Plan ahead", "Make schedules", "Go with the flow", "Be spontaneous"],
    category: "J/P"
  },
  {
    id: 33,
    text: "You feel better when things are:",
    options: ["Decided", "Settled", "Open-ended", "Flexible"],
    category: "J/P"
  },
  {
    id: 34,
    text: "You prefer to:",
    options: ["Complete one task", "Follow plans", "Multi-task", "Adapt as needed"],
    category: "J/P"
  },
  {
    id: 35,
    text: "You tend to be:",
    options: ["Punctual", "Organized", "Relaxed about time", "Flexible with deadlines"],
    category: "J/P"
  },
  {
    id: 36,
    text: "You prefer environments that are:",
    options: ["Structured", "Predictable", "Dynamic", "Spontaneous"],
    category: "J/P"
  },
  {
    id: 37,
    text: "You feel more comfortable when:",
    options: ["Plans are set", "Everything is arranged", "Options are open", "Things are flexible"],
    category: "J/P"
  },
  {
    id: 38,
    text: "You prefer to:",
    options: ["Follow schedules", "Make lists", "Be spontaneous", "Stay flexible"],
    category: "J/P"
  },
  {
    id: 39,
    text: "You tend to:",
    options: ["Plan events", "Organize activities", "Go with the flow", "Adapt to situations"],
    category: "J/P"
  },
  {
    id: 40,
    text: "Your approach to deadlines is:",
    options: ["Well ahead", "Planned", "Last minute", "Flexible"],
    category: "J/P"
  }
];
