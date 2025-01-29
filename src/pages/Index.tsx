import { Routes, Route } from "react-router-dom";
import RegistrationForm from "@/components/RegistrationForm";
import Quiz from "@/components/Quiz";
import ThankYou from "@/components/ThankYou";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <AdminDashboard />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Index;