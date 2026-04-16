import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const SkillUpgradeSignup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { username, email, phone, password };
    const stored = sessionStorage.getItem("skill_users");
    const users = stored ? JSON.parse(stored) : [];
    users.push(user);
    sessionStorage.setItem("skill_users", JSON.stringify(users));
    sessionStorage.setItem("skill_current_user", JSON.stringify(user));
    navigate("/skill-upgrade/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationOverlay />
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-10">
          <h1 className="text-center font-display text-4xl text-foreground mb-2">
            Create account
          </h1>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Please Use Your ERP User Name And Password For The Convenience
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "USER NAME", type: "text", value: username, setter: setUsername, placeholder: "Enter username" },
              { label: "EMAIL", type: "email", value: email, setter: setEmail, placeholder: "you@example.com" },
              { label: "PHONE NUMBER", type: "tel", value: phone, setter: setPhone, placeholder: "Enter phone number" },
              { label: "PASSWORD", type: "password", value: password, setter: setPassword, placeholder: "••••••" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs font-bold tracking-wider mb-2 text-primary">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3.5 rounded-lg text-sm outline-none bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-opacity hover:opacity-90"
            >
              Create Account →
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/skill-upgrade/login")}
              className="font-semibold text-primary hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default SkillUpgradeSignup;
