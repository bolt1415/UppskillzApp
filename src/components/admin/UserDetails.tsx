import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/quizTypes";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";

interface UserDetailsProps {
  user: User;
  index: number;
  expandedUser: number | null;
  setExpandedUser: (index: number | null) => void;
}

export default function UserDetails({ user, index, expandedUser, setExpandedUser }: UserDetailsProps) {
  const getQuestionText = (questionId: string) => {
    const id = parseInt(questionId);
    return QUIZ_QUESTIONS[id]?.text || "Question not found";
  };

  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div>
            <span className="font-semibold">Name:</span> {user.fullName}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {user.email}
          </div>
          <div>
            <span className="font-semibold">Age:</span> {user.age}
          </div>
          <div>
            <span className="font-semibold">Sex:</span> {user.sex}
          </div>
          <div className="col-span-2">
            <span className="font-semibold">Personality Type:</span>{" "}
            <span className="text-primary font-bold">{user.personalityType}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={() => setExpandedUser(expandedUser === index ? null : index)}
        >
          {expandedUser === index ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {expandedUser === index && user.answers && (
        <div className="mt-4 border-t pt-4">
          <h3 className="font-semibold mb-2">Detailed Answers:</h3>
          <div className="grid gap-2">
            {Object.entries(user.answers).map(([questionId, answer]) => (
              <div key={questionId} className="text-sm">
                <div className="font-medium">
                  Q{parseInt(questionId) + 1}: {getQuestionText(questionId)}
                </div>
                <div className="ml-4 text-gray-600">
                  Answer: {answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}