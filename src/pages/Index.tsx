import { Routes, Route } from "react-router-dom";
import RegistrationForm from "@/components/RegistrationForm";
import Quiz from "@/components/Quiz";
import ThankYou from "@/components/ThankYou";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-4 flex justify-center items-center bg-white shadow-sm">
        <img 
          src="/lovable-uploads/9b28c832-9207-49e9-b094-b3e3bca1639d.png" 
          alt="Logo" 
          className="h-12 w-12"
        />
      </header>
      <main className="flex-grow">
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