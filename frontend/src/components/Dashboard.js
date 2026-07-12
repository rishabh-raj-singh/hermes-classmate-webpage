import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ChevronRight } from "lucide-react";

const students = [
  { name: "Ananya S.", score: 92, gap: "None", color: "#7BE495" },
  { name: "Rohan P.", score: 74, gap: "Fractions", color: "#FFD84D" },
  { name: "Kavya M.", score: 58, gap: "Reasoning", color: "#FF8A3D" },
  { name: "Ishaan K.", score: 41, gap: "Geometry", color: "#FF6B9D" },
];

const concepts = [
  { name: "Quadrilaterals", mastery: 82, color: "#7BE495" },
  { name: "Fractions", mastery: 46, color: "#FF6B9D" },
  { name: "Reasoning", mastery: 61, color: "#FFD84D" },
  { name: "Data Handling", mastery: 74, color: "#4DA6FF" },
  { name: "Mensuration", mastery: 38, color: "#FF8A3D" },
];

const bars = [58, 72, 65, 88, 74, 92, 68, 81, 55, 77, 63, 85];

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-20 md:py-32 px-4 md:px-8" data-testid="dashboard-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block bg-brand-orange nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            The Dashboard
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            Every answer sheet, <br />
            <span className="underline decoration-brand-yellow decoration-8 underline-offset-2">turned into a decision.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white nb-border-thick rounded-3xl shadow-nb-2xl overflow-hidden"
        >
          {/* browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b-4 border-black bg-brand-yellow">
            <span className="h-3.5 w-3.5 rounded-full bg-brand-pink nb-border" />
            <span className="h-3.5 w-3.5 rounded-full bg-brand-mint nb-border" />
            <span className="h-3.5 w-3.5 rounded-full bg-brand-blue nb-border" />
            <div className="mx-auto bg-white nb-border rounded-full px-4 py-1 text-xs font-bold shadow-nb-sm">
              app.hermesclassmate.com/class/8B
            </div>
          </div>

          <div className="p-5 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Summary tiles */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { l: "Papers evaluated", v: "182", bg: "#FFD84D" },
                { l: "Avg. class score", v: "71%", bg: "#7BE495" },
                { l: "At-risk students", v: "9", bg: "#FF6B9D" },
                { l: "Top concept gap", v: "Fractions", bg: "#4DA6FF" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="nb-border-thick rounded-2xl p-4 md:p-5 shadow-nb-md"
                  style={{ background: t.bg }}
                >
                  <div className="text-[10px] font-black uppercase tracking-widest">{t.l}</div>
                  <div className="mt-2 font-display font-black text-3xl md:text-4xl leading-none">
                    {t.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="lg:col-span-7 nb-border-thick rounded-2xl p-5 md:p-6 shadow-nb-md bg-cream">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest">Weekly Performance</div>
                  <div className="font-display font-black text-xl md:text-2xl">Class 8B · Math</div>
                </div>
                <div className="inline-flex items-center gap-1 bg-brand-mint nb-border rounded-full px-3 py-1 text-xs font-black">
                  <TrendingUp size={12} strokeWidth={3} /> +12%
                </div>
              </div>
              <div className="h-40 md:h-52 flex items-end gap-2">
                {bars.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${b}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.04, type: "spring", stiffness: 120, damping: 16 }}
                    className="flex-1 nb-border rounded-t-md"
                    style={{
                      background: i === 5 ? "#FFD84D" : i === 11 ? "#FF6B9D" : "#4DA6FF",
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] font-black uppercase tracking-widest text-black/60">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>
            </div>

            {/* Concept mastery */}
            <div className="lg:col-span-5 nb-border-thick rounded-2xl p-5 md:p-6 shadow-nb-md bg-white">
              <div className="text-[10px] font-black uppercase tracking-widest mb-3">Concept Mastery</div>
              <div className="space-y-3">
                {concepts.map((c, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-bold mb-1">
                      <span>{c.name}</span>
                      <span>{c.mastery}%</span>
                    </div>
                    <div className="h-4 bg-cream nb-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.mastery}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full"
                        style={{ background: c.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Students */}
            <div className="lg:col-span-7 nb-border-thick rounded-2xl p-5 md:p-6 shadow-nb-md bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-black uppercase tracking-widest">Students needing attention</div>
                <span className="text-xs font-bold text-black/60">Sorted by gap severity</span>
              </div>
              <div className="divide-y-2 divide-dashed divide-black/40">
                {students.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 py-3">
                    <div
                      className="h-10 w-10 rounded-full nb-border grid place-items-center font-black"
                      style={{ background: s.color }}
                    >
                      {s.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{s.name}</div>
                      <div className="text-xs text-black/60">Primary gap: {s.gap}</div>
                    </div>
                    <div className="font-display font-black text-xl">{s.score}%</div>
                    <ChevronRight size={20} className="text-black/40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap */}
            <div className="lg:col-span-5 nb-border-thick rounded-2xl p-5 md:p-6 shadow-nb-md bg-brand-blue">
              <div className="text-[10px] font-black uppercase tracking-widest mb-3">Question-level Heatmap</div>
              <div className="grid grid-cols-8 gap-1.5">
                {Array.from({ length: 48 }).map((_, i) => {
                  const intensity = Math.random();
                  const color =
                    intensity > 0.7
                      ? "#7BE495"
                      : intensity > 0.4
                      ? "#FFD84D"
                      : "#FF6B9D";
                  return (
                    <div
                      key={i}
                      className="aspect-square nb-border rounded-sm"
                      style={{ background: color }}
                    />
                  );
                })}
              </div>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <span className="h-3 w-3 nb-border rounded-sm bg-brand-pink" /> Weak
                <span className="h-3 w-3 nb-border rounded-sm bg-brand-yellow ml-2" /> Mid
                <span className="h-3 w-3 nb-border rounded-sm bg-brand-mint ml-2" /> Strong
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
