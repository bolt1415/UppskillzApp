import type { User } from "@/types/userTypes";
import { QUIZ_QUESTIONS } from "@/data/quizData";

interface UserAnswersProps {
  user: User;
}

export default function UserAnswers({ user }: UserAnswersProps) {
  const getQuestionText = (questionId: string) => {
    const id = parseInt(questionId);
    const question = QUIZ_QUESTIONS[id];
    console.log('Getting question text for ID:', id, 'Found:', question?.text);
    return question?.text || "Question not found";
  };

  if (!user.answers) return null;

  console.log('Rendering answers for user:', user.fullName, 'Answers:', user.answers);

  return (
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
  );
}