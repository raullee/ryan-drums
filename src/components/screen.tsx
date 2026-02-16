"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credits = [
  {
    title: "Gadoh",
    year: "2009",
    role: "Raj",
    type: "Feature Film",
    description: "Malaysian indie film exploring racial tensions through the eyes of young people. A powerful, groundbreaking work in Malaysian cinema.",
  },
  {
    title: "Theatre Productions",
    year: "",
    role: "Various",
    type: "Stage",
    description: "Multiple theatre productions across Malaysia's vibrant performing arts scene.",
  },
];

export function Screen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="screen" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm font-mono tracking-[0.4em] text-[#22D3EE] uppercase mb-4"
        >
          02 — Screen & Stage
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 tracking-tight"
        >
          On Screen.
          <br />
          <span className="text-[#22D3EE]">On Stage.</span>
        </motion.h2>

        <div className="space-y-8">
          {credits.map((credit, i) => (
            <motion.div
              key={credit.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group border-l-2 border-white/10 hover:border-[#22D3EE] pl-8 py-6 transition-colors duration-500"
            >
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <h3 className="text-3xl sm:text-4xl font-bold group-hover:text-[#22D3EE] transition-colors duration-300">
                  {credit.title}
                </h3>
                {credit.year && (
                  <span className="text-sm font-mono text-white/30">{credit.year}</span>
                )}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/10 text-white/50">
                  {credit.type}
                </span>
                <span className="text-[#D4A843] font-medium">as {credit.role}</span>
              </div>
              <p className="text-white/40 max-w-2xl">{credit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* IMDB Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="https://www.imdb.com/name/nm15078159"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-white/40 hover:text-[#D4A843] transition-colors duration-300 border-b border-white/10 hover:border-[#D4A843] pb-1"
          >
            Full credits on IMDB →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
