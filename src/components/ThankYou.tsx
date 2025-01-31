import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { getProfileDetails } from "@/utils/personalityCalculator";
import { Card } from "@/components/ui/card";

export default function ThankYou() {
  const navigate = useNavigate();
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const lastUser = storedUsers[storedUsers.length - 1];
  const profile = lastUser?.personalityType ? getProfileDetails(lastUser.personalityType) : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-primary to-secondary p-4">
      <div className="w-32 h-32 mb-8 mt-8">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>
      <Card className="max-w-2xl w-full p-8 space-y-6 animate-slideIn">
        <h1 className="text-3xl font-bold text-center">Your Results</h1>
        
        {profile ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Profile: {profile.name}</h2>
              <p className="text-gray-600">{profile.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Key Strengths</h3>
              <p className="text-gray-600">{profile.keyStrengths}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Training Recommendations</h3>
              <p className="text-gray-600">{profile.trainingRecommendations}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center">No results available</p>
        )}

        <Button onClick={() => navigate("/")} className="w-full mt-8">
          Take Quiz Again
        </Button>
      </Card>
    </div>
  );
}