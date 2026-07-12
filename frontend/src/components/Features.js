import React from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  BarChart3,
  Target,
  BookOpen,
  TrendingUp,
  CalendarDays,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Paper Upload",
    desc: "Drop a stack of scanned answer sheets. PDFs, phone photos, whatever.",
    bg: "#FFD84D",
    span: "md:col-span-2",
  },
  {
    icon: Brain,
    title: "AI Evaluation",
    desc: "Reads handwriting. Grades against the marking scheme.",
    bg: "#FF6B9D",
  },
  {
    icon: Target,
    title: "Learning Gaps",
    desc: "Pinpoints the exact concept that broke.",
    bg: "#7BE495",
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    desc: "Class averages, outliers, trendlines — all in one view.",
    bg: "#4DA6FF",
    span: "md:col-span-2",
  },
  {
    icon: BookOpen,
    title: "Chapter Mapping",
    desc: "Every question tagged to CBSE chapter & subtopic.",
    bg: "#A78BFA",
  },
  {
    icon: TrendingUp,
    title: "Skill Analytics",
    desc: "Reasoning, recall, application — tracked per student.",
    bg: "#FF8A3D",
  },
  {
    icon: CalendarDays,
    title: "Weekly Planner",
    desc: "Monday morning: a plan built from last week's gaps.",
    bg: "#FFD84D",
  },
  {
    icon: Users,
    title: "Class Insights",
    desc: "Section vs section, batch vs batch, teacher-level rollup.",
    bg: "#7BE495",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-32 px-4 md:px-8" data-testid="features-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block bg-brand-mint nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            Features
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            Everything a teacher wishes they had. <br />
            <span className="italic font-black">Nothing they don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 130, damping: 18 }}
              whileHover={{ y: -8, x: -8, rotate: -0.5 }}
              className={`nb-border-thick rounded-3xl p-6 md:p-8 shadow-nb-lg hover:shadow-nb-2xl transition-shadow ${f.span || ""}`}
              style={{ background: f.bg }}
              data-testid={`feature-card-${i}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-14 w-14 md:h-16 md:w-16 grid place-items-center bg-white nb-border-thick rounded-2xl shadow-nb">
                  <f.icon size={28} strokeWidth={2.75} />
                </div>
                <span className="font-display font-black text-black/30 text-2xl md:text-3xl">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display font-black text-2xl md:text-3xl leading-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-base md:text-lg font-medium text-black/80 max-w-md">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
