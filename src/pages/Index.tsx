import { Routes, Route } from "react-router-dom";
import { Menu } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import Quiz from "@/components/Quiz";
import ThankYou from "@/components/ThankYou";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <main className="flex-grow">
        <div className="flex justify-between items-center p-4">
          <Menu className="h-6 w-6 cursor-pointer" />
          <img 
            src="/lovable-uploads/9b28c832-9207-49e9-b094-b3e3bca1639d.png" 
            alt="Logo" 
            className="h-16 w-16"
          />
          <div className="w-6" /> {/* Empty div for flex spacing */}
        </div>
        <AdminDashboard />
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Index;