import { useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const RegisterThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationOverlay />
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="max-w-lg w-full text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-display text-primary text-4xl md:text-5xl mb-4">
            Thank You!
          </h1>
          <p className="text-foreground text-lg mb-4">
            Thank you for your valuable time and for registering with us.
          </p>
          <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
            Your registration amount will be updated to your ERP account section. 
            Please check your ERP portal for payment details and confirmation.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 rounded-lg bg-secondary text-foreground font-semibold text-sm border border-border hover:opacity-90 transition-opacity"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => navigate("/events")}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Events
            </button>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default RegisterThankYou;
