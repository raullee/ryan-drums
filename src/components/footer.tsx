"use client";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Separator className="bg-white/5 mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/30">
          © 2026 Ryan Lee Bhaskaran. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#hero" className="text-sm text-white/30 hover:text-[#D4A843] transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
