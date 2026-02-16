"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-[#D4A843]">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4A843]/60 to-transparent" />
    </div>
  );
}
