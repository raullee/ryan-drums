"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#F5F0E8] border-t border-[#1A1612]/5 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-sans text-sm text-[#1A1612]/25 tracking-[0.2em]">
          © {new Date().getFullYear()} Ryan Lee Bhaskaran
        </p>
        <p className="font-serif text-sm text-[#1A1612]/15 italic tracking-wider">
          Voice Actor · Musician · Actor · Polymath
        </p>
      </div>
    </motion.footer>
  );
}
