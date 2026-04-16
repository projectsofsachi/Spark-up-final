import { useEffect, useState, useRef } from "react";
import heroFigureDown from "@/assets/hero-figure-down.png";
import heroFigureUp from "@/assets/hero-figure-up.png";
import Header from "@/components/Header";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 200;

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-dark">
      {/* Background figure - looking down reading paper */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${heroFigureDown})`,
          opacity: scrolled ? 0 : 0.7,
        }}
      />
      {/* Background figure - looking up with big eyes */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${heroFigureUp})`,
          opacity: scrolled ? 0.7 : 0,
        }}
      />

      {/* Spotlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <Header />

      {/* Main title */}
      <div className="relative z-10 text-center">
        <p className="font-display text-primary text-lg md:text-xl tracking-widest mb-2">
          The
        </p>
        <p className="font-display text-primary text-lg md:text-xl tracking-widest mb-6">
          Entrepreneurship Development Cell
          <br />
          Presents
        </p>

        <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tight text-foreground flex items-center justify-center">
          SP
          {/* Magnifying glass A */}
          <span className="relative inline-block" style={{ width: '0.65em', height: '1em' }}>
            <svg viewBox="0 0 100 140" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 15,130 30,130 42,95 58,95 70,130 85,130" fill="currentColor" />
              <rect x="38" y="80" width="24" height="10" fill="hsl(var(--surface-dark))" />
              <circle cx="50" cy="52" r="28" stroke="hsl(var(--foreground))" strokeWidth="6" fill="none" />
              <line x1="70" y1="72" x2="90" y2="100" stroke="hsl(var(--primary))" strokeWidth="7" strokeLinecap="round" />
              <path d="M25 30 Q50 18 75 30" stroke="hsl(var(--foreground))" strokeWidth="4" fill="hsl(var(--foreground))" />
              <path d="M35 30 Q50 5 65 30" fill="hsl(var(--foreground))" />
              <path d="M40 55 Q45 40 55 50 Q60 58 50 60" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          RK<span className="text-primary">U</span>P
        </h1>
        <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tight text-foreground -mt-2 md:-mt-4">
          SUMMIT
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <span className="text-foreground text-2xl">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
