import type { User } from "@/types/userTypes";
import UserDetails from "./UserDetails";
import { Skeleton } from "@/components/ui/skeleton";

interface UserListProps {
  users: User[];
  expandedUser: number | null;
  setExpandedUser: (index: number | null) => void;
  isLoading: boolean;
}

export default function UserList({ users, expandedUser, setExpandedUser, isLoading }: UserListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Loading submissions...</h2>
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold mb-2">No submissions yet</h2>
        <p className="text-gray-500">Quiz submissions will appear here once users complete the quiz.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Quiz Participants ({users.length})</h2>
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