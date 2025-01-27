import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { User } from "@/types/userTypes";
import QuizProgress from "./QuizProgress";
import QuizQuestion from "./QuizQuestion";
import { useQuizSubmission } from "./QuizSubmission";
import { EI_QUESTIONS } from "@/data/quizCategories/eiQuestions";
import { NS_QUESTIONS } from "@/data/quizCategories/nsQuestions";
import { TF_QUESTIONS } from "@/data/quizCategories/tfQuestions";
import { JP_QUESTIONS } from "@/data/quizCategories/jpQuestions";

// Combine all question sets
const ALL_QUESTIONS = [
  ...EI_QUESTIONS.slice(0, 5),  // Take first 5 from each category
  ...NS_QUESTIONS.slice(0, 5),
  ...TF_QUESTIONS.slice(0, 5),
  ...JP_QUESTIONS.slice(0, 5)
];

export default function QuizContainer() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userData, setUserData] = useState<User | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { handleSubmission } = useQuizSubmission();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      navigate("/");
      return;
    }
    setUserData(JSON.parse(storedUser));
  }, [navigate]);

  const handleAnswer = (answer: string) => {
    if (!userData || isSaving || hasSubmitted) return;

    const updatedUser = {
      ...userData,
      answers: {
        ...userData.answers,
        [currentQuestion]: answer,
      },
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUserData(updatedUser);

    if (currentQuestion < ALL_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    handleSubmission({
      updatedUser,
      setIsSaving,
      setHasSubmitted,
      hasSubmitted,
      navigate
    });
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
      <Card className="w-full max-w-2xl p-8 animate-slideIn">
        <QuizProgress 
          currentQuestion={currentQuestion} 
          totalQuestions={ALL_QUESTIONS.length} 
        />
        <QuizQuestion
          question={ALL_QUESTIONS[currentQuestion]}
          onAnswer={handleAnswer}
          isSaving={isSaving}
        />
      </Card>
    </div>
  );
}