import { useState, useRef, useEffect } from "react";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

import male1 from "@/assets/team/male1.png";
import male2 from "@/assets/team/male2.png";
import male3 from "@/assets/team/male3.png";
import male4 from "@/assets/team/male4.png";
import male5 from "@/assets/team/male5.png";
import male6 from "@/assets/team/male6.png";
import female1 from "@/assets/team/female1.png";
import female2 from "@/assets/team/female2.png";
import female3 from "@/assets/team/female3.png";

const malePhotos = [male1, male2, male3, male4, male5, male6];
const femalePhotos = [female1, female2, female3];

const femaleNames = new Set([
  "Priyanshi Dubey", "Puja Mahato", "Garima Mohapatra", "Swati Mohanty",
  "Akankshya Swain", "Prachi Mishra", "Divya Rout", "Sneha Kumari",
  "Ritika Sahoo", "Meera Das", "Priya Sharma", "Shruti Nayak",
  "Shalini Das", "Tanvi Gupta", "Neha Swain", "Payal Jena",
  "Megha Tripathy", "Isha Nayak", "Sweta Panda", "Gargi Mohanty",
  "Ankita Mishra", "Riya Panda", "Pallavi Dash", "Jyoti Sahoo",
  "Ashlesa Mahapatra", "Ananya Patel",
]);

function getPhoto(name: string, index: number): string {
  if (femaleNames.has(name)) {
    return femalePhotos[index % femalePhotos.length];
  }
  return malePhotos[index % malePhotos.length];
}

const departments = [
  "DIRECTORS",
  "SPONSORSHIP",
  "EVENT MANAGEMENT",
  "WEBSITE",
  "GRAPHICS",
  "DOCUMENTATION",
  "SOCIAL MEDIA",
  "PR & MARKETING",
  "CREATIVE",
  "MEDIA PRODUCTION",
] as const;

type Department = typeof departments[number];

interface TeamMember {
  name: string;
  role: string;
}

const teamData: Record<Department, TeamMember[]> = {
  "DIRECTORS": [
    { name: "Shaswat Tripathi", role: "President" },
    { name: "Shubham Srivastav", role: "Vice President" },
    { name: "Piush Praharaj", role: "Director" },
    { name: "Priyanshi Dubey", role: "Director" },
    { name: "Puja Mahato", role: "Director" },
  ],
  "SPONSORSHIP": [
    { name: "Jayadeep Dash", role: "Lead" },
    { name: "Suryanshu Panigrahi", role: "Co-Lead" },
    { name: "Nishan Mishra", role: "Member" },
    { name: "Pranav Kumar", role: "Member" },
    { name: "S N Parshuram Swain", role: "Member" },
    { name: "Garima Mohapatra", role: "Member" },
  ],
  "EVENT MANAGEMENT": [
    { name: "Prakhar Mishra", role: "Lead" },
    { name: "S N Parsuram Swain", role: "Co-Lead" },
    { name: "Shubham Kumar Jha", role: "Member" },
    { name: "Sampad Prasad Nayak", role: "Member" },
    { name: "Arjun Behera", role: "Member" },
    { name: "Ritik Patel", role: "Member" },
    { name: "Swati Mohanty", role: "Member" },
    { name: "Aman Sahoo", role: "Member" },
  ],
  "WEBSITE": [
    { name: "Satyam Sinha", role: "Lead" },
    { name: "Md. Rizvi Hassan Ansari", role: "Member" },
    { name: "Bhimesh Kr Mehra", role: "Member" },
    { name: "Jasdeep Singh", role: "Member" },
  ],
  "GRAPHICS": [
    { name: "Bhimesh Kr Mehra", role: "Lead" },
    { name: "Rishabh Kumar", role: "Co-Lead" },
    { name: "Jayadeep Dash", role: "Member" },
    { name: "Akankshya Swain", role: "Member" },
    { name: "Nitin Pradhan", role: "Member" },
    { name: "Prachi Mishra", role: "Member" },
    { name: "Saurav Nanda", role: "Member" },
    { name: "Divya Rout", role: "Member" },
  ],
  "DOCUMENTATION": [
    { name: "Ananya Patel", role: "Documentation Head" },
    { name: "Rohan Verma", role: "Co-Lead" },
    { name: "Sneha Kumari", role: "Member" },
    { name: "Aditya Mohanty", role: "Member" },
    { name: "Ritika Sahoo", role: "Member" },
    { name: "Harsh Panda", role: "Member" },
    { name: "Meera Das", role: "Member" },
    { name: "Vivek Jena", role: "Member" },
  ],
  "SOCIAL MEDIA": [
    { name: "Ashlesa Mahapatra", role: "Social Media Head" },
    { name: "Anubhav Poddar", role: "Co-Lead" },
    { name: "Aryan Singh", role: "Member" },
    { name: "Priya Sharma", role: "Member" },
    { name: "Soumya Dash", role: "Member" },
    { name: "Tanmay Rout", role: "Member" },
    { name: "Shruti Nayak", role: "Member" },
    { name: "Alok Behera", role: "Member" },
  ],
  "PR & MARKETING": [
    { name: "Vikram Rout", role: "PR & Marketing Head" },
    { name: "Shalini Das", role: "Co-Lead" },
    { name: "Rahul Behera", role: "Member" },
    { name: "Tanvi Gupta", role: "Member" },
    { name: "Akash Mohanty", role: "Member" },
    { name: "Neha Swain", role: "Member" },
    { name: "Debasis Sahoo", role: "Member" },
    { name: "Payal Jena", role: "Member" },
  ],
  "CREATIVE": [
    { name: "Deepak Sahoo", role: "Creative Head" },
    { name: "Megha Tripathy", role: "Co-Lead" },
    { name: "Kunal Pradhan", role: "Member" },
    { name: "Isha Nayak", role: "Member" },
    { name: "Ranjan Mishra", role: "Member" },
    { name: "Sweta Panda", role: "Member" },
    { name: "Anil Das", role: "Member" },
    { name: "Gargi Mohanty", role: "Member" },
  ],
  "MEDIA PRODUCTION": [
    { name: "Soumya Ranjan", role: "Media Production Head" },
    { name: "Ankita Mishra", role: "Co-Lead" },
    { name: "Siddharth Jena", role: "Member" },
    { name: "Riya Panda", role: "Member" },
    { name: "Bibhu Rout", role: "Member" },
    { name: "Pallavi Dash", role: "Member" },
    { name: "Manish Nayak", role: "Member" },
    { name: "Jyoti Sahoo", role: "Member" },
  ],
};

const Team = () => {
  const [activeDept, setActiveDept] = useState<Department>("DIRECTORS");
  const tabBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabBarRef.current) {
      const activeBtn = tabBarRef.current.querySelector('[data-active="true"]');
      activeBtn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeDept]);

  const members = teamData[activeDept];

  // Track male/female index separately for photo cycling
  let maleIdx = 0;
  let femaleIdx = 0;

  return (
    <main className="overflow-x-hidden bg-background min-h-screen flex flex-col">
      <NavigationOverlay />
      <Header />

      <section className="pt-28 pb-4 text-center">
        <h1 className="font-display text-foreground text-4xl md:text-7xl">
          Meet the <span className="text-primary italic">Team</span>
        </h1>
      </section>

      <div className="text-center py-6">
        <h2 className="font-display text-foreground/80 text-2xl md:text-4xl">
          {activeDept.charAt(0) + activeDept.slice(1).toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
      </div>

      <section className="flex-1 px-4 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {members.map((member, i) => {
            const isFemale = femaleNames.has(member.name);
            const photo = isFemale
              ? femalePhotos[femaleIdx++ % femalePhotos.length]
              : malePhotos[maleIdx++ % malePhotos.length];

            return (
              <div key={i} className="text-center">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 border border-border/20">
                  <img
                    src={photo}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <p className="font-display text-foreground text-sm md:text-base leading-tight">
                  {member.name}
                </p>
                <p className="font-mono text-primary text-xs mt-1">
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="sticky bottom-0 z-30 bg-surface-dark/95 backdrop-blur-md border-t border-primary/30 py-3 px-2">
        <div
          ref={tabBarRef}
          className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto scrollbar-hide"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              data-active={activeDept === dept}
              onClick={() => setActiveDept(dept)}
              className={`font-mono text-[10px] md:text-xs tracking-wider px-3 md:px-4 py-2 rounded-full whitespace-nowrap transition-all shrink-0 ${
                activeDept === dept
                  ? "bg-foreground text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default Team;
