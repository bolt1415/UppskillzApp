import type { Question, Profile } from "@/types/quizTypes";

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What is your main professional goal?",
    options: [
      { text: "Create something innovative and unique", profiles: ["CREATIVE"] },
      { text: "Solve complex problems methodically", profiles: ["STRATEGIC"] },
      { text: "Inspire and motivate others", profiles: ["EMPATHIC", "VISIONARY"] },
      { text: "Perfect my technical skills", profiles: ["TECHNICAL"] },
      { text: "Lead a business or ambitious project", profiles: ["VISIONARY"] }
    ]
  },
  // ... Questions 2-19 following the same pattern
  {
    id: 20,
    text: "In a project, which task do you prefer?",
    options: [
      { text: "Designing ideas or innovating", profiles: ["CREATIVE"] },
      { text: "Planning and analyzing risks", profiles: ["STRATEGIC"] },
      { text: "Managing relationships and communication", profiles: ["EMPATHIC"] },
      { text: "Solving technical problems", profiles: ["TECHNICAL"] },
      { text: "Steering the overall vision", profiles: ["VISIONARY"] }
    ]
  }
];

export const PROFILES: Record<string, Profile> = {
  CREATIVE: {
    name: "Creative",
    description: "You are creative and innovative, with a strong imagination and developed artistic sense. You enjoy thinking differently and proposing original solutions.",
    keyStrengths: "Artistic sensitivity, imagination, divergent thinking",
    trainingRecommendations: "Design Thinking - UX/UI Design - Digital Content Creation"
  },
  STRATEGIC: {
    name: "Strategic",
    description: "You excel in analysis and planning. You are methodical and capable of solving complex problems thanks to your logical mind.",
    keyStrengths: "Analysis, problem-solving, project management",
    trainingRecommendations: "Data Analysis - Corporate Strategy - Project Management"
  },
  EMPATHIC: {
    name: "Empathic",
    description: "You are oriented toward human relationships. Your ability to listen, understand, and collaborate makes you an excellent communicator.",
    keyStrengths: "Communication, listening, collaboration",
    trainingRecommendations: "Digital Communication - Community Management - Digital Marketing"
  },
  TECHNICAL: {
    name: "Technical",
    description: "You have a practical approach and are drawn to technical systems and tools. You enjoy optimizing processes and solving concrete problems.",
    keyStrengths: "Precision, technical skills, optimization",
    trainingRecommendations: "Web Development - DevOps - Cybersecurity"
  },
  VISIONARY: {
    name: "Visionary",
    description: "You are a visionary and ambitious leader. You inspire others and are motivated by innovation, change, and big ideas.",
    keyStrengths: "Leadership, inspiration, entrepreneurial thinking",
    trainingRecommendations: "Digital Entrepreneurship - Innovation Management - Business Development"
  }
};