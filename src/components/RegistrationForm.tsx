import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import type { User } from "@/types/quiz";
import { saveToGoogleSheets } from "@/utils/googleSheets";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    sex: "",
    age: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (!formData.fullName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return;
    }

    const age = parseInt(formData.age);
    if (isNaN(age) || age < 13 || age > 100) {
      toast({
        title: "Invalid age",
        description: "Age must be a number between 13 and 100",
        variant: "destructive",
      });
      return;
    }

    if (!formData.sex) {
      toast({
        title: "Sex required",
        description: "Please select your sex",
        variant: "destructive",
      });
      return;
    }

    // Save user data
    const userData: User = {
      email: formData.email,
      fullName: formData.fullName,
      sex: formData.sex as "male" | "female",
      age: age,
      answers: {},
    };

    console.log('User Data to Save:', userData);

    try {
      await saveToGoogleSheets(userData); // Save to Google Sheets
      localStorage.setItem("currentUser", JSON.stringify(userData));
      setFormData({ email: "", fullName: "", sex: "", age: "" }); // Reset form
      navigate("/quiz");
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      toast({
        title: "Error",
        description: "Failed to save data. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-primary to-secondary p-4">
      <div className="w-32 h-32 mb-8 mt-8">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 animate-slideIn">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to Upskilling</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              aria-describedby="email-error"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Walid Azaro"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              aria-describedby="name-error"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sex">Sex</Label>
            <Select
              value={formData.sex}
              onValueChange={(value) => setFormData({ ...formData, sex: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="25"
              min="13"
              max="100"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
              aria-describedby="age-error"
            />
          </div>

          <Button type="submit" className="w-full">
            Start Quiz
          </Button>
        </form>
      </div>
    </div>
  );
}