"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

const galleryItems = [
  { type: "video", label: "Live Performance", span: "md:col-span-2" },
  { type: "photo", label: "In the Studio", span: "" },
  { type: "photo", label: "Teaching Session", span: "" },
  { type: "video", label: "Concert Highlights", span: "md:col-span-2" },
  { type: "photo", label: "Behind the Kit", span: "md:col-span-3" },
];

function GalleryItem({ item, index }: { item: (typeof galleryItems)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative aspect-video rounded-xl overflow-hidden group cursor-pointer ${item.span}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1D] to-[#111113]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.05)_0%,_transparent_70%)]" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#D4A843]/0 group-hover:bg-[#D4A843]/10 transition-all duration-500" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        {item.type === "video" ? (
          <div className="w-14 h-14 rounded-full border-2 border-white/20 group-hover:border-[#D4A843]/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 text-white/40 group-hover:text-[#D4A843] ml-1 transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full border-2 border-white/20 group-hover:border-[#D4A843]/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 text-white/40 group-hover:text-[#D4A843] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
        )}
        <span className="text-sm text-white/30 group-hover:text-white/60 transition-colors font-medium">
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <SectionWrapper id="gallery">
      <SectionHeader title="Gallery" subtitle="Moments from the stage, studio, and beyond" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryItems.map((item, i) => (
          <GalleryItem key={item.label} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
