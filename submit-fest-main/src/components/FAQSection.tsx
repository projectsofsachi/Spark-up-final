import { useState } from "react";

const faqs = [
  {
    question: "Who can attend SparkUp Summit?",
    answer: "SparkUp Summit is open to all students, entrepreneurs, innovators, and anyone passionate about entrepreneurship and innovation. Whether you're a budding entrepreneur or a seasoned professional, you're welcome to join us.",
  },
  {
    question: "How can I register for the summit?",
    answer: "You can register through our website by clicking the Register button in the navigation menu. Fill out the registration form with your details and you'll receive a confirmation email.",
  },
  {
    question: "What can attendees expect at the summit?",
    answer: "Attendees can look forward to inspiring keynote sessions, interactive workshops, networking opportunities, pitch competitions, and mentorship sessions with industry leaders.",
  },
  {
    question: "Can I participate in the summit virtually?",
    answer: "Currently, SparkUp Summit is designed as an in-person experience to maximize networking and collaboration opportunities. Stay tuned for updates on virtual participation options.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-surface-dark bg-noise py-24 px-6 md:px-20 min-h-[70vh]">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display text-foreground text-5xl md:text-7xl text-center mb-16">
          FAQ
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-border/30 transition-colors duration-300 ${
                openIndex === i ? "bg-muted/40" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 px-4 text-left"
              >
                <span className="font-mono text-foreground text-sm md:text-base">
                  <span className="font-display text-primary text-lg mr-1">Q.</span>
                  {faq.question}
                </span>
                <span className="text-foreground text-xl ml-4 shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-4 pb-6 font-mono text-muted-foreground text-sm leading-relaxed">
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

export default FAQSection;
