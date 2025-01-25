import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import type { User } from "@/types/quiz";

const ADMIN_PASSWORD = "admin123"; // In a real app, this would be securely stored

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "Admin access granted",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive",
      });
    }
    setPassword("");
  };

  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

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
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Quiz Participants</h2>
            <div className="grid gap-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 space-y-2"
                >
                  <div className="grid grid-cols-2 gap-2">
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
                  </div>
                  <div>
                    <span className="font-semibold">Quiz Answers:</span>
                    <div className="mt-2 grid gap-2">
                      {Object.entries(user.answers).map(([questionId, answer]) => (
                        <div key={questionId} className="text-sm">
                          <span className="font-medium">Q{parseInt(questionId) + 1}:</span> {answer}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}