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
    <section id="contact" className="relative py-36 px-6 bg-[#0A0A0B] grain-overlay" ref={ref}>
      <div className="max-w-6xl mx-auto relative">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-baseline gap-6 mb-6"
        >
          <span className="font-serif text-8xl sm:text-9xl font-bold text-[#D4A843]/10 leading-none">
            05
          </span>
          <p className="font-sans text-xs tracking-[0.4em] text-[#D4A843] uppercase">
            Contact
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#F5F0E8]"
        >
          Let&apos;s <span className="italic text-[#D4A843]">Create</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-[#F5F0E8]/35 text-lg mb-20 max-w-lg leading-relaxed"
        >
          Voice acting, music, film, lessons — whatever the project,
          let&apos;s talk.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="font-sans text-xs tracking-[0.3em] text-[#F5F0E8]/25 uppercase block mb-3">
                Name
              </label>
              <input
                type="text"
                className="font-sans w-full bg-transparent border-b border-[#F5F0E8]/10 px-0 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/15 focus:border-[#D4A843] focus:outline-none transition-colors duration-500 text-lg"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-[0.3em] text-[#F5F0E8]/25 uppercase block mb-3">
                Email
              </label>
              <input
                type="email"
                className="font-sans w-full bg-transparent border-b border-[#F5F0E8]/10 px-0 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/15 focus:border-[#D4A843] focus:outline-none transition-colors duration-500 text-lg"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-[0.3em] text-[#F5F0E8]/25 uppercase block mb-3">
                Inquiry
              </label>
              <select className="font-sans w-full bg-transparent border-b border-[#F5F0E8]/10 px-0 py-3 text-[#F5F0E8] focus:border-[#D4A843] focus:outline-none transition-colors duration-500 text-lg [&>option]:bg-[#1A1612] [&>option]:text-[#F5F0E8]">
                <option value="">Select...</option>
                <option value="voice">Voice Acting</option>
                <option value="music">Music / Sessions</option>
                <option value="acting">Film / Theatre</option>
                <option value="lessons">Drum Lessons</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="font-sans text-xs tracking-[0.3em] text-[#F5F0E8]/25 uppercase block mb-3">
                Message
              </label>
              <textarea
                rows={4}
                className="font-sans w-full bg-transparent border-b border-[#F5F0E8]/10 px-0 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/15 focus:border-[#D4A843] focus:outline-none transition-colors duration-500 resize-none text-lg"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="font-sans px-10 py-4 bg-[#D4A843] text-[#0A0A0B] font-semibold rounded-lg hover:bg-[#E8C86A] transition-colors duration-500 text-sm tracking-[0.2em] uppercase mt-4"
            >
              Send Message
            </button>
          </motion.form>

          {/* Socials + Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-[#F5F0E8]/20 uppercase mb-5">
                Email
              </p>
              <a
                href="mailto:ryan@ryanlb.com"
                className="font-serif text-3xl text-[#D4A843] hover:text-[#E8C86A] transition-colors duration-500"
              >
                ryan@ryanlb.com
              </a>
            </div>

            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-[#F5F0E8]/20 uppercase mb-5">
                Social
              </p>
              <div className="space-y-0">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-5 border-b border-[#F5F0E8]/5 group hover:border-[#D4A843]/20 transition-colors duration-500"
                  >
                    <span className="font-sans text-[#F5F0E8]/40 group-hover:text-[#F5F0E8] transition-colors duration-500">
                      {social.name}
                    </span>
                    <span className="font-sans text-sm text-[#F5F0E8]/20 group-hover:text-[#D4A843] transition-colors duration-500">
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
