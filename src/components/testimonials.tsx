"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

const testimonials = [
  {
    quote: "Ryan's energy on stage is unmatched. He doesn't just play the drums — he commands the entire room.",
    name: "Alex T.",
    role: "Event Organizer",
  },
  {
    quote: "My son went from zero to performing on stage in under a year. Ryan's patience and teaching style are incredible.",
    name: "Sarah M.",
    role: "Parent of Student",
  },
  {
    quote: "We needed a session drummer last-minute and Ryan delivered beyond expectations. Professional, versatile, and an absolute groove machine.",
    name: "Daniel K.",
    role: "Studio Producer",
  },
  {
    quote: "Best drum teacher around, hands down. He makes every lesson fun and you actually see progress fast.",
    name: "Amir R.",
    role: "Student",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="testimonials">
      <SectionHeader title="Testimonials" subtitle="What people are saying" />

      <div className="max-w-3xl mx-auto text-center relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="text-[#D4A843]/30 text-6xl font-serif mb-4">&ldquo;</div>
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed italic">
              {testimonials[current].quote}
            </p>
            <div className="mt-8">
              <p className="text-white font-semibold">{testimonials[current].name}</p>
              <p className="text-white/40 text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8 pt-[200px]">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#D4A843] w-6" : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
