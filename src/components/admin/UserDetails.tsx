import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserAnswers from "./UserAnswers";
import type { User } from "@/types/userTypes";

interface UserDetailsProps {
  user: User;
  index: number;
  expandedUser: number | null;
  setExpandedUser: (index: number | null) => void;
}

export default function UserDetails({ 
  user, 
  index, 
  expandedUser, 
  setExpandedUser 
}: UserDetailsProps) {
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
      
      {expandedUser === index && (
        <UserAnswers user={user} />
      )}
    </div>
  );
}
