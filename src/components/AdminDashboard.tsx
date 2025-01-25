import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { fetchFromGoogleSheets } from "@/utils/googleSheets";
import AdminLogin from "./admin/AdminLogin";
import UserList from "./admin/UserList";
import type { User } from "@/types/quizTypes";

const ADMIN_PASSWORD = "admin123"; // In a real app, this would be securely stored

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [expandedUser, setExpandedUser] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const { toast } = useToast();

  const handleLogin = async () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      try {
        const sheetsData = await fetchFromGoogleSheets();
        const formattedData = sheetsData.map((user: any) => ({
          ...user,
          answers: typeof user.answers === 'string' 
            ? JSON.parse(user.answers) 
            : user.answers
        }));
        setUsers(formattedData);
        toast({
          title: "Success",
          description: "Admin access granted",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch data",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive",
      });
    }
    setPassword("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Admin Dashboard</DialogTitle>
        </DialogHeader>

        {!isAuthenticated ? (
          <AdminLogin
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        ) : (
          <UserList
            users={users}
            expandedUser={expandedUser}
            setExpandedUser={setExpandedUser}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}