"use client";

import { motion } from "framer-motion";

const shows = [
  "BoBoiBoy",
  "Teen Titans",
  "Adventure Time",
  "Pop Shuvit",
  "One Buck Short",
  "Gadoh",
];

export function FeaturedIn() {
  return (
    <section className="relative py-10 px-6 bg-[#0A0A0B] border-y border-[#D4A843]/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#F5F0E8]/20 shrink-0">
            As seen in
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
            {shows.map((show, i) => (
              <motion.span
                key={show}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="font-serif text-base sm:text-lg text-[#F5F0E8]/30 italic hover:text-[#D4A843] transition-colors duration-500 cursor-default"
              >
                {show}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
