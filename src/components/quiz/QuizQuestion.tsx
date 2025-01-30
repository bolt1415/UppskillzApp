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
    <>
      <h2 className="text-2xl font-semibold mb-8">{question.text}</h2>
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === option.text ? "default" : "outline"}
            className="p-6 text-left justify-start hover:bg-primary hover:text-white transition-colors"
            onClick={() => handleOptionSelect(option.text)}
            disabled={isSaving}
          >
            {option.text}
          </Button>
        ))}
      </div>
      {selectedAnswer && (
        <Button
          className="mt-6 w-full"
          onClick={handleConfirm}
          disabled={isSaving}
        >
          Confirm Answer
        </Button>
      )}
    </>
  );
}