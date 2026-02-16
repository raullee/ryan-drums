"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const voiceRoles = [
  {
    character: "Gopal",
    show: "BoBoiBoy: The Movie & Elemental Heroes",
    note: "Malaysia's #1 animated franchise",
    role: "English Voice",
    year: "2016 / 2019",
    emoji: "⚡",
    color: "#D4A843",
  },
  {
    character: "Ron Stoppable",
    show: "Kim Possible",
    note: "Malaysian English Dub",
    role: "English Voice",
    year: "",
    emoji: "🦸",
    color: "#22D3EE",
  },
  {
    character: "Robin",
    show: "Teen Titans",
    note: "Malaysian English Dub",
    role: "English Voice",
    year: "",
    emoji: "🦅",
    color: "#D4A843",
  },
  {
    character: "Finn the Human",
    show: "Adventure Time",
    note: "Malaysian English Dub",
    role: "English Voice",
    year: "",
    emoji: "⚔️",
    color: "#22D3EE",
  },
  {
    character: "Jay Walker",
    show: "Ninjago",
    note: "Malaysian English Dub",
    role: "English Voice",
    year: "",
    emoji: "🥷",
    color: "#D4A843",
  },
];

function VoiceCard({
  role,
  index,
}: {
  role: (typeof voiceRoles)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="group relative bg-[#111113] border border-white/5 rounded-xl p-6 sm:p-8 hover-glow cursor-default overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: role.color }}
      />

      {/* Emoji / Icon */}
      <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {role.emoji}
      </div>

      {/* Character name */}
      <h3
        className="text-2xl sm:text-3xl font-bold mb-1 transition-colors duration-300"
        style={{ color: role.color }}
      >
        {role.character}
      </h3>

      {/* Show name */}
      <p className="text-white/80 font-medium mb-1">{role.show}</p>

      {/* Note */}
      <p className="text-sm text-white/40 italic mb-4">{role.note}</p>

      {/* Role badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/10 text-white/50">
          {role.role}
        </span>
        {role.year && (
          <span className="text-xs font-mono tracking-wider text-white/30">
            {role.year}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function Voice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="voice" className="relative py-32 px-6" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4A843]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm font-mono tracking-[0.4em] text-[#D4A843] uppercase mb-4"
        >
          01 — Voice
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          The Voice Behind
          <br />
          <span className="text-[#D4A843]">the Characters</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/40 text-lg mb-16 max-w-xl"
        >
          From Malaysia&apos;s biggest animated franchise to beloved international
          cartoons — chances are, you&apos;ve heard this voice.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {voiceRoles.map((role, i) => (
            <VoiceCard key={role.character} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
