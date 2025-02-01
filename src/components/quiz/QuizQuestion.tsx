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
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 break-words">{question.text}</h2>
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === option.text ? "default" : "outline"}
            className="p-4 md:p-6 text-left justify-start break-words hover:bg-primary hover:text-white transition-colors min-h-[60px]"
            onClick={() => handleOptionSelect(option.text)}
            disabled={isSaving}
          >
            {option.text}
          </Button>
        ))}
      </div>
      <Button
        className="mt-6 w-full"
        onClick={handleConfirm}
        disabled={isSaving || !selectedAnswer}
      >
        Confirm Answer
      </Button>
    </div>
  );
}