import { useState, useEffect } from "react";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
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
import { QUIZ_QUESTIONS } from "@/types/quiz";
import { fetchFromGoogleSheets } from "@/utils/googleSheets";
import type { User } from "@/types/quiz";

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
        // Ensure the data is in the correct format
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

  const getQuestionText = (questionId: string) => {
    const id = parseInt(questionId);
    return QUIZ_QUESTIONS[id]?.text || "Question not found";
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
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}