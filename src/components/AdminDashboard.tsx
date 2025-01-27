import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { fetchFromGoogleSheets } from "@/utils/googleSheets";
import AdminLogin from "./admin/AdminLogin";
import UserList from "./admin/UserList";
import type { User } from "@/types/userTypes";

const ADMIN_PASSWORD = "admin123"; // In a real app, this would be securely stored

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [expandedUser, setExpandedUser] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setIsLoading(true);
      try {
        const sheetsData = await fetchFromGoogleSheets();
        setUsers(sheetsData);
        toast({
          title: "Success",
          description: "Admin access granted and data loaded successfully",
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
        toast({
          title: "Error",
          description: "Failed to fetch data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
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

  const handleRefreshData = async () => {
    setIsLoading(true);
    try {
      const sheetsData = await fetchFromGoogleSheets();
      setUsers(sheetsData);
      toast({
        title: "Success",
        description: "Data refreshed successfully",
      });
    } catch (error) {
      console.error('Failed to refresh data:', error);
      toast({
        title: "Error",
        description: "Failed to refresh data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          <DialogDescription>
            View and manage quiz submissions
          </DialogDescription>
        </DialogHeader>

        {!isAuthenticated ? (
          <AdminLogin
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        ) : (
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button 
                onClick={handleRefreshData}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Refresh Data"}
              </Button>
            </div>
            <UserList
              users={users}
              expandedUser={expandedUser}
              setExpandedUser={setExpandedUser}
              isLoading={isLoading}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
