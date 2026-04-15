import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const SkillUpgradeLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = sessionStorage.getItem("skill_users");
    const users = stored ? JSON.parse(stored) : [];
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      sessionStorage.setItem("skill_current_user", JSON.stringify(user));
      navigate("/skill-upgrade/dashboard");
    } else {
      alert("Invalid credentials. Please sign up first.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationOverlay />
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          <h1 className="text-center font-display text-4xl text-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold tracking-wider mb-2 text-muted-foreground">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wider mb-2 text-muted-foreground">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-opacity hover:opacity-90"
            >
              Sign In →
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/skill-upgrade/signup")}
              className="font-semibold text-primary hover:underline"
            >
              Create one
            </button>
          </p>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default SkillUpgradeLogin;
