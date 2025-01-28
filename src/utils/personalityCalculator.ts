import type { Question } from "@/types/quizTypes";
import { PROFILES } from "@/data/quizData";

export const calculatePersonalityType = (answers: Record<number, string>, questions: Question[]): string => {
  console.log('Calculating personality type with answers:', answers);
  
  const profileScores: Record<string, number> = {
    CREATIVE: 0,
    STRATEGIC: 0,
    EMPATHIC: 0,
    TECHNICAL: 0,
    VISIONARY: 0
  };

  // Calculate scores for each profile
  Object.entries(answers).forEach(([questionIndex, selectedAnswerText]) => {
    const question = questions[Number(questionIndex)];
    const selectedOption = question.options.find(opt => opt.text === selectedAnswerText);
    
    if (selectedOption) {
      selectedOption.profiles.forEach(profile => {
        profileScores[profile]++;
      });
    }
  });

  console.log('Final profile scores:', profileScores);

  // Find the profile with the highest score
  let maxScore = 0;
  let dominantProfile = "";

  Object.entries(profileScores).forEach(([profile, score]) => {
    if (score > maxScore) {
      maxScore = score;
      dominantProfile = profile;
    }
  });

  console.log('Dominant profile:', dominantProfile);
  return dominantProfile;
};

export const getProfileDetails = (profileType: string) => {
  return PROFILES[profileType];
};