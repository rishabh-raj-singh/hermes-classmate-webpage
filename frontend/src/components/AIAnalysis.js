import React from "react";
import { motion } from "framer-motion";
import { SquiggleArrow } from "./Doodles";

const insights = [
  { label: "Subject", value: "Mathematics", bg: "#FFD84D" },
  { label: "Chapter", value: "Quadrilaterals", bg: "#FF6B9D" },
  { label: "Skill", value: "Reasoning", bg: "#4DA6FF" },
  { label: "Bloom", value: "Understand", bg: "#7BE495" },
  { label: "Marks", value: "3 / 4", bg: "#FF8A3D" },
  { label: "Confidence", value: "96%", bg: "#A78BFA" },
];

export default function AIAnalysis() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8" data-testid="ai-analysis-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block bg-brand-yellow nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            Under the hood
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            One answer, six signals.
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-black/70 max-w-xl">
            We don't just count marks. We tag every answer to the exact concept, skill and cognitive
            level so you know <em>why</em>, not just <em>how much</em>.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: paper */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
            className="lg:col-span-6 relative"
          >
            <div className="bg-white nb-border-thick rounded-2xl shadow-nb-2xl overflow-hidden">
              <div className="px-5 py-3 border-b-4 border-black bg-brand-pink flex justify-between">
                <div className="font-black uppercase text-xs tracking-widest">Answer Sheet</div>
                <div className="text-xs font-bold">Class 8B · Q4</div>
              </div>
              <div className="paper-lines p-6 md:p-8 min-h-[380px] font-body">
                <div className="mb-3">
                  <div className="text-xs font-black uppercase tracking-widest text-black/60 mb-1">
                    Q4. Prove that opposite sides of a parallelogram are equal.
                  </div>
                </div>
                <div
                  className="text-lg md:text-xl leading-[32px]"
                  style={{ fontFamily: "'Caveat', 'Bricolage Grotesque', cursive" }}
                >
                  Given: ABCD is a parallelogram.<br />
                  To prove: AB = CD and AD = BC<br />
                  Proof: In △ABD and △CDB, <br />
                  AB || CD ⇒ ∠ABD = ∠CDB (alt. int. angles) <br />
                  BD = BD (common)<br />
                  AD || BC ⇒ ∠ADB = ∠CBD <br />
                  ∴ △ABD ≅ △CDB (ASA) <br />
                  Hence AB = CD, AD = BC.  ✓
                </div>
              </div>
            </div>
            {/* stamp */}
            <div className="absolute -bottom-4 -right-2 md:-right-6 rotate-[-8deg] bg-brand-mint nb-border-thick rounded-xl px-4 py-2 shadow-nb font-black uppercase text-sm tracking-widest">
              Evaluated · 3/4
            </div>
          </motion.div>

          {/* Middle: arrows */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <SquiggleArrow width={80} height={60} />
          </div>

          {/* Right: insights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {insights.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 130, damping: 15 }}
                whileHover={{ rotate: 0, y: -4 }}
                className="nb-border-thick rounded-2xl p-4 md:p-5 shadow-nb-md"
                style={{ background: c.bg }}
                data-testid={`ai-insight-${i}`}
              >
                <div className="text-[10px] font-black uppercase tracking-widest opacity-80">
                  {c.label}
                </div>
                <div className="mt-1 font-display font-black text-xl md:text-2xl leading-tight">
                  {c.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
