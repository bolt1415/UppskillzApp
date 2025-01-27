import type { Question } from "@/types/questionTypes";
import type { User } from "@/types/userTypes";
import { PROFILES } from "@/data/quizQuestions";

export const calculatePersonalityType = (answers: Record<number, string>, questions: Question[]): string => {
  const profileScores: Record<string, number> = {
    CREATIVE: 0,
    STRATEGIC: 0,
    EMPATHIC: 0,
    TECHNICAL: 0,
    VISIONARY: 0
  };

  // Calculate scores for each profile
  questions.forEach((question, index) => {
    const selectedAnswer = answers[index];
    const option = question.options.find(opt => opt.text === selectedAnswer);
    
    if (option) {
      option.profiles.forEach(profile => {
        profileScores[profile]++;
      });
    }
  });

  // Find the profile with the highest score
  let maxScore = 0;
  let dominantProfile = "";

  Object.entries(profileScores).forEach(([profile, score]) => {
    if (score > maxScore) {
      maxScore = score;
      dominantProfile = profile;
    }
  });

  return dominantProfile;
};

export const getProfileDetails = (profileType: string) => {
  return PROFILES[profileType];
};
