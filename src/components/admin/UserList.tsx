import type { User } from "@/types/quizTypes";
import UserDetails from "./UserDetails";

interface UserListProps {
  users: User[];
  expandedUser: number | null;
  setExpandedUser: (index: number | null) => void;
}

export default function UserList({ users, expandedUser, setExpandedUser }: UserListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Quiz Participants</h2>
      <div className="grid gap-4">
        {users.map((user, index) => (
          <UserDetails
            key={index}
            user={user}
            index={index}
            expandedUser={expandedUser}
            setExpandedUser={setExpandedUser}
          />
        ))}
      </div>
    </div>
  );
}