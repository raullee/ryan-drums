"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credits = [
  {
    title: "Gadoh",
    year: "2009",
    role: "Raj",
    type: "Feature Film",
    description: "A groundbreaking Malaysian indie exploring racial tensions and unity through the eyes of young Malaysians.",
  },
  {
    title: "BoBoiBoy: The Movie",
    year: "2016",
    role: "Gopal (English)",
    type: "Animated Feature",
    description: "Box office hit. Malaysia's biggest animated franchise makes its feature debut.",
  },
  {
    title: "BoBoiBoy: Elemental Heroes",
    year: "2019",
    role: "Gopal (English)",
    type: "Animated Feature",
    description: "The sequel. Rated 7.4 on IMDB. Voice of Gopal returns.",
  },
  {
    title: "Theatre Productions",
    year: "",
    role: "Various",
    type: "Stage",
    description: "Multiple productions across KL's performing arts scene — from experimental to classical.",
  },
];

export function Screen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="screen" className="relative py-36 px-6 bg-[#1A1612] grain-overlay" ref={ref}>
      {/* Decorative element */}
      <div className="absolute bottom-10 left-10 text-[18rem] leading-none font-serif text-[#D4A843]/[0.02] pointer-events-none select-none">
        ✦
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-baseline gap-6 mb-6"
        >
          <span className="font-serif text-8xl sm:text-9xl font-bold text-[#C17F59]/10 leading-none">
            02
          </span>
          <p className="font-sans text-xs tracking-[0.4em] text-[#C17F59] uppercase">
            Screen & Stage
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#F5F0E8]"
        >
          On Screen
          <br />
          <span className="italic text-[#C17F59]">& Stage</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-[#F5F0E8]/40 text-lg mb-20 max-w-xl leading-relaxed"
        >
          Film credits and theatre work. For dubbed TV series, see Voice above.
        </motion.p>

        <div className="space-y-16">
          {credits.map((credit, i) => (
            <motion.div
              key={credit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-wrap items-baseline gap-4 mb-4">
                <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F0E8] group-hover:text-[#C17F59] transition-colors duration-500">
                  {credit.title}
                </h3>
                {credit.year && (
                  <span className="font-sans text-sm text-[#F5F0E8]/20 tracking-wider">{credit.year}</span>
                )}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-xs tracking-[0.3em] uppercase px-4 py-1.5 border border-[#F5F0E8]/10 text-[#F5F0E8]/40 rounded-full">
                  {credit.type}
                </span>
                <span className="font-sans text-[#D4A843] font-medium">as {credit.role}</span>
              </div>
              <p className="font-sans text-[#F5F0E8]/35 max-w-2xl leading-relaxed text-lg">{credit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* IMDB Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="https://www.imdb.com/name/nm15078159"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-[#F5F0E8]/30 hover:text-[#D4A843] transition-colors duration-500 border-b border-[#F5F0E8]/10 hover:border-[#D4A843] pb-1"
          >
            Full credits on IMDB →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
