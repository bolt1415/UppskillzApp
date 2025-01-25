import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminLoginProps {
  password: string;
  setPassword: (password: string) => void;
  handleLogin: () => void;
}

export default function AdminLogin({ password, setPassword, handleLogin }: AdminLoginProps) {
  return (
    <div className="space-y-4">
      <Input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}