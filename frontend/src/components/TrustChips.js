import React from "react";
import { motion } from "framer-motion";

const chips = [
  { label: "CBSE Aligned", bg: "#FFD84D" },
  { label: "For Teachers", bg: "#FF6B9D" },
  { label: "AI Powered", bg: "#4DA6FF" },
  { label: "Paper Evaluation", bg: "#7BE495" },
  { label: "Skill Analytics", bg: "#FF8A3D" },
  { label: "Weekly Planner", bg: "#A78BFA" },
  { label: "Concept Mastery", bg: "#FFD84D" },
  { label: "Learning Gaps", bg: "#FF6B9D" },
];

export default function TrustChips() {
  return (
    <section className="py-8 md:py-12 border-y-4 border-black bg-white/60" data-testid="trust-section">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-4 md:gap-6">
          {[...chips, ...chips].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, x: -3 }}
              className="inline-flex items-center gap-2 nb-border-thick rounded-full px-5 py-2.5 md:px-6 md:py-3 font-black uppercase text-xs md:text-sm tracking-widest shadow-nb"
              style={{ background: c.bg }}
              data-testid={`trust-chip-${i}`}
            >
              <span className="h-2 w-2 rounded-full bg-black" />
              {c.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
