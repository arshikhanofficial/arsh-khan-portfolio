import { useState, useEffect } from "react";
import { Home, User, Zap, FolderOpen, Mail, GraduationCap, Award } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Zap, label: "Skills" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "certificates", icon: Award, label: "Certificates" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center h-16 gap-1 sm:gap-4">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`group flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 ${
              active === id
                ? "text-primary neon-glow-pink bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
