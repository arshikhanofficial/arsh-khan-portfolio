import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Lumos Code",
    description:
      "A browser-based live HTML/CSS/JS editor that lets users write, preview, auto-save, and download web code in real time — perfect for quick prototyping and learning.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Info Fusion",
    description:
      "A React-powered news web app that fetches live headlines from the News API and displays them in a clean, responsive interface allowing users to browse top stories by category.",
    tech: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    title: "Task Mate",
    description:
      "A dynamic and intuitive To-Do List application that allows users to add, remove, and manage daily tasks in a clean responsive interface with saved data.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            🚀 <span className="text-foreground">PROJECTS</span>
            <span className="text-secondary">.DIR</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="relative">
                {/* Offset shadow */}
                <div className="absolute inset-0 bg-secondary/15 rounded-xl translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />

                <div className="relative border-2 border-border rounded-xl overflow-hidden bg-card hover:-translate-y-2 transition-all duration-300 group-hover:neon-glow-pink">
                  {/* Browser bar */}
                  <div className="bg-secondary/90 px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/70" />
                      <div className="w-3 h-3 rounded-full bg-secondary/70" />
                      <div className="w-3 h-3 rounded-full bg-accent/50" />
                    </div>
                    <div className="flex-1 bg-background/50 rounded-md px-3 py-1 text-[10px] text-muted-foreground truncate ml-2">
                      {project.title.toLowerCase().replace(/\s/g, "-")}.dev
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-heading"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-heading font-semibold hover:scale-105 transition-transform"
                      >
                        <ExternalLink size={12} /> Demo
                      </a>
                      <a
                        href="#"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-border text-foreground text-xs font-heading font-semibold hover:border-primary hover:text-primary transition-colors"
                      >
                        <Github size={12} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
