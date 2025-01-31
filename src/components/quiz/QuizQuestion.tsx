import { Button } from "@/components/ui/button";
import type { Question } from "@/types/quizTypes";
import { useState } from "react";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
  isSaving: boolean;
}

export default function QuizQuestion({ question, onAnswer, isSaving }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleConfirm = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 break-words">{question.text}</h2>
      <div className="grid gap-3 sm:gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === option.text ? "default" : "outline"}
            className="p-4 sm:p-6 text-left justify-start hover:bg-primary hover:text-white transition-colors break-words"
            onClick={() => handleOptionSelect(option.text)}
            disabled={isSaving}
          >
            {option.text}
          </Button>
        ))}
      </div>
      <Button
        className="mt-4 sm:mt-6 w-full"
        onClick={handleConfirm}
        disabled={isSaving || !selectedAnswer}
      >
        Confirm Answer
      </Button>
    </div>
  );
}