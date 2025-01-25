import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center animate-slideIn">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">
          We appreciate your participation in our personality quiz. Your responses have been recorded successfully.
        </p>
        <Button onClick={() => navigate("/")} className="w-full">
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
}