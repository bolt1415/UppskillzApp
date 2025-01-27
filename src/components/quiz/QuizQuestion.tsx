import { Button } from "@/components/ui/button";
import type { Question } from "@/types/quizTypes";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
  isSaving: boolean;
}

export default function QuizQuestion({ question, onAnswer, isSaving }: QuizQuestionProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">{question.text}</h2>
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="p-6 text-left justify-start hover:bg-primary hover:text-white transition-colors"
            onClick={() => onAnswer(option.text)}
            disabled={isSaving}
          >
            {option.text}
          </Button>
        ))}
      </div>
    </>
  );
}