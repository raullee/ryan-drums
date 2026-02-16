"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-36 px-6 bg-[#F5F0E8]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-baseline gap-6 mb-6"
        >
          <span className="font-serif text-8xl sm:text-9xl font-bold text-[#D4A843]/10 leading-none">
            04
          </span>
          <p className="font-sans text-xs tracking-[0.4em] text-[#C17F59] uppercase">
            About
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-20 tracking-tight text-[#1A1612]"
        >
          The <span className="italic text-[#C17F59]">Aspiring Polymath</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="aspect-[3/4] rounded-2xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #E8E0D4 0%, #D4CFC5 50%, #C17F59 200%)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-8xl sm:text-9xl font-bold text-[#1A1612]/[0.04] tracking-tight">
                RLB
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4A843] via-[#C17F59] to-transparent" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="space-y-6 font-sans text-[#1A1612]/55 text-lg leading-[1.8]">
              <p>
                Ryan Lee Bhaskaran is the voice you&apos;ve heard but never placed.
                From bringing Gopal to life in Malaysia&apos;s biggest animated franchise
                to voicing Robin in Teen Titans, his range spans the ridiculous to
                the sublime.
              </p>
              <p>
                As a session drummer, he&apos;s laid down tracks for some of Malaysia&apos;s
                most iconic bands — Pop Shuvit, One Buck Short, Battle Bloom, Trophy
                Knives, and others across the KL rock and indie scene. On screen, he
                played Raj in the acclaimed indie film Gadoh (2009).
              </p>
              <p>
                When he&apos;s not behind a microphone or a drum kit, he&apos;s in the
                classroom — a music educator who believes rhythm is a second language
                anyone can learn.
              </p>
              <p>
                Based in Kuala Lumpur, he grew up in Bangsar and is, by his own
                admission, an aspiring polymath and unapologetic cheese enthusiast.
              </p>
              <p className="text-[#1A1612]/70 italic font-serif text-xl border-l-2 border-[#D4A843] pl-6">
                &ldquo;I play music, do voice overs, teach occasionally, write stuff,
                act sometimes, and consume copious amounts of cheese.&rdquo;
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#1A1612]/10">
              <p className="font-sans text-sm tracking-[0.3em] text-[#1A1612]/25 uppercase">
                Aspiring Polymath · Kuala Lumpur, Malaysia 🇲🇾
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
