import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

// Original certificates
import certGoogleAmbassador from "@/assets/cert-google-ambassador.png";
import certCodeSocial from "@/assets/cert-code-social.png";
import certTataCrucible from "@/assets/cert-tata-crucible.png";
import certCisco from "@/assets/cert-cisco.png";
import certOracle from "@/assets/cert-oracle.png";
import certTechnoGenesis from "@/assets/cert-techno-genesis.png";
import certSmartedDsa from "@/assets/cert-smarted-dsa.png";
import certGoogleGemini from "@/assets/cert-google-gemini.png";

// New certificates
import certDevtownPythonML from "@/assets/cert-devtown-python-ml.png";
import certGeeksVultr from "@/assets/cert-geeks-vultr.png";
import certLetsUpgradeReact from "@/assets/cert-letsupgrade-react.png";
import certLetsUpgradeHTMLCSS from "@/assets/cert-letsupgrade-html-css.png";
import certDevtownReactChatgpt from "@/assets/cert-devtown-react-chatgpt.png";
import certGoogleGemini2 from "@/assets/cert-google-gemini-2.png";
import certLetsUpgradeVibeCoding from "@/assets/cert-letsupgrade-vibe-coding.png";
import certGoogleResponsibleAI from "@/assets/cert-google-responsible-ai.png";

const certificates = [
  // Google Student Ambassador
  {
    title: "Google Student Ambassador Program",
    org: "Google Gemini / PING Network",
    date: "Dec 31, 2025",
    description: "Certificate of Participation for active participation in the Google Student Ambassador Program, demonstrating enthusiasm, collaboration, and a strong willingness to learn and contribute.",
    image: certGoogleAmbassador,
  },
  // Google Gemini Program
  {
    title: "Google Gemini Program",
    org: "Google Student Ambassador",
    date: "Sep 6, 2025",
    description: "Certificate of Participation in the Google Gemini Program at Shri Ram Institute of Science and Technology, Jabalpur, demonstrating enthusiasm, leadership, and commitment.",
    image: certGoogleGemini,
  },
  // Google Gemini Program (Second Certificate)
  {
    title: "Google Gemini Program",
    org: "Google Student Ambassador - SRIT Jabalpur",
    date: "Sep 6, 2025",
    description: "Certificate of Participation for the Google Gemini Program, recognizing valuable contributions in spreading knowledge and skills within the community.",
    image: certGoogleGemini2,
  },
  // Google Responsible AI
  {
    title: "Introduction to Responsible AI",
    org: "Google Cloud / Simplilearn",
    date: "Sep 7, 2025",
    description: "Successfully completed the online course on Introduction to Responsible AI, demonstrating initiative and commitment to deepening skills in AI ethics.",
    image: certGoogleResponsibleAI,
  },
  // DevTown Python & ML
  {
    title: "Python & Machine Learning Bootcamp",
    org: "DevTown / GDSC Giet University",
    date: "2024",
    description: "Certificate of Completion for successfully completing 7-days bootcamp on Python and Machine Learning with DevTown.",
    image: certDevtownPythonML,
  },
  // DevTown React & ChatGPT
  {
    title: "React.js & JavaScript ChatGPT Clone",
    org: "DevTown / GDSC / AWS Community",
    date: "Oct 25, 2024",
    description: "Certificate of Participation for successfully completing 7-days Free Bootcamp on React.js and JavaScript ChatGPT Clone development.",
    image: certDevtownReactChatgpt,
  },
  // GeeksforGeeks Vultr Hackathon
  {
    title: "Vultr Cloud Innovate Hackathon",
    org: "GeeksforGeeks / Campus Mantri",
    date: "2024",
    description: "Successfully participated in Vultr Cloud Innovate Hackathon through the Campus Ambassador Program by GeeksforGeeks.",
    image: certGeeksVultr,
  },
  // Let's Upgrade React
  {
    title: "React Bootcamp",
    org: "Let's Upgrade / NSDC / ITM Edutech / GDG MAD",
    date: "Sep 4-6, 2025",
    description: "Successfully completed the React Bootcamp (3 Days) in collaboration with National Skill Development Corporation and Google Developer Group.",
    image: certLetsUpgradeReact,
  },
  // Let's Upgrade HTML & CSS
  {
    title: "HTML & CSS Bootcamp",
    org: "Let's Upgrade / NSDC / ITM Edutech / GDG MAD",
    date: "Sep 1-3, 2025",
    description: "Successfully completed the HTML & CSS Bootcamp (3 Days) in collaboration with National Skill Development Corporation.",
    image: certLetsUpgradeHTMLCSS,
  },
  // Let's Upgrade Vibe Coding
  {
    title: "Idea to Deployment using Vibe Coding",
    org: "Let's Upgrade / NSDC / ITM Edutech / GDG MAD",
    date: "Sep 15-17, 2025",
    description: "Successfully completed the Vibe Coding Bootcamp (3 Days) covering the complete deployment workflow from idea to production.",
    image: certLetsUpgradeVibeCoding,
  },
  // Code Social
  {
    title: "Winter of Code Social 2025",
    org: "Code Social",
    date: "Nov 2025 – Jan 2026",
    description: "Successfully completed Winter of Code Social 2025 as a Contributor, an open source focused learning and contribution program organized by Code Social.",
    image: certCodeSocial,
  },
  // Tata Crucible
  {
    title: "Tata Crucible Campus Quiz 2025",
    org: "Internshala / Tata Crucible",
    date: "Nov 12, 2025",
    description: "Certificate of Participation in Prelims Level 1 of the Tata Crucible Campus Quiz 2025, demonstrating enthusiasm, effort, and commitment.",
    image: certTataCrucible,
  },
  // Cisco
  {
    title: "Greenhouse Gas Accounting for IT",
    org: "Cisco Networking Academy / OnePointFive",
    date: "Oct 17, 2025",
    description: "Statement of Achievement for completing the Introduction to Greenhouse Gas Accounting for IT course, provided by Cisco Networking Academy.",
    image: certCisco,
  },
  // Oracle
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    org: "Oracle University",
    date: "Sep 23, 2025",
    description: "Oracle Certified Foundations Associate — recognized by Oracle Corporation as Oracle Certified in Cloud Infrastructure AI Foundations.",
    image: certOracle,
  },
  // Techno Genesis
  {
    title: "Techno Genesis 2025 — Volunteer",
    org: "Shri Ram Group, Jabalpur",
    date: "Jul 1, 2025",
    description: "Certificate of Participation as a Volunteer at Techno Genesis 2025, SRIT Jabalpur. Recognized for hard work, dedication, and achievement.",
    image: certTechnoGenesis,
  },
  // Smarted DSA
  {
    title: "Data Structures & Algorithms",
    org: "Smarted / Startup India",
    date: "Dec 2, 2025",
    description: "Certificate of Course Completion for successfully completing the Data Structures & Algorithms course, showcasing dedication and a passion for learning.",
    image: certSmartedDsa,
  },
];

interface ModalData {
  title: string;
  org: string;
  date: string;
  description: string;
  image: string;
}

const CertificateCard = ({
  cert,
  onClick,
}: {
  cert: (typeof certificates)[0];
  onClick: () => void;
}) => (
  <motion.div
    className="flex-shrink-0 w-[320px] sm:w-[360px] cursor-pointer group"
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
  >
    <div className="rounded-[18px] bg-card border border-border overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-shadow duration-300 group-hover:shadow-[0_10px_40px_hsl(330_90%_60%/0.2)]">
      <div className="relative overflow-hidden rounded-t-[14px]">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-[200px] object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,8%)] via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-4 space-y-1.5">
        <h3 className="font-heading font-semibold text-foreground text-sm leading-tight line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-muted-foreground text-xs font-body">{cert.org}</p>
      </div>
    </div>
  </motion.div>
);

const CertificateModal = ({
  data,
  onClose,
}: {
  data: ModalData;
  onClose: () => void;
}) => (
  <motion.div
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative max-w-2xl w-full rounded-2xl bg-card border-2 border-primary overflow-hidden shadow-[0_0_40px_hsl(330_90%_60%/0.3)]"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/80 text-foreground hover:text-primary transition-colors"
      >
        <X size={20} />
      </button>
      <img
        src={data.image}
        alt={data.title}
        className="w-full max-h-[400px] object-contain bg-background"
      />
      <div className="p-6 space-y-2">
        <h3 className="font-heading font-bold text-foreground text-lg">{data.title}</h3>
        <p className="text-primary text-sm font-body">{data.org}</p>
        <p className="text-muted-foreground text-xs">{data.date}</p>
        <p className="text-muted-foreground text-sm leading-relaxed pt-2">{data.description}</p>
      </div>
    </motion.div>
  </motion.div>
);

const CertificatesSection = () => {
  const [modal, setModal] = useState<ModalData | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate for infinite loop
  const doubled = [...certificates, ...certificates];

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="text-accent" size={28} />
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
            🏅 CERTIFICATES<span className="text-primary">.LOG</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          A showcase of my achievements, certifications, and recognitions from various hackathons, workshops, and programs.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2 font-body">
          Hover to pause • Click to view details
        </p>
      </motion.div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={scrollRef}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: isPaused ? undefined : [0, -(certificates.length * (360 + 24))],
            }}
            transition={{
              x: {
                duration: 50,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            style={{ width: "max-content" }}
          >
            {doubled.map((cert, i) => (
              <CertificateCard
                key={`${cert.title}-${i}`}
                cert={cert}
                onClick={() => setModal(cert)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && <CertificateModal data={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
