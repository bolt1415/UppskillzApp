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
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-primary to-secondary p-4 overflow-x-hidden">
      <div className="w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-8 mt-6 md:mt-8">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>
      <Card className="max-w-2xl w-full p-4 md:p-8 space-y-4 md:space-y-6 animate-slideIn">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Your Results</h1>
        
        {profile ? (
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Profile: {profile.name}</h2>
              <p className="text-gray-600 break-words">{profile.description}</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Key Strengths</h3>
              <p className="text-gray-600 break-words">{profile.keyStrengths}</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Training Recommendations</h3>
              <p className="text-gray-600 break-words">{profile.trainingRecommendations}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center">No results available</p>
        )}

        <Button onClick={() => navigate("/")} className="w-full mt-6">
          Take Quiz Again
        </Button>
      </Card>
    </div>
  );
}