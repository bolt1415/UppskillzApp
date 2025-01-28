import { useToast } from "@/hooks/use-toast";
import { calculatePersonalityType } from "@/utils/personalityCalculator";
import { saveToGoogleSheets } from "@/utils/googleSheets";
import { QUIZ_QUESTIONS } from "@/data/quizData";
import type { User } from "@/types/userTypes";
import { NavigateFunction } from "react-router-dom";

interface SubmissionProps {
  updatedUser: User;
  setIsSaving: (value: boolean) => void;
  setHasSubmitted: (value: boolean) => void;
  hasSubmitted: boolean;
  navigate: NavigateFunction;
}

export function useQuizSubmission() {
  const { toast } = useToast();

  const handleSubmission = async ({
    updatedUser,
    setIsSaving,
    setHasSubmitted,
    hasSubmitted,
    navigate
  }: SubmissionProps) => {
    setIsSaving(true);

    try {
      if (hasSubmitted) {
        console.log('Quiz already submitted, preventing duplicate submission');
        return;
      }
      setHasSubmitted(true);

      if (Object.keys(updatedUser.answers).length !== QUIZ_QUESTIONS.length) {
        toast({
          title: "Error",
          description: "Please answer all questions before submitting.",
          variant: "destructive",
        });
        setHasSubmitted(false);
        setIsSaving(false);
        return;
      }

      const personalityType = calculatePersonalityType(updatedUser.answers, QUIZ_QUESTIONS);
      const finalUser = {
        ...updatedUser,
        personalityType,
      };

      console.log('Saving final user data:', finalUser);
      
      await saveToGoogleSheets(finalUser);
      
      localStorage.setItem("users", JSON.stringify([
        ...JSON.parse(localStorage.getItem("users") || "[]"),
        finalUser
      ]));
      
      localStorage.removeItem("currentUser");
      
      navigate("/thank-you");
    } catch (error) {
      console.error('Failed to save quiz results:', error);
      setHasSubmitted(false);
      toast({
        title: "Error Saving Results",
        description: "There was a problem saving your quiz results. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return { handleSubmission };
}