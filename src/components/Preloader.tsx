import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return Math.min(prev + step + Math.random() * 0.5, 100);
      });
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, hsl(220 30% 4%), hsl(240 20% 8%), hsl(260 25% 6%))",
      }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `hsl(${190 + Math.random() * 80} 80% 60% / 0.4)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Light rays */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(200 90% 50% / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Neon ring */}
      <motion.div
        className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center"
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, hsl(190 90% 50% / 0.8), hsl(230 80% 55% / 0.6), hsl(270 70% 60% / 0.8), hsl(190 90% 50% / 0.8))",
            padding: "3px",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Outer glow */}
        <motion.div
          className="absolute inset-[-8px] rounded-full"
          style={{
            boxShadow: "0 0 30px hsl(200 90% 50% / 0.3), 0 0 60px hsl(260 70% 60% / 0.15), inset 0 0 30px hsl(200 90% 50% / 0.1)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Glass center */}
        <div
          className="absolute inset-[4px] rounded-full flex flex-col items-center justify-center"
          style={{
            background: "hsl(220 25% 6% / 0.9)",
            backdropFilter: "blur(12px)",
          }}
        >
          <motion.span
            className="text-3xl md:text-4xl font-heading font-bold tracking-wider"
            style={{
              background: "linear-gradient(135deg, hsl(190 90% 60%), hsl(260 70% 65%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              filter: "drop-shadow(0 0 8px hsl(200 90% 50% / 0.5))",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            AS
          </motion.span>
        </div>
      </motion.div>

      {/* Name */}
      <motion.p
        className="mt-5 text-sm md:text-base font-heading tracking-[0.3em] uppercase"
        style={{ color: "hsl(200 60% 70%)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Arshi Khan
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="mt-10 w-52 md:w-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ background: "hsl(220 20% 12%)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(190 90% 50%), hsl(230 80% 55%), hsl(270 70% 60%))",
              boxShadow: "0 0 10px hsl(200 90% 50% / 0.5)",
            }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex justify-between mt-2">
          <span
            className="text-[10px] font-body tracking-widest uppercase"
            style={{ color: "hsl(220 15% 45%)" }}
          >
            Loading...
          </span>
          <span
            className="text-[10px] font-body tabular-nums"
            style={{ color: "hsl(200 60% 60%)" }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
