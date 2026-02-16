"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper, SectionHeader } from "./section-wrapper";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "lesson",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${formData.type.toUpperCase()}] Enquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\n\n${formData.message}`
    );
    window.location.href = `mailto:ryan@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader title="Let's Make Some Noise" subtitle="Get in touch for lessons, sessions, or bookings" />

      <div className="max-w-2xl mx-auto">
        <Card className="bg-[#111113] border-white/5">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4A843]/50"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4A843]/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-white/50 mb-2 block">I&apos;m interested in</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "lesson", label: "🥁 Drum Lessons" },
                    { value: "session", label: "🎵 Session Work" },
                    { value: "booking", label: "🎤 Live Booking" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: option.value })}
                      className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                        formData.type === option.value
                          ? "bg-[#D4A843] text-black font-semibold"
                          : "bg-white/5 text-white/50 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-white/50 mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell me what you need..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4A843]/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#D4A843] text-black hover:bg-[#E8C86A] font-semibold text-base"
              >
                Send Message
              </Button>

              <p className="text-center text-xs text-white/30">
                Opens your email client. Zero data collection, zero tracking.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
