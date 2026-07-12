import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Star, PaperPlane, Plus, Spiral, Blob } from "./Doodles";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 md:py-40 px-4 md:px-8 bg-brand-yellow border-y-4 border-black overflow-hidden" data-testid="final-cta">
      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 animate-floaty"><Star size={44} fill="#FF6B9D" rotate={-8} /></div>
        <div className="absolute top-16 right-16 animate-floaty" style={{ animationDelay: "1s" }}><PaperPlane size={60} fill="#4DA6FF" /></div>
        <div className="absolute bottom-24 left-16 animate-floaty" style={{ animationDelay: "1.5s" }}><Blob size={80} fill="#7BE495" /></div>
        <div className="absolute bottom-16 right-24 animate-floaty" style={{ animationDelay: "0.5s" }}><Plus size={40} color="#000" /></div>
        <div className="absolute top-1/2 left-1/3 opacity-30"><Spiral size={80} /></div>
        <div className="absolute top-20 right-1/3 animate-floaty" style={{ animationDelay: "2s" }}><Star size={30} fill="#000" rotate={16} /></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <span className="inline-block bg-black text-brand-yellow nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            One more thing
          </span>
          <h2 className="mt-6 font-display font-black tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
            Ready to actually <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-yellow">understand</span>
              <span className="absolute inset-0 bg-black -rotate-1 -z-0" />
            </span>{" "}
            <br />
            your classroom?
          </h2>

          <p className="mt-8 text-lg md:text-2xl font-medium text-black/80 max-w-2xl mx-auto">
            Free for the first 100 papers. No credit card. No integrations. No fluff.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://hermes-classmate.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-primary"
              className="group inline-flex items-center gap-2 bg-black text-brand-yellow nb-border-thick rounded-full px-8 py-4 md:px-10 md:py-5 font-black uppercase tracking-wider text-base md:text-lg shadow-nb-lg hover:-translate-y-1 hover:-translate-x-1 hover:shadow-nb-2xl active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
            >
              Try Prototype
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} strokeWidth={2.75} />
            </a>
            <a
              href="https://hermes-classmate.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-secondary"
              className="inline-flex items-center gap-2 bg-white nb-border-thick rounded-full px-8 py-4 md:px-10 md:py-5 font-black uppercase tracking-wider text-base md:text-lg shadow-nb hover:-translate-y-1 hover:-translate-x-1 hover:shadow-nb-lg transition-all"
            >
              <Calendar size={20} strokeWidth={2.75} />
              See Demo
            </a>
          </div>

          <div className="mt-8 text-sm md:text-base font-bold text-black/70">
            No spam. No sales calls. Just fewer Sundays checking papers.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
