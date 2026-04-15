import { useEffect, useRef, useState } from "react";
import contactSilhouette from "@/assets/contact-silhouette.png";

const faqs = [
  {
    question: "Who can attend SparkUp Summit?",
    answer: "SparkUp Summit is open to all students, entrepreneurs, innovators, and anyone passionate about entrepreneurship and innovation.",
  },
  {
    question: "How can I register for the summit?",
    answer: "You can register through our website by clicking the Register button. Fill out the form and you'll receive a confirmation email.",
  },
  {
    question: "What can attendees expect at the summit?",
    answer: "Attendees can look forward to inspiring keynotes, interactive workshops, networking, pitch competitions, and mentorship sessions.",
  },
  {
    question: "Can I participate in the summit virtually?",
    answer: "Currently, SparkUp Summit is an in-person experience. Stay tuned for updates on virtual participation options.",
  },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(0.4);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      
      // Scale human from small to covering
      const newScale = 0.4 + progress * 1.6;
      setScale(newScale);
      
      // Show FAQ when human has expanded enough
      setShowFAQ(progress > 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-dark bg-noise py-24 px-6 md:px-20 overflow-hidden min-h-[120vh] flex flex-col items-center justify-start"
    >
      {/* Expanding silhouette background */}
      <div
        className="absolute bottom-0 left-1/2 origin-bottom transition-transform duration-300 pointer-events-none"
        style={{ transform: `translateX(-50%) scale(${scale})` }}
      >
        <img src={contactSilhouette} alt="" className="w-[600px] md:w-[900px] opacity-90" />
      </div>

      {/* Any Queries heading */}
      <div className="relative z-10 text-center mt-12 mb-8">
        <h2 className="font-display text-primary text-6xl md:text-8xl mb-2">
          Any
        </h2>
        <h2 className="font-display text-primary text-6xl md:text-8xl">
          Queries?
        </h2>
      </div>

      {/* FAQ content that appears inside the silhouette */}
      <div
        className={`relative z-10 max-w-3xl w-full mx-auto mt-16 transition-all duration-700 ${
          showFAQ ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h3 className="font-display text-foreground/80 text-4xl md:text-6xl text-center mb-12">
          FAQ
        </h3>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-border/20 transition-colors duration-300 ${
                openIndex === i ? "bg-muted/20" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 px-4 text-left"
              >
                <span className="font-mono text-foreground/70 text-sm md:text-base">
                  <span className="font-display text-primary text-lg mr-1">Q.</span>
                  {faq.question}
                </span>
                <span className="text-foreground/70 text-xl ml-4 shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-4 pb-5 font-mono text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
