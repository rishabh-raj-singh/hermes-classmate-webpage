import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  ["How papers are checked", "Teachers, red pen, weekends", "AI reads every sheet in minutes"],
  ["What you get", "Marks in an Excel", "Concept + skill + Bloom insights"],
  ["Learning gaps", "Guessed from experience", "Identified per student, per topic"],
  ["Weekly planning", "Copied from last year", "Built from this week's real data"],
  ["Reports for parents", "You write them Sunday night", "One click, per student"],
  ["Setup", "New portal · training · migration", "Upload a PDF. That's it."],
];

export default function Comparison() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8" data-testid="comparison-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block bg-brand-pink nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            Why we're different
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            Not another LMS. <br />
            <span className="bg-brand-mint px-3 -rotate-1 inline-block nb-border-thick shadow-nb">A teacher's second brain.</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-0 nb-border-thick rounded-3xl overflow-hidden shadow-nb-2xl bg-white">
          {/* Header row */}
          <div className="p-4 md:p-6 border-r-4 border-b-4 border-black bg-cream">
            <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black/60">
              What matters
            </div>
          </div>
          <div className="p-4 md:p-6 border-r-4 border-b-4 border-black bg-white">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 grid place-items-center bg-white nb-border rounded-full">
                <X size={16} strokeWidth={3} />
              </span>
              <span className="font-display font-black text-lg md:text-2xl">Traditional</span>
            </div>
          </div>
          <div className="p-4 md:p-6 border-b-4 border-black bg-brand-yellow">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 grid place-items-center bg-black text-brand-yellow rounded-full nb-border">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="font-display font-black text-lg md:text-2xl">Hermes</span>
            </div>
          </div>

          {rows.map((r, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 md:p-6 border-r-4 ${i < rows.length - 1 ? "border-b-4" : ""} border-black font-black text-sm md:text-base bg-cream`}
              >
                {r[0]}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.05 + 0.05 }}
                className={`p-4 md:p-6 border-r-4 ${i < rows.length - 1 ? "border-b-4" : ""} border-black text-sm md:text-base font-medium text-black/70`}
              >
                {r[1]}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className={`p-4 md:p-6 ${i < rows.length - 1 ? "border-b-4" : ""} border-black text-sm md:text-base font-bold bg-brand-yellow/40`}
              >
                {r[2]}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
