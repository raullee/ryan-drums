"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Voice Actor",
  "Musician",
  "Actor",
  "Educator",
  "Polymath",
];

function Waveform() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.07] pointer-events-none">
      <div className="flex items-end gap-[3px] h-[400px]">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className={`w-[2px] bg-[#D4A843] rounded-full ${
              i % 3 === 0 ? "waveform-bar" : i % 3 === 1 ? "waveform-bar-2" : "waveform-bar-3"
            }`}
            style={{
              animationDelay: `${i * 0.05}s`,
              height: "40%",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nameLetters = "RYAN LEE BHASKARAN".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Waveform />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4A843]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#22D3EE]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 text-center px-6">
        {/* Name - letter by letter */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + i * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={letter === " " ? "inline-block w-4 sm:w-6 md:w-8" : "inline-block"}
              style={{
                background: "linear-gradient(135deg, #F5F5F5 0%, #D4A843 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Cycling role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-[#D4A843]"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-white/40 font-mono tracking-wider mb-8"
        >
          <span>5+ Iconic Characters</span>
          <span className="text-[#D4A843]">·</span>
          <span>15+ Years</span>
          <span className="text-[#D4A843]">·</span>
          <span>1 Aspiring Polymath</span>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-sm text-white/30 tracking-[0.3em] uppercase"
        >
          Kuala Lumpur, Malaysia 🇲🇾
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
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-16 bg-gradient-to-b from-[#D4A843] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
