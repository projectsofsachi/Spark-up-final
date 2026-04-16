import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { User, Mail, Phone, Settings2, ArrowRight } from "lucide-react";

const SOLO_EVENTS = ["Idea Build-Up"];

const RegisterPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventName = searchParams.get("event") || "Event";
  const isSolo = SOLO_EVENTS.includes(eventName);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSiliconStudent, setIsSiliconStudent] = useState("Yes");
  const [sic, setSic] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [teamSize, setTeamSize] = useState(isSolo ? "1" : "");
  const [members, setMembers] = useState<{ name: string; sic: string; branch: string }[]>([]);

  const teamCount = parseInt(teamSize) || 0;

  const handleTeamSizeChange = (val: string) => {
    setTeamSize(val);
    const count = parseInt(val) || 0;
    const extraMembers = Math.max(0, count - 1);
    setMembers(
      Array.from({ length: extraMembers }, (_, i) => members[i] || { name: "", sic: "", branch: "" })
    );
  };

  const updateMember = (idx: number, field: string, value: string) => {
    setMembers((prev) => prev.map((m, i) => (i === idx ? { ...m, [field]: value } : m)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/register/thankyou");
  };

  const inputClass =
    "w-full px-4 py-3.5 pl-12 rounded-lg text-sm outline-none bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary transition-all";
  const selectClass =
    "w-full px-4 py-3.5 pl-12 rounded-lg text-sm outline-none bg-secondary border border-border text-foreground focus:ring-2 focus:ring-primary transition-all appearance-none";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationOverlay />
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="w-full max-w-xl">
          <h1 className="text-center font-display text-4xl md:text-5xl text-foreground mb-2">
            Enter Your Details
          </h1>
          <p className="text-center text-sm text-muted-foreground mb-10">
            Registering for: <span className="text-primary font-semibold">{eventName}</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className={inputClass} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Email id</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className={inputClass} />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Phone number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className={inputClass} />
              </div>
            </div>

            {/* Silicon Student */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Are you a Student of Silicon University</label>
              <div className="relative">
                <Settings2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select value={isSiliconStudent} onChange={(e) => setIsSiliconStudent(e.target.value)} className={selectClass}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            {/* SIC */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Enter your SIC</label>
              <div className="relative">
                <Settings2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" value={sic} onChange={(e) => setSic(e.target.value)} placeholder="Enter your SIC" className={inputClass} />
              </div>
            </div>

            {/* Branch */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Enter Your Branch</label>
              <div className="relative">
                <Settings2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="Enter Your Branch" className={inputClass} />
              </div>
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-bold mb-2 text-foreground">Year of Study</label>
              <div className="relative">
                <Settings2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select value={year} onChange={(e) => setYear(e.target.value)} className={selectClass}>
                  <option value="">Select your year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>
            </div>

            {/* Team Size */}
            {!isSolo && (
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Team Size</label>
                <div className="relative">
                  <Settings2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select value={teamSize} onChange={(e) => handleTeamSizeChange(e.target.value)} className={selectClass}>
                    <option value="">Select Team Size</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            )}

            {/* Team Member Details */}
            {members.length > 0 && (
              <div className="space-y-6 pt-4 border-t border-border">
                <h3 className="text-foreground font-bold text-lg">Team Member Details</h3>
                {members.map((member, idx) => (
                  <div key={idx} className="space-y-3 p-4 rounded-xl bg-card border border-border">
                    <p className="text-primary text-sm font-bold">Member {idx + 2}</p>
                    <input type="text" required placeholder="Name" value={member.name} onChange={(e) => updateMember(idx, "name", e.target.value)} className={inputClass.replace("pl-12", "pl-4")} />
                    <input type="text" placeholder="SIC" value={member.sic} onChange={(e) => updateMember(idx, "sic", e.target.value)} className={inputClass.replace("pl-12", "pl-4")} />
                    <input type="text" placeholder="Branch" value={member.branch} onChange={(e) => updateMember(idx, "branch", e.target.value)} className={inputClass.replace("pl-12", "pl-4")} />
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between pt-4">
              <button type="button" onClick={() => navigate(-1)} className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                Back
              </button>
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default RegisterPage;
