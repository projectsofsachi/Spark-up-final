import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import NavigationOverlay from "@/components/NavigationOverlay";
import SkillUpgradeSection from "@/components/SkillUpgradeSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <NavigationOverlay />
      <HeroSection />
      <TaglineSection />
      <section id="events">
        <AboutSection />
      </section>
      <VisionSection />
      <SpeakersSection />
      <section id="glimpse">
        <SponsorsSection />
      </section>
      <section id="skill-upgrade">
        <SkillUpgradeSection />
      </section>
      <section id="team">
        <ContactSection />
      </section>
      <FooterSection />
    </main>
  );
};

export default Index;
