import { useEffect, useRef, useState } from "react";

const SpeakersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [dotScale, setDotScale] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      
      // Calculate how far into the section we've scrolled
      // When section top hits bottom of viewport: progress = 0
      // When section is centered: progress = ~0.5
      // When section top hits top of viewport: progress = 1
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      setDotScale(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When dot scale is large enough, transition background to white
  const bgWhite = dotScale > 0.85;
  const dotSize = Math.max(20, dotScale * Math.max(window.innerWidth, window.innerHeight) * 3);

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-dark bg-noise py-24 px-6 md:px-20 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center transition-colors duration-500"
    >
      {/* Expanding white circle overlay */}
      <div
        className="absolute rounded-full bg-white transition-all duration-700 ease-out pointer-events-none"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          left: '50%',
          top: '60%',
          transform: 'translate(-50%, -50%)',
          opacity: dotScale > 0.15 ? Math.min(1, dotScale * 1.5) : 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          className="font-display text-5xl md:text-7xl mb-6 transition-colors duration-500"
          style={{ color: bgWhite ? 'hsl(0 0% 5%)' : 'hsl(var(--primary))' }}
        >
          SPEAKERS
        </h2>
        <p
          className="font-display text-4xl md:text-6xl mb-12 transition-colors duration-500"
          style={{ color: bgWhite ? 'hsl(0 0% 5%)' : 'hsl(var(--primary))' }}
        >
          Revealing Soon.
        </p>
      </div>
    </section>
  );
};

export default SpeakersSection;
