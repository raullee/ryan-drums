"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Voice } from "@/components/voice";
import { Screen } from "@/components/screen";
import { Music } from "@/components/music";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!loaded ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 bg-[#0A0A0B]"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ) : null}
      <motion.main
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <Navbar />
        <Hero />
        <Voice />
        <Screen />
        <Music />
        <About />
        <Contact />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
