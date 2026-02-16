"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm font-mono tracking-[0.4em] text-[#22D3EE] uppercase mb-4"
        >
          04 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[3/4] rounded-2xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #1A1A1D 0%, #111113 50%, #D4A843 200%)",
            }}
          >
            {/* Initials */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl sm:text-9xl font-bold text-white/[0.06] tracking-tight">
                RLB
              </span>
            </div>
            {/* Accent border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4A843] via-[#22D3EE] to-transparent" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
              Musician. Voice Actor.
              <br />
              Actor. Educator.
              <br />
              <span className="text-[#D4A843]">Cheese Enthusiast.</span>
            </h2>

            <div className="space-y-5 text-white/50 leading-relaxed">
              <p>
                Ryan Lee Bhaskaran is one of those rare creatives who refuses to be
                put in a box. Based in Malaysia, he&apos;s spent over fifteen years
                building an extraordinary career that spans voice acting, film, theatre,
                and music.
              </p>
              <p>
                You&apos;ve probably heard his voice without knowing it. As Gopal in
                BoBoiBoy — Malaysia&apos;s biggest animated franchise — he helped bring
                one of the show&apos;s most beloved characters to life. As Robin in Teen
                Titans, Finn in Adventure Time, and Ron Stoppable in Kim Possible,
                he became the voice of childhood for an entire generation of
                Malaysian kids.
              </p>
              <p>
                When he&apos;s not behind a microphone, he&apos;s behind a drum kit — a
                seasoned session musician and educator who brings the same energy
                and dedication to every beat. On screen, his role as Raj in the
                groundbreaking Malaysian indie film Gadoh showcased a different
                dimension of his talent.
              </p>
              <p className="text-white/70 italic">
                &ldquo;I play music, do voice overs, teach occasionally, write stuff,
                act sometimes, and consume copious amounts of cheese.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-sm font-mono tracking-[0.3em] text-white/20 uppercase">
                Aspiring Polymath · Malaysia 🇲🇾
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
