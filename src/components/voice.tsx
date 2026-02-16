"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const voiceRoles = [
  {
    character: "Gopal",
    show: "BoBoiBoy: The Movie & Elemental Heroes",
    note: "Malaysia's #1 animated franchise",
    year: "2016 / 2019",
  },
  {
    character: "Robin",
    show: "Teen Titans",
    note: "Malaysian English Dub",
    year: "",
  },
  {
    character: "Finn the Human",
    show: "Adventure Time",
    note: "Malaysian English Dub",
    year: "",
  },
  {
    character: "Ron Stoppable",
    show: "Kim Possible",
    note: "Malaysian English Dub",
    year: "",
  },
  {
    character: "Jay Walker",
    show: "Ninjago",
    note: "Malaysian English Dub",
    year: "",
  },
];

export function Voice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="voice" className="relative py-36 px-6 bg-[#0A0A0B] grain-overlay" ref={ref}>
      {/* Decorative music note watermark */}
      <div className="absolute top-20 right-10 text-[20rem] leading-none font-serif text-[#D4A843]/[0.03] pointer-events-none select-none">
        ♪
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-baseline gap-6 mb-6"
        >
          <span className="font-serif text-8xl sm:text-9xl font-bold text-[#D4A843]/10 leading-none">
            01
          </span>
          <p className="font-sans text-xs tracking-[0.4em] text-[#D4A843] uppercase">
            Voice
          </p>
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#F5F0E8]"
        >
          The Voice Behind
          <br />
          <span className="italic text-[#D4A843]">the Characters</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-[#F5F0E8]/40 text-lg mb-20 max-w-xl leading-relaxed"
        >
          From Malaysia&apos;s biggest animated franchise to beloved international
          cartoons — chances are, you&apos;ve heard this voice.
        </motion.p>

        {/* Editorial cards */}
        <div className="space-y-0">
          {voiceRoles.map((role, i) => (
            <motion.div
              key={role.character}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group border-b border-[#F5F0E8]/5 py-10 sm:py-12 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 hover:border-[#D4A843]/30 transition-colors duration-700 cursor-default"
            >
              {/* Number */}
              <span className="font-sans text-sm text-[#D4A843]/40 tracking-wider font-light tabular-nums w-12 shrink-0">
                0{i + 1}
              </span>

              {/* Character */}
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F0E8] group-hover:text-[#D4A843] transition-colors duration-500 flex-1">
                {role.character}
              </h3>

              {/* Show info */}
              <div className="sm:text-right">
                <p className="font-sans text-[#F5F0E8]/60 text-base">{role.show}</p>
                <p className="font-sans text-[#F5F0E8]/25 text-sm italic mt-1">{role.note}</p>
                {role.year && (
                  <p className="font-sans text-xs text-[#D4A843]/40 mt-1 tracking-wider">{role.year}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
