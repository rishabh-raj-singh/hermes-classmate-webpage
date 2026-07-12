import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { SquiggleArrow } from "./Doodles";

const oldFlow = [
  { title: "Check papers", desc: "8 hours per set", color: "#FF6B9D" },
  { title: "Enter marks", desc: "Row after row", color: "#FF8A3D" },
  { title: "Export to Excel", desc: "Print. Repeat.", color: "#A78BFA" },
  { title: "Still no insight", desc: "Just numbers", color: "#000" },
];

const newFlow = [
  { title: "Upload sheets", desc: "Drop a PDF", color: "#FFD84D" },
  { title: "AI reads", desc: "Every answer", color: "#7BE495" },
  { title: "Concept mastery", desc: "Down to the skill", color: "#4DA6FF" },
  { title: "Weekly planner", desc: "Auto-generated", color: "#FF6B9D" },
];

function Card({ item, kind, index }) {
  const isNegative = kind === "old";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 120, damping: 16 }}
      whileHover={{ y: -6, x: -6 }}
      className="relative w-full nb-border-thick rounded-2xl p-5 md:p-6 shadow-nb-lg"
      style={{ background: isNegative ? (item.color === "#000" ? "#000" : "#fff") : item.color }}
      data-testid={`problem-card-${kind}-${index}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`h-8 w-8 grid place-items-center rounded-full nb-border ${
            isNegative ? "bg-white" : "bg-black text-white"
          }`}
        >
          {isNegative ? <X size={18} strokeWidth={3} /> : <Check size={18} strokeWidth={3} />}
        </span>
        <span className={`text-[10px] font-black uppercase tracking-widest ${item.color === "#000" && isNegative ? "text-white" : ""}`}>
          Step {index + 1}
        </span>
      </div>
      <h4 className={`font-display font-black text-xl md:text-2xl leading-tight ${item.color === "#000" && isNegative ? "text-white" : ""}`}>
        {item.title}
      </h4>
      <p className={`mt-1 text-sm md:text-base font-medium ${item.color === "#000" && isNegative ? "text-white/80" : "text-black/70"}`}>
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8" data-testid="problem-section">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <span className="inline-block bg-brand-pink nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            The Problem
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            Teachers don't need more dashboards. <br />
            <span className="bg-black text-brand-yellow px-3 py-1 inline-block -rotate-1">They need clarity.</span>
          </h2>
        </div>

        {/* Old flow */}
        <div className="mb-4">
          <p className="text-xs md:text-sm font-black uppercase tracking-widest text-black/60 mb-4">
            The old way ↓
          </p>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {oldFlow.map((item, i) => (
              <div key={i} className="relative">
                <Card item={item} kind="old" index={i} />
                {i < oldFlow.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <SquiggleArrow width={40} height={30} color="#000" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-brand-yellow nb-border-thick rounded-full px-5 py-3 shadow-nb-md font-black uppercase text-sm tracking-widest">
            Hermes flips this <ArrowRight size={18} strokeWidth={3} />
          </div>
        </div>

        {/* New flow */}
        <div>
          <p className="text-xs md:text-sm font-black uppercase tracking-widest text-black/60 mb-4">
            The Hermes way ↓
          </p>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newFlow.map((item, i) => (
              <div key={i} className="relative">
                <Card item={item} kind="new" index={i} />
                {i < newFlow.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <SquiggleArrow width={40} height={30} color="#000" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
