import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10000, suffix: "+", label: "Papers processed", bg: "#FFD84D" },
  { value: 95, suffix: "%", label: "Evaluation accuracy", bg: "#7BE495" },
  { value: 8, suffix: "×", label: "Teacher productivity", bg: "#FF6B9D" },
  { value: 4, suffix: "×", label: "Faster planning", bg: "#4DA6FF" },
];

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-black text-white" data-testid="stats-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <span className="inline-block bg-brand-yellow text-black nb-border rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-nb-sm">
            The Numbers
          </span>
          <h2 className="mt-4 font-display font-black tracking-tight text-4xl md:text-6xl leading-[0.95]">
            Built for scale. <br />
            <span className="text-brand-yellow">Loved for the hours it gives back.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 130, damping: 15 }}
              whileHover={{ y: -6, x: -6 }}
              className="nb-border-thick rounded-2xl p-5 md:p-7 shadow-[8px_8px_0px_0px_#fff] text-black"
              style={{ background: s.bg }}
              data-testid={`stat-card-${i}`}
            >
              <div className="font-display font-black text-5xl md:text-7xl leading-none tracking-tighter">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm md:text-base font-black uppercase tracking-widest">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
