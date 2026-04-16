import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NavigationOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Home", href: "/", type: "route" },
    { label: "Events", href: "/events", type: "route" },
    { label: "Team", href: "/team", type: "route" },
    { label: "Glimpse", href: "/glimpses", type: "route" },
    { label: "Mentor's Gallery", href: "/skill-upgrade", type: "route" },
  ];

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleLinkClick = (link: { label: string; href: string; type: string }) => {
    closeMenu();
    if (link.type === "route") {
      navigate(link.href);
    } else {
      const hash = link.href.replace("/", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Hamburger button - hidden when menu is open */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-50 flex flex-col gap-1.5 group"
          aria-label="Open menu"
        >
          <span className="block w-8 h-0.5 bg-foreground transition-all group-hover:w-10" />
          <span className="block w-8 h-0.5 bg-foreground transition-all group-hover:w-10" />
          <span className="block w-6 h-0.5 bg-foreground transition-all group-hover:w-10" />
        </button>
      )}

      {/* Fullscreen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] animate-fade-in">
          <div className="absolute inset-0 bg-white" />

          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 left-6 z-[110] font-mono text-sm tracking-widest text-black hover:text-red-600 transition-colors"
            aria-label="Close menu"
          >
            close
          </button>

          {/* Navigation links */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
            {links.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className="flex items-center gap-3 text-black font-mono text-3xl md:text-4xl tracking-wide hover:text-red-600 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${150 + i * 80}ms` }}
              >
                {link.label}
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            ))}

            <button
              onClick={() => {
                closeMenu();
                navigate("/register");
              }}
              className="mt-4 px-12 py-4 bg-red-600 text-white font-mono text-xl md:text-2xl rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "470ms" }}
            >
              Register
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-48 h-2 bg-surface-dark" />
        </div>
      )}
    </>
  );
};

export default NavigationOverlay;
