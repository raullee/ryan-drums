"use client";

import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader title="About" subtitle="The man behind the kit" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4A843]/20 via-[#1A1A1D] to-[#8B2020]/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.15)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">🥁</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-white/40 font-mono">Photo placeholder</p>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-[#D4A843]/30 text-[#D4A843] text-xs">Drummer</Badge>
            <Badge variant="outline" className="border-[#D4A843]/30 text-[#D4A843] text-xs">Teacher</Badge>
            <Badge variant="outline" className="border-[#D4A843]/30 text-[#D4A843] text-xs">Performer</Badge>
          </div>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            With years behind the kit, Ryan brings energy, precision, and soul to every
            performance. Whether teaching the next generation of drummers or laying down
            grooves in the studio, music isn&apos;t just what he does — it&apos;s who he is.
          </p>

          <p className="text-white/50 leading-relaxed">
            From intimate jam sessions to full-stage concerts, Ryan&apos;s versatility and
            passion shine through in everything he does. His students don&apos;t just learn
            to play — they learn to feel the rhythm.
          </p>

          <div className="flex items-center gap-2 text-white/40 pt-4">
            <svg className="w-5 h-5 text-[#D4A843]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Based in Malaysia</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
