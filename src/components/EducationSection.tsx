import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    title: "Higher Secondary",
    institution: "Spring Day Higher Secondary School",
    detail: "Board: MP BOARD",
    year: "2023",
  },
  {
    title: "B.Tech CSE",
    institution: "Shri Ram Institute of Technology, Jabalpur",
    detail: "Degree: Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)",
    year: "2023–2027",
  },
  {
    title: "Internship",
    institution: "Future Interns",
    detail: "Role: Full Stack Web Development",
    year: "2026",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            <GraduationCap className="inline-block mr-2 text-primary" size={36} />
            <span className="text-primary neon-text-pink">EDUCATION</span>
            <span className="text-secondary">.LOG</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          <div className="absolute left-4 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent md:hidden" />

          <div className="space-y-12">
            {educationData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full neon-glow-pink z-10" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="relative group">
                    {/* Yellow shadow layer */}
                    <div className="absolute inset-0 bg-secondary/20 rounded-xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                    <div className="relative bg-primary/10 border border-primary/30 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                      <span className="text-xs text-secondary font-heading font-semibold bg-secondary/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="font-handwriting text-2xl text-primary mt-3 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-foreground text-sm font-heading font-medium">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
