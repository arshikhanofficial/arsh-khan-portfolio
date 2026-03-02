import { motion } from "framer-motion";
import { Code, Palette, FileCode, Atom, BrainCircuit, GitBranch, Lightbulb, Globe } from "lucide-react";

const skills = [
  { name: "HTML", icon: Globe, color: "primary" },
  { name: "CSS", icon: Palette, color: "secondary" },
  { name: "JavaScript", icon: FileCode, color: "primary" },
  { name: "React", icon: Atom, color: "secondary" },
  { name: "Python", icon: Code, color: "primary" },
  { name: "AI / ML", icon: BrainCircuit, color: "secondary" },
  { name: "Git & GitHub", icon: GitBranch, color: "primary" },
  { name: "Problem Solving", icon: Lightbulb, color: "secondary" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            <span className="text-secondary neon-text-yellow">⚡</span> Skills.exe
          </h2>
          <p className="text-muted-foreground font-handwriting text-xl">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card rounded-xl p-6 text-center group cursor-default transition-all duration-300 hover:-translate-y-2 ${
                color === "primary" ? "hover:neon-glow-pink" : "hover:neon-glow-yellow"
              }`}
            >
              <Icon
                className={`mx-auto mb-3 transition-colors duration-300 ${
                  color === "primary"
                    ? "text-primary group-hover:text-primary"
                    : "text-secondary group-hover:text-secondary"
                }`}
                size={36}
              />
              <p className="text-sm font-heading font-semibold text-foreground">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
