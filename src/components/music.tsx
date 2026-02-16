"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bands = [
  {
    name: "Pop Shuvit",
    genre: "Rap Rock / Nu Metal",
    role: "Session Drums",
    description: "Malaysia's leading hip hop rock act. MTV Asia Awards performers.",
  },
  {
    name: "One Buck Short",
    genre: "Punk Rock / Pop Punk",
    role: "Session Drums",
    description: "Opened for Fall Out Boy, My Chemical Romance, Good Charlotte.",
  },
  {
    name: "Battle Bloom",
    genre: "",
    role: "Session Drums",
    description: "",
  },
  {
    name: "Trophy Knives",
    genre: "",
    role: "Session Drums",
    description: "",
  },
];

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

        {/* Bands & Collaborations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] text-[#C17F59] uppercase mb-10">
            Bands & Collaborations
          </p>

          <div className="space-y-0">
            {bands.map((band, i) => (
              <motion.div
                key={band.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group border-b border-[#1A1612]/10 py-10 sm:py-12 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 hover:border-[#D4A843]/40 transition-colors duration-700 cursor-default"
              >
                {/* Number */}
                <span className="font-sans text-sm text-[#C17F59]/50 tracking-wider font-light tabular-nums w-12 shrink-0">
                  0{i + 1}
                </span>

                {/* Band name */}
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1612] group-hover:text-[#D4A843] transition-colors duration-500 flex-1">
                  {band.name}
                </h3>

                {/* Info */}
                <div className="sm:text-right">
                  <p className="font-sans text-[#C17F59] text-base font-medium">{band.role}</p>
                  {band.genre && (
                    <p className="font-sans text-[#1A1612]/30 text-sm italic mt-1">{band.genre}</p>
                  )}
                  {band.description && (
                    <p className="font-sans text-[#1A1612]/40 text-sm mt-1 max-w-xs">{band.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-sans text-sm text-[#1A1612]/30 italic mt-8 tracking-wide"
          >
            + more — selected credits. Full discography on request.
          </motion.p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.4em] text-[#C17F59] uppercase mb-10">
            What He Offers
          </p>

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
        </motion.div>

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
