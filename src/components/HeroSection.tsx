import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";

const roles = ["B.Tech CSE Student", "Web Developer", "Problem Solver", "Open Source Contributor"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "X" },
    { icon: Globe, href: "#", label: "Portfolio" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="text-primary font-handwriting text-2xl mb-2">Hello World! 👋</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-primary neon-text-pink">Arshi Khan</span>
          </h1>
          <div className="h-8 mb-6">
            <span className="text-secondary text-lg sm:text-xl font-body">
              {text}
              <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed mb-8">
            Passionate about building innovative and impactful digital solutions through clean code and modern technologies.
          </p>

          <div className="flex gap-3 mb-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:neon-glow-pink transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold text-sm neon-glow-pink hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-secondary text-secondary rounded-lg font-heading font-semibold text-sm neon-glow-yellow hover:bg-secondary/10 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
            <img
              src={heroCharacter}
              alt="Arshi Khan - Developer"
              className="relative w-64 sm:w-80 lg:w-96 animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
