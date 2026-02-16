"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Session Drums",
    description: "Studio recording sessions for your tracks. Versatile style, professional sound. From jazz to pop to everything in between.",
  },
  {
    title: "Live Performance",
    description: "Available for live gigs, events, and tours. From intimate jazz clubs to festival stages — energy guaranteed.",
  },
  {
    title: "Drum Lessons",
    description: "One-on-one instruction for all levels. Technique, theory, musicality, and the stuff you can't learn from YouTube.",
  },
];

export function Music() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" className="relative py-36 px-6 bg-[#F5F0E8]" ref={ref}>
      {/* Decorative rhythm pattern */}
      <div className="absolute top-16 right-16 text-[16rem] leading-none font-serif text-[#1A1612]/[0.03] pointer-events-none select-none">
        ♩
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-baseline gap-6 mb-6"
        >
          <span className="font-serif text-8xl sm:text-9xl font-bold text-[#D4A843]/15 leading-none">
            03
          </span>
          <p className="font-sans text-xs tracking-[0.4em] text-[#C17F59] uppercase">
            Music
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#1A1612]"
        >
          Behind
          <br />
          <span className="italic text-[#C17F59]">the Kit</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-[#1A1612]/50 text-lg mb-20 max-w-xl leading-relaxed"
        >
          Drummer, session musician, and educator. A craftsman who treats
          rhythm like a second language.
        </motion.p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-sm border border-[#1A1612]/5 rounded-xl p-10 hover:shadow-xl hover:shadow-[#D4A843]/5 transition-all duration-700">
                <span className="font-sans text-xs text-[#C17F59] tracking-[0.3em] uppercase block mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A1612] mb-4 group-hover:text-[#C17F59] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-sans text-[#1A1612]/45 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#1A1612] rounded-xl p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div>
            <p className="font-sans text-xs tracking-[0.3em] text-[#F5F0E8]/25 uppercase mb-3">
              Watch & Listen
            </p>
            <p className="font-sans text-[#F5F0E8]/50 text-lg">
              Performances, covers, and behind-the-scenes.
            </p>
          </div>
          <a
            href="https://youtube.com/ryanlb"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-10 py-4 bg-[#D4A843] text-[#0A0A0B] font-sans font-semibold rounded-lg hover:bg-[#E8C86A] transition-colors duration-500 text-sm tracking-[0.2em] uppercase"
          >
            YouTube →
          </a>
        </motion.div>

        {/* Booking */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="font-sans text-sm tracking-[0.2em] text-[#1A1612]/30 hover:text-[#C17F59] transition-colors duration-500 border-b border-[#1A1612]/10 hover:border-[#C17F59] pb-1"
          >
            Available for booking — Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
