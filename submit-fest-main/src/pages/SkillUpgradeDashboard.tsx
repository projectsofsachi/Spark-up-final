import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const SkillUpgradeDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("skill_current_user");
    if (!stored) {
      navigate("/skill-upgrade/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("skill_current_user");
    navigate("/skill-upgrade/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationOverlay />
      <Header />

      <div className="flex-1 px-6 pt-28 pb-16">
        <div className="max-w-2xl mx-auto">
          {/* Welcome badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span>🎉</span>
            <span className="text-xs font-semibold tracking-wider text-primary">
              WELCOME
            </span>
          </div>

          <h1 className="font-display text-5xl text-foreground mb-4">
            Hello,{" "}
            <span className="text-primary italic">{user.username}</span>
          </h1>
          <p className="text-base text-muted-foreground mb-10">
            You're logged in! We would be honoured to connect with you and request your photo for our Teacher Honour section.
          </p>

          {/* Saved Details Card */}
          <div className="rounded-2xl p-8 bg-card border-2 border-primary">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
              <span>📋</span> Your Saved Details
            </h2>

            <div className="space-y-4">
              {[
                { label: "NAME", value: user.username },
                { label: "EMAIL", value: user.email },
                { label: "PHONE", value: user.phone },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-3 border-b border-border"
                >
                  <span className="text-xs tracking-wider text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-semibold text-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-secondary text-foreground border border-border transition-opacity hover:opacity-90"
            >
              ← Back to Home
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground transition-opacity hover:opacity-90"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default SkillUpgradeDashboard;
