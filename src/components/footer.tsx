"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/5 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/20 font-mono tracking-wider">
          © {new Date().getFullYear()} Ryan Lee Bhaskaran
        </p>
        <p className="text-sm text-white/10 font-mono tracking-wider">
          Musician · Voice Actor · Actor · Educator · Cheese Enthusiast
        </p>
      </div>
    </motion.footer>
  );
}
