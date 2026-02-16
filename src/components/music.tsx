"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Session Drums",
    description: "Studio recording sessions for your tracks. Versatile style, professional sound.",
    icon: "🥁",
  },
  {
    title: "Live Performance",
    description: "Available for live gigs, events, and tours. From intimate jazz clubs to festival stages.",
    icon: "🎵",
  },
  {
    title: "Drum Lessons",
    description: "One-on-one instruction for all levels. Learn technique, theory, and musicality.",
    icon: "📚",
  },
];

export function Music() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" className="relative py-32 px-6" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22D3EE]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm font-mono tracking-[0.4em] text-[#D4A843] uppercase mb-4"
        >
          03 — Music
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Behind
          <br />
          <span className="text-[#D4A843]">the Kit</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/40 text-lg mb-16 max-w-xl"
        >
          Drummer, session musician, and educator. Available for studio sessions,
          live performances, and private instruction.
        </motion.p>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-[#111113] border border-white/5 rounded-xl p-8 group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#D4A843] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111113] border border-white/5 rounded-xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm font-mono tracking-wider text-white/30 uppercase mb-2">
              Watch & Listen
            </p>
            <p className="text-white/60">
              Performances, covers, and behind-the-scenes on YouTube.
            </p>
          </div>
          <a
            href="https://youtube.com/ryanlb"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3 bg-[#D4A843] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#E8C86A] transition-colors duration-300 text-sm tracking-wider uppercase"
          >
            YouTube →
          </a>
        </motion.div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="#contact"
            className="text-sm font-mono tracking-wider text-white/30 hover:text-[#D4A843] transition-colors border-b border-white/10 hover:border-[#D4A843] pb-1"
          >
            Available for booking — Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
