"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const roles = ["Voice Actor", "Musician", "Actor", "Educator", "Polymath"];

function SoundWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center overflow-hidden opacity-[0.08] pointer-events-none">
      <div className="flex items-end gap-[2px] h-full w-full max-w-4xl px-8">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 bg-[#D4A843] rounded-t-full ${
              i % 3 === 0 ? "waveform-bar" : i % 3 === 1 ? "waveform-bar-2" : "waveform-bar-3"
            }`}
            style={{
              animationDelay: `${i * 0.04}s`,
              height: "30%",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay bg-[#0A0A0B]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B] pointer-events-none z-[1]" />

      {/* Ambient glow */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#D4A843]/[0.04] rounded-full blur-[200px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#C17F59]/[0.03] rounded-full blur-[200px]" />
      </motion.div>

      <SoundWave />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-[-0.02em] mb-8 text-[#F5F0E8]"
        >
          Ryan Lee
          <br />
          <span className="text-[#D4A843]">Bhaskaran</span>
        </motion.h1>

        {/* Cycling role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="h-12 flex items-center justify-center mb-10"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 40 }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase text-[#C17F59] font-sans font-light"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.2 }}
          className="font-sans text-base sm:text-lg text-[#F5F0E8]/40 max-w-lg mx-auto leading-relaxed mb-8"
        >
          The voice you&apos;ve heard but never placed.
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="font-sans text-xs text-[#F5F0E8]/25 tracking-[0.4em] uppercase"
        >
          Kuala Lumpur, Malaysia
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-20 bg-gradient-to-b from-[#D4A843]/60 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
