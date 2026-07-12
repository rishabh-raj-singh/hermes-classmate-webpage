import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Star, Plus, PaperPlane, Blob, Squiggle } from "./Doodles";

const flyingPapers = [
  { x: -180, y: 40, r: -12, delay: 0, color: "#fff" },
  { x: -80, y: 90, r: 6, delay: 0.1, color: "#fff" },
  { x: 80, y: 90, r: -6, delay: 0.2, color: "#fff" },
  { x: 180, y: 40, r: 12, delay: 0.3, color: "#fff" },
];

const insightCards = [
  { top: "8%", left: "-4%", rotate: -8, bg: "#FFD84D", label: "Chapter", value: "Quadrilaterals" },
  { top: "18%", right: "-6%", rotate: 6, bg: "#7BE495", label: "Bloom", value: "Understand" },
  { top: "58%", left: "-8%", rotate: 10, bg: "#FF6B9D", label: "Skill", value: "Reasoning" },
  { top: "62%", right: "-4%", rotate: -6, bg: "#A78BFA", label: "Confidence", value: "96%" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-white nb-border rounded-full px-4 py-1.5 shadow-nb-sm text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
            data-testid="hero-pill"
          >
            <span className="h-2 w-2 rounded-full bg-brand-mint nb-border" />
            AI Classroom Intelligence · Built for CBSE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-black tracking-tighter uppercase leading-[0.88] text-[44px] sm:text-6xl md:text-7xl lg:text-[92px]"
            data-testid="hero-headline"
          >
            Stop checking{" "}
            <span className="relative inline-block">
              <span className="relative z-10">papers.</span>
              <span className="absolute inset-x-0 bottom-1 h-4 md:h-6 bg-brand-yellow -z-0 -skew-x-6" />
            </span>{" "}
            <br />
            Start{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">understanding</span>
              <span className="absolute inset-0 bg-black -rotate-1 -z-0" />
            </span>{" "}
            learning.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 text-lg md:text-2xl max-w-2xl font-medium text-black/80 leading-relaxed"
          >
            Hermes reads every answer sheet, finds the exact concepts your students missed, and
            hands you a weekly plan by Monday morning. No dashboards to babysit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={process.env.REACT_APP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-primary"
              className="group inline-flex items-center gap-2 bg-brand-yellow nb-border-thick rounded-full px-7 py-4 font-black uppercase tracking-wider text-base md:text-lg shadow-nb-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-nb-xl active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
            >
              Try Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} strokeWidth={2.75} />
            </a>
            <a
              href={process.env.REACT_APP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2 bg-white nb-border-thick rounded-full px-7 py-4 font-black uppercase tracking-wider text-base md:text-lg shadow-nb hover:-translate-y-1 hover:-translate-x-1 hover:shadow-nb-lg transition-all"
            >
              <Play size={18} strokeWidth={2.75} fill="#000" />
              See Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center gap-4 text-sm md:text-base font-bold"
          >
            <div className="flex -space-x-2">
              {["#FFD84D", "#FF6B9D", "#4DA6FF", "#7BE495"].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full nb-border grid place-items-center font-black text-xs"
                  style={{ background: c }}
                >
                  {["R", "P", "S", "K"][i]}
                </span>
              ))}
            </div>
            <span className="opacity-80">Loved by 200+ CBSE teachers already</span>
          </motion.div>
        </div>

        {/* Illustration */}
        <div className="lg:col-span-5 relative">
          <HeroIllustration />

          {/* Floating insight cards */}
          {insightCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: c.rotate }}
              transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 120, damping: 12 }}
              className="absolute w-40 md:w-48 bg-white nb-border-thick rounded-2xl p-3 shadow-nb-lg"
              style={{ top: c.top, left: c.left, right: c.right }}
            >
              <div
                className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full inline-block nb-border mb-1"
                style={{ background: c.bg }}
              >
                {c.label}
              </div>
              <div className="font-display font-black text-base md:text-lg leading-tight">{c.value}</div>
            </motion.div>
          ))}

          {/* Papers flying up */}
          {flyingPapers.map((p, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 w-16 h-20 bg-white nb-border shadow-nb-sm rounded-md"
              initial={{ x: p.x, y: p.y, rotate: p.r, opacity: 0 }}
              animate={{ y: [p.y, p.y - 30, p.y], opacity: [0, 1, 1] }}
              transition={{ delay: 0.4 + p.delay, duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="p-2 space-y-1">
                <div className="h-1 bg-black/60 rounded" />
                <div className="h-1 bg-black/30 rounded w-3/4" />
                <div className="h-1 bg-black/30 rounded w-2/3" />
                <div className="h-1 bg-black/30 rounded w-1/2" />
              </div>
            </motion.div>
          ))}

          {/* decorative doodles */}
          <div className="absolute -top-4 -left-6">
            <Star size={30} fill="#FF8A3D" rotate={-14} />
          </div>
          <div className="absolute -bottom-2 right-4">
            <Squiggle width={90} height={20} color="#FF6B9D" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      {/* backdrop card */}
      <div className="absolute inset-4 bg-brand-blue nb-border-thick rounded-[36px] shadow-nb-xl grid-bg" />
      <div className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 300 300" className="w-3/4 h-3/4">
          {/* pile of papers */}
          <g>
            <rect x="30" y="230" width="240" height="18" rx="4" fill="#fff" stroke="#000" strokeWidth="4" />
            <rect x="40" y="216" width="220" height="16" rx="4" fill="#FFF9EF" stroke="#000" strokeWidth="4" />
            <rect x="50" y="204" width="200" height="14" rx="4" fill="#fff" stroke="#000" strokeWidth="4" />
            <rect x="60" y="192" width="180" height="12" rx="4" fill="#FFF9EF" stroke="#000" strokeWidth="4" />
          </g>
          {/* teacher body */}
          <g>
            <rect x="115" y="130" width="70" height="70" rx="10" fill="#FF6B9D" stroke="#000" strokeWidth="4" />
            {/* head */}
            <circle cx="150" cy="105" r="30" fill="#FFD84D" stroke="#000" strokeWidth="4" />
            {/* hair */}
            <path d="M120 95 Q130 70 150 72 Q170 70 180 95" stroke="#000" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* smile */}
            <path d="M140 112 Q150 122 160 112" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* eyes */}
            <circle cx="140" cy="102" r="2.5" fill="#000" />
            <circle cx="160" cy="102" r="2.5" fill="#000" />
            {/* arm holding paper */}
            <path d="M115 160 L85 175" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <rect x="60" y="160" width="30" height="24" rx="3" fill="#fff" stroke="#000" strokeWidth="3" />
          </g>
          {/* laptop */}
          <g>
            <rect x="190" y="160" width="46" height="30" rx="3" fill="#000" />
            <rect x="192" y="162" width="42" height="24" rx="2" fill="#7BE495" />
            <rect x="184" y="188" width="58" height="6" rx="2" fill="#000" />
          </g>
          {/* stars */}
          <path d="M40 60 l4 12 l12 2 l-9 8 l3 12 l-10 -7 l-10 7 l3 -12 l-9 -8 l12 -2 z" fill="#FFD84D" stroke="#000" strokeWidth="3" />
          <path d="M250 40 l3 9 l9 1 l-7 6 l2 9 l-7 -5 l-7 5 l2 -9 l-7 -6 l9 -1 z" fill="#FF8A3D" stroke="#000" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}
