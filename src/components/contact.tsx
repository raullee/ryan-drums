"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  { name: "Instagram", url: "https://instagram.com/ryanleebs", handle: "@ryanleebs" },
  { name: "YouTube", url: "https://youtube.com/ryanlb", handle: "ryanlb" },
  { name: "IMDB", url: "https://www.imdb.com/name/nm15078159", handle: "nm15078159" },
  { name: "Facebook", url: "https://facebook.com/ryanleebs", handle: "Ryan Lee Bhaskaran" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4A843]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm font-mono tracking-[0.4em] text-[#D4A843] uppercase mb-4"
        >
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          Let&apos;s create
          <br />
          <span className="text-[#D4A843]">something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/40 text-lg mb-16 max-w-xl"
        >
          Voice acting, music, film, lessons — whatever the project,
          I&apos;d love to hear about it.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-sm font-mono tracking-wider text-white/30 uppercase block mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-[#111113] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:border-[#D4A843] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-mono tracking-wider text-white/30 uppercase block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-[#111113] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:border-[#D4A843] focus:outline-none transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-mono tracking-wider text-white/30 uppercase block mb-2">
                Inquiry Type
              </label>
              <select className="w-full bg-[#111113] border border-white/5 rounded-lg px-4 py-3 text-white focus:border-[#D4A843] focus:outline-none transition-colors">
                <option value="">Select...</option>
                <option value="voice">Voice Acting</option>
                <option value="music">Music / Sessions</option>
                <option value="acting">Film / Theatre</option>
                <option value="lessons">Drum Lessons</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-mono tracking-wider text-white/30 uppercase block mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-[#111113] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:border-[#D4A843] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-[#D4A843] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#E8C86A] transition-colors duration-300 text-sm tracking-wider uppercase"
            >
              Send Message
            </button>
          </motion.form>

          {/* Socials + Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-mono tracking-wider text-white/30 uppercase mb-4">
                Email
              </p>
              <a
                href="mailto:ryan@ryanlb.com"
                className="text-2xl text-[#D4A843] hover:text-[#E8C86A] transition-colors"
              >
                ryan@ryanlb.com
              </a>
            </div>

            <div>
              <p className="text-sm font-mono tracking-wider text-white/30 uppercase mb-4">
                Social
              </p>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 border-b border-white/5 group hover:border-[#D4A843]/30 transition-colors"
                  >
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                    <span className="text-sm text-white/30 group-hover:text-[#D4A843] transition-colors">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
