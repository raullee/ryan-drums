"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "Voice", href: "#voice" },
  { label: "Screen", href: "#screen" },
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#F5F0E8]/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-lg tracking-[0.1em] text-[#D4A843]">
          RLB
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs text-[#F5F0E8]/40 hover:text-[#D4A843] transition-colors duration-500 tracking-[0.2em] uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
