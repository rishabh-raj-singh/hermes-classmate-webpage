import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileUp, ScanLine, Sparkles, FileBarChart, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    title: "Upload sheets",
    desc: "Drop scanned PDFs or phone photos. Bulk upload 200 papers at once.",
    color: "#FFD84D",
  },
  {
    icon: ScanLine,
    title: "AI tags every answer",
    desc: "Subject · Chapter · Skill · Bloom level — all identified per question.",
    color: "#FF6B9D",
  },
  {
    icon: Sparkles,
    title: "AI evaluates",
    desc: "Reads handwriting, matches marking scheme, awards partial marks.",
    color: "#4DA6FF",
  },
  {
    icon: FileBarChart,
    title: "Reports generated",
    desc: "Student, class and concept-level insights ready in minutes.",
    color: "#7BE495",
  },
  {
    icon: CalendarCheck,
    title: "You get a planner",
    desc: "A weekly teaching plan built from the exact gaps we found.",
    color: "#FF8A3D",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="how" className="relative py-20 md:py-32 px-4 md:px-8 bg-white border-y-4 border-black" data-testid="how-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block bg-brand-blue nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            How It Works
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            Five steps. <br />
            <span className="bg-brand-yellow px-3 -rotate-1 inline-block nb-border-thick shadow-nb">Zero clicks after upload.</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* vertical progress line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-black/10 rounded-full" />
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-1.5 bg-black rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-10 md:space-y-24">
            {steps.map((s, i) => (
              <Step key={i} step={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ step, i }) {
  const isLeft = i % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
      className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center`}
      data-testid={`how-step-${i}`}
    >
      {/* number badge */}
      <div className="absolute left-0 md:left-1/2 top-2 md:top-1/2 -translate-x-0 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
        <div className="h-12 w-12 md:h-16 md:w-16 grid place-items-center bg-black text-white font-display font-black text-xl md:text-2xl rounded-full nb-border-thick shadow-nb-md">
          {i + 1}
        </div>
      </div>

      {isLeft ? (
        <>
          <div className={`md:pr-16 md:text-right`}>
            <StepCard step={step} align={isLeft ? "right" : "left"} />
          </div>
          <div className="hidden md:block" />
        </>
      ) : (
        <>
          <div className="hidden md:block" />
          <div className="md:pl-16">
            <StepCard step={step} align="left" />
          </div>
        </>
      )}
    </motion.div>
  );
}

function StepCard({ step, align }) {
  const Icon = step.icon;
  return (
    <div className={`inline-block max-w-md`}>
      <div
        className="nb-border-thick rounded-2xl p-6 md:p-8 shadow-nb-lg"
        style={{ background: step.color }}
      >
        <div className={`flex items-center gap-3 mb-4 ${align === "right" ? "md:justify-end" : ""}`}>
          <div className="h-12 w-12 grid place-items-center bg-white nb-border rounded-xl shadow-nb-sm">
            <Icon size={22} strokeWidth={2.75} />
          </div>
        </div>
        <h3 className={`font-display font-black text-2xl md:text-3xl leading-tight`}>
          {step.title}
        </h3>
        <p className={`mt-2 font-medium text-base md:text-lg text-black/80`}>{step.desc}</p>
      </div>
    </div>
  );
}
