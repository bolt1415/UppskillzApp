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
  {
    id: 2,
    text: "How do you prefer to work?",
    options: [
      { text: "Independently with creative freedom", profiles: ["CREATIVE"] },
      { text: "Following structured processes", profiles: ["STRATEGIC"] },
      { text: "In collaborative teams", profiles: ["EMPATHIC"] },
      { text: "With technical tools and systems", profiles: ["TECHNICAL"] },
      { text: "Leading and delegating", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 3,
    text: "What energizes you most at work?",
    options: [
      { text: "Brainstorming new ideas", profiles: ["CREATIVE"] },
      { text: "Analyzing data and patterns", profiles: ["STRATEGIC"] },
      { text: "Helping others succeed", profiles: ["EMPATHIC"] },
      { text: "Solving technical challenges", profiles: ["TECHNICAL"] },
      { text: "Setting ambitious goals", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 4,
    text: "How do you approach problems?",
    options: [
      { text: "Think outside the box", profiles: ["CREATIVE"] },
      { text: "Break them down systematically", profiles: ["STRATEGIC"] },
      { text: "Discuss with others", profiles: ["EMPATHIC"] },
      { text: "Use technical expertise", profiles: ["TECHNICAL"] },
      { text: "See the bigger picture", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 5,
    text: "What's your ideal work environment?",
    options: [
      { text: "Creative and flexible space", profiles: ["CREATIVE"] },
      { text: "Organized and structured", profiles: ["STRATEGIC"] },
      { text: "Collaborative and friendly", profiles: ["EMPATHIC"] },
      { text: "Tech-equipped and efficient", profiles: ["TECHNICAL"] },
      { text: "Dynamic and ambitious", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 6,
    text: "How do you make decisions?",
    options: [
      { text: "Based on intuition and creativity", profiles: ["CREATIVE"] },
      { text: "Through careful analysis", profiles: ["STRATEGIC"] },
      { text: "Considering others' feelings", profiles: ["EMPATHIC"] },
      { text: "Using technical data", profiles: ["TECHNICAL"] },
      { text: "Looking at long-term impact", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 7,
    text: "What's your preferred way to learn?",
    options: [
      { text: "Through creative exploration", profiles: ["CREATIVE"] },
      { text: "Following structured courses", profiles: ["STRATEGIC"] },
      { text: "In group discussions", profiles: ["EMPATHIC"] },
      { text: "Hands-on technical practice", profiles: ["TECHNICAL"] },
      { text: "Self-directed research", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 8,
    text: "How do you handle stress?",
    options: [
      { text: "Express through creative outlets", profiles: ["CREATIVE"] },
      { text: "Create action plans", profiles: ["STRATEGIC"] },
      { text: "Talk it through with others", profiles: ["EMPATHIC"] },
      { text: "Focus on practical solutions", profiles: ["TECHNICAL"] },
      { text: "See it as a growth opportunity", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 9,
    text: "What's your communication style?",
    options: [
      { text: "Expressive and imaginative", profiles: ["CREATIVE"] },
      { text: "Clear and structured", profiles: ["STRATEGIC"] },
      { text: "Empathetic and supportive", profiles: ["EMPATHIC"] },
      { text: "Precise and technical", profiles: ["TECHNICAL"] },
      { text: "Inspiring and motivating", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 10,
    text: "How do you measure success?",
    options: [
      { text: "Innovation and originality", profiles: ["CREATIVE"] },
      { text: "Meeting strategic goals", profiles: ["STRATEGIC"] },
      { text: "Team harmony and growth", profiles: ["EMPATHIC"] },
      { text: "Technical excellence", profiles: ["TECHNICAL"] },
      { text: "Vision achievement", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 11,
    text: "What motivates you most?",
    options: [
      { text: "Creative freedom", profiles: ["CREATIVE"] },
      { text: "Clear objectives", profiles: ["STRATEGIC"] },
      { text: "Helping others", profiles: ["EMPATHIC"] },
      { text: "Technical challenges", profiles: ["TECHNICAL"] },
      { text: "Big picture impact", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 12,
    text: "How do you prefer to receive feedback?",
    options: [
      { text: "Open-ended and inspiring", profiles: ["CREATIVE"] },
      { text: "Structured and specific", profiles: ["STRATEGIC"] },
      { text: "Supportive and encouraging", profiles: ["EMPATHIC"] },
      { text: "Detailed and technical", profiles: ["TECHNICAL"] },
      { text: "Forward-looking", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 13,
    text: "What's your approach to change?",
    options: [
      { text: "Embrace new possibilities", profiles: ["CREATIVE"] },
      { text: "Analyze and plan carefully", profiles: ["STRATEGIC"] },
      { text: "Consider impact on others", profiles: ["EMPATHIC"] },
      { text: "Focus on technical aspects", profiles: ["TECHNICAL"] },
      { text: "See opportunities", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 14,
    text: "How do you contribute to a team?",
    options: [
      { text: "Bringing creative ideas", profiles: ["CREATIVE"] },
      { text: "Organizing and planning", profiles: ["STRATEGIC"] },
      { text: "Supporting team members", profiles: ["EMPATHIC"] },
      { text: "Technical expertise", profiles: ["TECHNICAL"] },
      { text: "Providing direction", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 15,
    text: "What's your ideal role in a project?",
    options: [
      { text: "Creative lead", profiles: ["CREATIVE"] },
      { text: "Project manager", profiles: ["STRATEGIC"] },
      { text: "Team facilitator", profiles: ["EMPATHIC"] },
      { text: "Technical expert", profiles: ["TECHNICAL"] },
      { text: "Vision setter", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 16,
    text: "How do you handle deadlines?",
    options: [
      { text: "Work flexibly and creatively", profiles: ["CREATIVE"] },
      { text: "Plan and track progress", profiles: ["STRATEGIC"] },
      { text: "Coordinate with team", profiles: ["EMPATHIC"] },
      { text: "Focus on technical tasks", profiles: ["TECHNICAL"] },
      { text: "Maintain big picture view", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 17,
    text: "What's your approach to innovation?",
    options: [
      { text: "Generate unique ideas", profiles: ["CREATIVE"] },
      { text: "Systematic improvement", profiles: ["STRATEGIC"] },
      { text: "Collaborative ideation", profiles: ["EMPATHIC"] },
      { text: "Technical optimization", profiles: ["TECHNICAL"] },
      { text: "Transformative thinking", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 18,
    text: "How do you prefer to solve conflicts?",
    options: [
      { text: "Find creative solutions", profiles: ["CREATIVE"] },
      { text: "Follow established procedures", profiles: ["STRATEGIC"] },
      { text: "Focus on relationships", profiles: ["EMPATHIC"] },
      { text: "Address practical issues", profiles: ["TECHNICAL"] },
      { text: "Look for win-win outcomes", profiles: ["VISIONARY"] }
    ]
  },
  {
    id: 19,
    text: "What's your preferred work pace?",
    options: [
      { text: "Flexible and spontaneous", profiles: ["CREATIVE"] },
      { text: "Steady and organized", profiles: ["STRATEGIC"] },
      { text: "Balanced with breaks", profiles: ["EMPATHIC"] },
      { text: "Focused and efficient", profiles: ["TECHNICAL"] },
      { text: "Dynamic and adaptable", profiles: ["VISIONARY"] }
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