import { Instagram, Linkedin } from "lucide-react";
import footerDetectiveLeft from "@/assets/footer-detective-left.png";
import footerDetectiveRight from "@/assets/footer-detective-right.png";

const FooterSection = () => {
  return (
    <footer className="relative bg-surface-dark border-t border-primary/20 overflow-hidden">
      {/* Top content area */}
      <div className="relative z-10 px-6 md:px-20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left: Branding */}
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-wider">
              SP<span className="text-primary">A</span>RK<span className="text-primary">U</span>P
            </h3>
            <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-wider -mt-1">
              S<span className="text-primary">U</span>MMIT
            </h3>
            <p className="font-mono text-muted-foreground text-xs mt-4 max-w-xs leading-relaxed">
              Where ideas collide, innovation thrives,
              and curiosity leads the way forward.
            </p>
          </div>

          {/* Center: Spirit */}
          <div className="flex-1 text-center">
            <p className="font-mono text-muted-foreground text-xs tracking-[0.3em] mb-2">THE SPIRIT</p>
            <p className="font-mono text-foreground text-sm font-bold tracking-wider">
              THINK • BUILD • COMPETE • CELEBRATE
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-border rounded-full px-6 py-2">
              <span className="font-mono text-muted-foreground text-xs">VISITORS</span>
              <span className="font-mono text-primary text-lg font-bold">7,168</span>
            </div>
          </div>

          {/* Right: Presented By + Social */}
          <div className="flex-1 text-right">
            <p className="font-mono text-muted-foreground text-xs tracking-[0.2em] mb-1">PRESENTED BY</p>
            <p className="font-mono text-foreground text-sm font-bold">
              Entrepreneurship Development Cell
            </p>
            <p className="font-mono text-muted-foreground text-xs mt-1">Silicon University</p>

            <p className="font-mono text-muted-foreground text-xs tracking-[0.2em] mt-6 mb-2">CONNECT</p>
            <div className="flex items-center justify-end gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Detective figures */}
      <div className="absolute bottom-0 left-0 w-48 md:w-64 opacity-60">
        <img src={footerDetectiveLeft} alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 md:w-64 opacity-60">
        <img src={footerDetectiveRight} alt="" className="w-full" />
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-border/20 py-6 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-muted-foreground text-xs tracking-wider">
            SPARK UP SUMMIT 2026 • SILICON UNIVERSITY
          </p>
          <p className="font-mono text-muted-foreground text-xs mt-2 italic">
            "The case is solved when innovation meets curiosity."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
