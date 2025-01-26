import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import { calculatePersonalityType } from "@/utils/personalityCalculator";
import { saveToGoogleSheets } from "@/utils/googleSheets";
import QuizProgress from "./quiz/QuizProgress";
import QuizQuestion from "./quiz/QuizQuestion";
import type { User } from "@/types/quizTypes";

export default function Quiz() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userData, setUserData] = useState<User | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      navigate("/");
      return;
    }
    setUserData(JSON.parse(storedUser));
  }, [navigate]);

  const handleAnswer = async (answer: string) => {
    if (!userData || isSaving || hasSubmitted) return;

    const updatedUser = {
      ...userData,
      answers: {
        ...userData.answers,
        [currentQuestion]: answer,
      },
    };

    if (currentQuestion === QUIZ_QUESTIONS.length - 1) {
      setIsSaving(true);
      try {
        // Prevent multiple submissions
        if (hasSubmitted) {
          console.log('Quiz already submitted, preventing duplicate submission');
          return;
        }
        setHasSubmitted(true);

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
        setHasSubmitted(false); // Reset if there's an error
        toast({
          title: "Error Saving Results",
          description: "There was a problem saving your quiz results. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSaving(false);
      }
    } else {
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUserData(updatedUser);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
      <Card className="w-full max-w-2xl p-8 animate-slideIn">
        <QuizProgress 
          currentQuestion={currentQuestion} 
          totalQuestions={QUIZ_QUESTIONS.length} 
        />
        <QuizQuestion
          question={QUIZ_QUESTIONS[currentQuestion]}
          onAnswer={handleAnswer}
          isSaving={isSaving}
        />
      </Card>
    </div>
  );
}