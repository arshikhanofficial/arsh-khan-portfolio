import { motion } from "framer-motion";
import { Code2, Rocket, Users, Coffee } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects", value: "10+" },
  { icon: Rocket, label: "Hackathons", value: "5+" },
  { icon: Users, label: "Open Source", value: "Active" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            <span className="text-primary neon-text-pink">&lt;</span> About Me{" "}
            <span className="text-primary neon-text-pink">/&gt;</span>
          </h2>
          <p className="text-muted-foreground font-handwriting text-xl">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-8"
          >
            <h3 className="font-handwriting text-3xl text-secondary mb-1">Arshi Khan</h3>
            <p className="text-primary text-sm font-heading mb-4">
              Building the Future, One Line at a Time
            </p>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                I'm a passionate B.Tech Computer Science student with a deep love for building innovative digital solutions. My journey in tech started with curiosity and has evolved into a mission to create impactful applications that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects, or exploring the latest in web technologies and AI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center group hover:neon-glow-pink transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="mx-auto mb-3 text-primary group-hover:text-secondary transition-colors" size={28} />
                <p className="text-2xl font-heading font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
