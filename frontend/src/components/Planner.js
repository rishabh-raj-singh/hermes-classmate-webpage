import React from "react";
import { motion } from "framer-motion";

const days = [
  {
    day: "Monday",
    topic: "Revision Sprint",
    detail: "Fractions & LCM — 40 min",
    bg: "#FFD84D",
    r: -3,
    pin: "#FF6B9D",
  },
  {
    day: "Tuesday",
    topic: "Geometry",
    detail: "Quadrilaterals · reasoning",
    bg: "#FF6B9D",
    r: 2,
    pin: "#000",
  },
  {
    day: "Wednesday",
    topic: "Fractions",
    detail: "Word problems ↑ difficulty",
    bg: "#4DA6FF",
    r: -2,
    pin: "#FFD84D",
  },
  {
    day: "Thursday",
    topic: "Reasoning Lab",
    detail: "Bloom 3 → 4 exercises",
    bg: "#7BE495",
    r: 3,
    pin: "#FF8A3D",
  },
  {
    day: "Friday",
    topic: "Assessment",
    detail: "Formative · auto-graded",
    bg: "#FF8A3D",
    r: -4,
    pin: "#4DA6FF",
  },
  {
    day: "Weekend",
    topic: "Reflection",
    detail: "Class report · parent notes",
    bg: "#A78BFA",
    r: 4,
    pin: "#7BE495",
  },
];

export default function Planner() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 bg-white border-y-4 border-black" data-testid="planner-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block bg-brand-purple nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            Weekly Planner
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            Your Monday morning, <br /> already written.
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-black/70 max-w-xl">
            Every plan is built from last week's real gaps. Not a template. Not a guess.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {days.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: d.r }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 100, damping: 12 }}
              whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
              className="relative nb-border-thick p-6 md:p-7 shadow-nb-lg font-body min-h-[210px] flex flex-col"
              style={{ background: d.bg }}
              data-testid={`planner-day-${i}`}
            >
              {/* pin */}
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full nb-border-thick shadow-nb-sm"
                style={{ background: d.pin }}
              />
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{d.day}</div>
              <h3 className="mt-2 font-display font-black text-2xl md:text-3xl leading-tight">
                {d.topic}
              </h3>
              <p className="mt-2 text-base md:text-lg font-bold text-black/80">{d.detail}</p>
              <div className="mt-auto pt-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-black" />
                <span className="text-xs font-black uppercase tracking-widest">Auto-planned</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
