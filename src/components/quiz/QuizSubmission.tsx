import { useToast } from "@/hooks/use-toast";
import { calculatePersonalityType } from "@/utils/personalityCalculator";
import { saveToGoogleSheets } from "@/

The error occurs because we're trying to use the `useToast` hook outside of a React component in `QuizSubmission.tsx`. The `handleSubmission` function is being exported as a standalone function, but it's trying to use React hooks which can only be used inside React components.

Let's fix this by restructuring the `QuizSubmission` component:

<lov-code>
Let's modify the QuizSubmission component to properly handle hooks:

<lov-write file_path="src/components/quiz/QuizSubmission.tsx">
import { useToast } from "@/hooks/use-toast";
import { calculatePersonalityType } from "@/utils/personalityCalculator";
import { saveToGoogleSheets } from "@/utils/googleSheets";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
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