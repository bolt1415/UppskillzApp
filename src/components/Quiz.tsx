import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import { calculatePersonalityType } from "@/types/quizTypes";
import { saveToGoogleSheets } from "@/utils/googleSheets";
import type { User } from "@/types/quizTypes";

export default function Quiz() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      navigate("/");
      return;
    }
    setUserData(JSON.parse(storedUser));
  }, [navigate]);

  const handleAnswer = async (answer: string) => {
    if (!userData) return;

    const updatedUser = {
      ...userData,
      answers: {
        ...userData.answers,
        [currentQuestion]: answer,
      },
    };

    if (currentQuestion === QUIZ_QUESTIONS.length - 1) {
      // Calculate personality type
      const personalityType = calculatePersonalityType(updatedUser.answers, QUIZ_QUESTIONS);
      const finalUser = {
        ...updatedUser,
        personalityType,
      };

      try {
        // Save to Google Sheets
        await saveToGoogleSheets(finalUser);
        
        // Save to local storage for backup
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        localStorage.setItem("users", JSON.stringify([...users, finalUser]));
        
        // Clear current user
        localStorage.removeItem("currentUser");
        
        // Navigate to thank you page
        navigate("/thank-you");
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to save quiz results. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUserData(updatedUser);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (!userData) return null;

  const question = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
      <Card className="w-full max-w-2xl p-8 animate-slideIn">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-sm text-gray-500">{progress.toFixed(0)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <h2 className="text-2xl font-semibold mb-8">{question.text}</h2>

        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="p-6 text-left justify-start hover:bg-primary hover:text-white transition-colors"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
