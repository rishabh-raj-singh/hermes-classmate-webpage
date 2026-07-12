import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    quote:
      "I used to spend three Sundays a month checking papers. Hermes gave me my weekends back — and my class averages went up.",
    name: "Ritika Sharma",
    role: "Math · Class 8 · Delhi Public School",
    bg: "#FFD84D",
    r: -3,
    avatar: "#FF6B9D",
  },
  {
    quote:
      "The concept mastery view is unfair. I finally know exactly which student is stuck on which subtopic — no more guessing.",
    name: "Prakash Menon",
    role: "Science · Class 9 · KV Bangalore",
    bg: "#4DA6FF",
    r: 2,
    avatar: "#7BE495",
  },
  {
    quote:
      "My weekly plan writes itself now. My HOD thinks I've hired a data analyst. I let her think that.",
    name: "Sameera Iyer",
    role: "English · Class 7 · Mumbai",
    bg: "#7BE495",
    r: -2,
    avatar: "#FFD84D",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block bg-brand-orange nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            Teachers say it best
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            "Where was this <br /> in my first year?"
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: t.r }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ rotate: 0, y: -8 }}
              className="relative"
              data-testid={`testimonial-${i}`}
            >
              <div
                className="nb-border-thick rounded-3xl p-6 md:p-8 shadow-nb-lg relative"
                style={{ background: t.bg }}
              >
                <svg className="absolute -top-3 -left-3" width="46" height="46" viewBox="0 0 46 46">
                  <circle cx="23" cy="23" r="20" fill="#000" stroke="#000" strokeWidth="4" />
                  <text x="23" y="34" textAnchor="middle" fontSize="34" fill="#FFD84D" fontWeight="900" fontFamily="serif">"</text>
                </svg>
                <p className="mt-4 text-lg md:text-xl font-bold leading-relaxed">
                  {t.quote}
                </p>

                {/* speech tail */}
                <svg className="absolute -bottom-5 left-10" width="36" height="26" viewBox="0 0 36 26">
                  <path d="M2 2 L34 2 L18 24 Z" fill={t.bg} stroke="#000" strokeWidth="4" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mt-8 flex items-center gap-3 pl-2">
                <span
                  className="h-12 w-12 rounded-full nb-border-thick grid place-items-center font-display font-black text-lg shadow-nb"
                  style={{ background: t.avatar }}
                >
                  {t.name[0]}
                </span>
                <div>
                  <div className="font-black text-base">{t.name}</div>
                  <div className="text-xs md:text-sm font-medium text-black/70">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
