"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

const services = [
  {
    icon: "🥁",
    title: "Drum Lessons",
    description:
      "From absolute beginners to advanced players, Ryan's teaching style adapts to you. Learn technique, timing, and musicality in a supportive environment.",
    details: ["Private & Group Sessions", "All Skill Levels", "In-person Sessions"],
  },
  {
    icon: "🎵",
    title: "Session Drummer",
    description:
      "Need a drummer? Ryan is available for studio sessions, live performances, and event bookings across Malaysia.",
    details: ["Studio Recording", "Live Sessions", "Available Nationwide"],
  },
  {
    icon: "🎤",
    title: "Live Performance",
    description:
      "From intimate venues to grand stages, Ryan delivers electrifying performances that move audiences. Concerts, events, corporate — you name it.",
    details: ["Concerts & Festivals", "Corporate Events", "Private Functions"],
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    >
      <Card className="bg-[#111113] border-white/5 hover:border-[#D4A843]/20 transition-all duration-500 group h-full">
        <CardContent className="p-8">
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A843] transition-colors">
            {service.title}
          </h3>
          <p className="text-white/50 leading-relaxed mb-6">{service.description}</p>
          <div className="space-y-2">
            {service.details.map((detail) => (
              <div key={detail} className="flex items-center gap-2 text-sm text-white/40">
                <div className="w-1 h-1 rounded-full bg-[#D4A843]" />
                {detail}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeader title="Services" subtitle="What Ryan brings to the table — and the stage" />
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
