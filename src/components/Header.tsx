import { useEffect, useState } from "react";
import logoEdc from "@/assets/logo-edc.png";
import logoIic from "@/assets/logo-iic.png";
import logo25 from "@/assets/logo-25years.png";

const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 py-3 bg-background/90 backdrop-blur-md border-b border-border/20 transition-all duration-500 ${
        headerVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10" />
        <img src={logoEdc} alt="Entrepreneurship Development Cell" className="h-10 md:h-12 object-contain" />
      </div>
      <div className="flex items-center">
        <img src={logoIic} alt="Institution's Innovation Council" className="h-10 md:h-14 object-contain" />
      </div>
      <div className="flex items-center gap-4">
        <img src={logo25} alt="25 Years Silicon Silver Jubilee" className="h-10 md:h-12 object-contain" />
        <span className="text-lg md:text-2xl font-bold text-foreground tracking-wider">SiliconTech</span>
      </div>
    </header>
  );
};

export default Header;
