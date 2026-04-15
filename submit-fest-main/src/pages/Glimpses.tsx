import { useState } from "react";
import { ChevronDown } from "lucide-react";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

import glimpse1 from "@/assets/glimpses/glimpse1.png";
import glimpse2 from "@/assets/glimpses/glimpse2.png";
import glimpse3 from "@/assets/glimpses/glimpse3.png";

const categories = ["ALL", "INAUGURATION", "EVENTS", "CLOSING"] as const;
type Category = typeof categories[number];

const glimpses = [
  { id: 1, category: "INAUGURATION" as Category, image: glimpse1 },
  { id: 2, category: "INAUGURATION" as Category, image: glimpse2 },
  { id: 3, category: "INAUGURATION" as Category, image: glimpse3 },
  { id: 4, category: "EVENTS" as Category, image: glimpse1 },
  { id: 5, category: "EVENTS" as Category, image: glimpse2 },
  { id: 6, category: "EVENTS" as Category, image: glimpse3 },
  { id: 7, category: "EVENTS" as Category, image: glimpse1 },
  { id: 8, category: "CLOSING" as Category, image: glimpse2 },
  { id: 9, category: "CLOSING" as Category, image: glimpse3 },
  { id: 10, category: "CLOSING" as Category, image: glimpse1 },
];

const CARD_HEIGHT = 500;

const Glimpses = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filtered = activeCategory === "ALL"
    ? glimpses
    : glimpses.filter((g) => g.category === activeCategory);

  return (
    <main className="overflow-x-hidden bg-background min-h-screen flex flex-col">
      <NavigationOverlay />
      <Header />

      {/* Hero title */}
      <section className="pt-28 pb-4 text-center flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="font-display text-foreground text-5xl md:text-8xl tracking-wider">
          EVENT
        </h1>
        <h1 className="font-display text-primary text-5xl md:text-8xl tracking-wider -mt-2">
          GLIMPSES
        </h1>
        <p className="font-display text-foreground/80 text-sm md:text-lg mt-6 tracking-wider">
          Moments that defined the experience
        </p>
        <ChevronDown className="w-6 h-6 text-foreground/50 mt-8 animate-bounce" />
      </section>

      {/* Stacking cards with images */}
      <section className="relative px-4 md:px-8 pb-24 flex-1">
        {filtered.map((photo, index) => (
          <div
            key={photo.id}
            style={{ height: `${CARD_HEIGHT}px` }}
          >
            <div
              className="sticky max-w-5xl mx-auto"
              style={{
                top: `${80 + index * 10}px`,
                zIndex: index + 1,
                height: `${CARD_HEIGHT}px`,
              }}
            >
              <div className="rounded-2xl overflow-hidden border border-border/30 h-full shadow-2xl">
                <img
                  src={photo.image}
                  alt={`${photo.category} glimpse #${photo.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Sticky bottom filter bar */}
      <div className="sticky bottom-0 z-30 bg-surface-dark/95 backdrop-blur-md border-t border-primary/30 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs md:text-sm tracking-wider px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-foreground text-background font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default Glimpses;
