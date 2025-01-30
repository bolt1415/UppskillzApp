import type { Question, Profile } from "@/types/quizTypes";

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What is your main professional goal?",
    options: [
      { text: "Creating something innovative and unique", profiles: ["CREATIVE"] },
      { text: "Solving complex problems methodically", profiles: ["STRATEGIC"] },
      { text: "Inspiring and motivating others", profiles: ["EMPATHIC", "VISIONARY"] },
      { text: "Perfecting my technical skills", profiles: ["TECHNICAL"] },
      { text: "Leading a business or ambitious project", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 2,
    text: "Which quality describes you best?",
    options: [
      { text: "Creative and imaginative", profiles: ["CREATIVE"] },
      { text: "Logical and analytical", profiles: ["STRATEGIC"] },
      { text: "Empathetic and communicative", profiles: ["EMPATHIC"] },
      { text: "Practical and methodical", profiles: ["TECHNICAL"] },
      { text: "Visionary and ambitious", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 3,
    text: "Which of these skills attracts you the most?",
    options: [
      { text: "Artistic or visual creation", profiles: ["CREATIVE"] },
      { text: "Analysis and problem-solving", profiles: ["STRATEGIC"] },
      { text: "Communication and storytelling", profiles: ["EMPATHIC"] },
      { text: "Mastering technical tools", profiles: ["TECHNICAL"] },
      { text: "Project management and entrepreneurship", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 4,
    text: "You learn best when…",
    options: [
      { text: "You create or experiment", profiles: ["CREATIVE"] },
      { text: "You analyze and reflect", profiles: ["STRATEGIC"] },
      { text: "You exchange and share with others", profiles: ["EMPATHIC"] },
      { text: "You practice and test things concretely", profiles: ["TECHNICAL"] },
      { text: "You plan and organize your learning", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 5,
    text: "What type of activity motivates you the most?",
    options: [
      { text: "Designing creative ideas", profiles: ["CREATIVE"] },
      { text: "Planning strategies", profiles: ["STRATEGIC"] },
      { text: "Listening and advising", profiles: ["EMPATHIC"] },
      { text: "Solving a technical problem", profiles: ["TECHNICAL"] },
      { text: "Starting a business", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 6,
    text: "Which work approach describes you best?",
    options: [
      { text: "Intuitive and free", profiles: ["CREATIVE"] },
      { text: "Strategic and planned", profiles: ["STRATEGIC"] },
      { text: "Collaborative and open", profiles: ["EMPATHIC"] },
      { text: "Logical and detail-oriented", profiles: ["TECHNICAL"] },
      { text: "Visionary and ambitious", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 7,
    text: "You are most effective when…",
    options: [
      { text: "Using imagination", profiles: ["CREATIVE"] },
      { text: "Analyzing causes", profiles: ["STRATEGIC"] },
      { text: "Consulting others", profiles: ["EMPATHIC"] },
      { text: "Applying practical solutions", profiles: ["TECHNICAL"] },
      { text: "Setting ambitious goals", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 8,
    text: "Which activity do you prefer?",
    options: [
      { text: "Creating or designing", profiles: ["CREATIVE"] },
      { text: "Solving complex problems", profiles: ["STRATEGIC"] },
      { text: "Helping and inspiring others", profiles: ["EMPATHIC", "VISIONARY"] },
      { text: "Improving processes", profiles: ["TECHNICAL"] },
      { text: "Leading towards success", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 9,
    text: "Which career inspires you the most?",
    options: [
      { text: "Becoming a designer or creator", profiles: ["CREATIVE"] },
      { text: "Being a consultant or analyst", profiles: ["STRATEGIC"] },
      { text: "Being a trainer or communicator", profiles: ["EMPATHIC"] },
      { text: "Becoming a technical expert", profiles: ["TECHNICAL"] },
      { text: "Being an entrepreneur or leader", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 10,
    text: "When facing a challenge, you prefer…",
    options: [
      { text: "Finding a creative solution", profiles: ["CREATIVE"] },
      { text: "Analyzing causes and planning", profiles: ["STRATEGIC"] },
      { text: "Collaborating with others", profiles: ["EMPATHIC"] },
      { text: "Implementing a concrete solution", profiles: ["TECHNICAL"] },
      { text: "Imagining an ambitious solution", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 11,
    text: "In your free time, you like…",
    options: [
      { text: "Doing artistic activities", profiles: ["CREATIVE"] },
      { text: "Solving puzzles or riddles", profiles: ["STRATEGIC"] },
      { text: "Spending time with friends or loved ones", profiles: ["EMPATHIC"] },
      { text: "Working on technical projects", profiles: ["TECHNICAL"] },
      { text: "Reading about entrepreneurship or leadership", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 12,
    text: "How would you describe your decision-making process?",
    options: [
      { text: "Spontaneous and intuition-based", profiles: ["CREATIVE"] },
      { text: "Based on data and logical reasoning", profiles: ["STRATEGIC"] },
      { text: "Focused on emotions and impact on others", profiles: ["EMPATHIC"] },
      { text: "Based on concrete facts", profiles: ["TECHNICAL"] },
      { text: "Visionary and long-term oriented", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 13,
    text: "What professional situation motivates you the most?",
    options: [
      { text: "Creating something new", profiles: ["CREATIVE"] },
      { text: "Planning an effective strategy", profiles: ["STRATEGIC"] },
      { text: "Helping a team collaborate", profiles: ["EMPATHIC"] },
      { text: "Optimizing an existing system", profiles: ["TECHNICAL"] },
      { text: "Launching an ambitious project", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 14,
    text: "What type of project do you prefer?",
    options: [
      { text: "Innovative and creative", profiles: ["CREATIVE"] },
      { text: "Logical and structured", profiles: ["STRATEGIC"] },
      { text: "Based on collaboration", profiles: ["EMPATHIC"] },
      { text: "Technical and precise", profiles: ["TECHNICAL"] },
      { text: "Ambitious and visionary", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 15,
    text: "You feel accomplished when…",
    options: [
      { text: "You bring a creative idea to life", profiles: ["CREATIVE"] },
      { text: "You solve a complex problem", profiles: ["STRATEGIC"] },
      { text: "You help someone", profiles: ["EMPATHIC"] },
      { text: "You improve a process", profiles: ["TECHNICAL"] },
      { text: "You achieve an ambitious goal", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 16,
    text: "If you had an hour of free time, you would choose to…",
    options: [
      { text: "Draw or design", profiles: ["CREATIVE"] },
      { text: "Read a book on strategy", profiles: ["STRATEGIC"] },
      { text: "Listen to a podcast on communication", profiles: ["EMPATHIC"] },
      { text: "Work on a technical project", profiles: ["TECHNICAL"] },
      { text: "Take a leadership course", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 17,
    text: "How do you prefer to solve problems?",
    options: [
      { text: "With creativity", profiles: ["CREATIVE"] },
      { text: "With method and logic", profiles: ["STRATEGIC"] },
      { text: "By listening to others", profiles: ["EMPATHIC"] },
      { text: "By applying practical solutions", profiles: ["TECHNICAL"] },
      { text: "By finding innovative solutions", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 18,
    text: "Which skill do you want to develop?",
    options: [
      { text: "Creativity and design", profiles: ["CREATIVE"] },
      { text: "Data analysis", profiles: ["STRATEGIC"] },
      { text: "Communication", profiles: ["EMPATHIC"] },
      { text: "Technical expertise", profiles: ["TECHNICAL"] },
      { text: "Leadership", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 19,
    text: "What type of team do you prefer?",
    options: [
      { text: "Creative and flexible", profiles: ["CREATIVE"] },
      { text: "Organized and result-oriented", profiles: ["STRATEGIC"] },
      { text: "Collaborative and human-focused", profiles: ["EMPATHIC"] },
      { text: "Technical and specialized", profiles: ["TECHNICAL"] },
      { text: "Visionary and ambitious", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 20,
    text: "In a project, which task do you prefer?",
    options: [
      { text: "Designing ideas or innovating", profiles: ["CREATIVE"] },
      { text: "Planning and analyzing risks", profiles: ["STRATEGIC"] },
      { text: "Managing relationships and communication", profiles: ["EMPATHIC"] },
      { text: "Solving technical problems", profiles: ["TECHNICAL"] },
      { text: "Driving the overall vision", profiles: ["VISIONARY"] }
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
