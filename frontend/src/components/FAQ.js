import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need to change my LMS?",
    a: "No. Hermes plugs into how you already teach. Upload PDFs or phone photos of answer sheets — that's the whole integration.",
  },
  {
    q: "Which boards and subjects are supported?",
    a: "We're CBSE-first for Classes 6-10 in Math, Science, English and Social Studies. Other boards and subjects are rolling out through 2026.",
  },
  {
    q: "How accurate is the AI on handwritten answers?",
    a: "95%+ on typed answers and 88%+ on clean handwriting. Every AI evaluation shows a confidence score so you know exactly which ones to spot-check.",
  },
  {
    q: "Is student data safe?",
    a: "Yes. Everything is encrypted in transit and at rest. We never train models on your school's data and you can delete a class's history any time.",
  },
  {
    q: "Can it grade partial marks?",
    a: "Yes. The AI matches the marking scheme step-by-step and awards partial marks the way a teacher would.",
  },
  {
    q: "What does the weekly planner look like?",
    a: "A one-page plan for Monday-Saturday with the exact concepts to revise, the students to focus on, and the resources to use — all built from last week's actual gaps.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-20 md:py-32 px-4 md:px-8 bg-white border-y-4 border-black" data-testid="faq-section">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 text-center">
          <span className="inline-block bg-brand-blue nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            FAQ
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            The honest questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.04 }}
                className={`nb-border-thick rounded-2xl overflow-hidden shadow-nb-md transition-colors ${
                  isOpen ? "bg-brand-yellow" : "bg-white"
                }`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-testid={`faq-trigger-${i}`}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-display font-black text-lg md:text-xl leading-tight">
                    {f.q}
                  </span>
                  <span
                    className={`h-9 w-9 shrink-0 grid place-items-center nb-border rounded-full ${
                      isOpen ? "bg-black text-brand-yellow" : "bg-brand-yellow"
                    }`}
                  >
                    {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 text-base md:text-lg font-medium text-black/80 border-t-4 border-black bg-cream">
                        <div className="pt-4">{f.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
