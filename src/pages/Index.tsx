import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import RegistrationForm from "@/components/RegistrationForm";
import Quiz from "@/components/Quiz";
import ThankYou from "@/components/ThankYou";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Debug logs for application initialization
    console.log("Application initialized");
    console.log("Current route:", window.location.pathname);
    
    // Debug environment variables and configuration
    console.log("Environment:", import.meta.env.MODE);
    
    // Debug window size for responsive design
    console.log("Window dimensions:", {
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <AdminDashboard />
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Index;