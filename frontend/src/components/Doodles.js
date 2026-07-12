import React from "react";
import { motion } from "framer-motion";

// Small SVG doodle library used across sections
export const Star = ({ className = "", size = 42, fill = "#FFD84D", rotate = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <path
      d="M20 2 L24 15 L38 16 L27 25 L31 38 L20 30 L9 38 L13 25 L2 16 L16 15 Z"
      fill={fill}
      stroke="#000"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plus = ({ className = "", size = 30, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" className={className}>
    <path d="M15 3 V27 M3 15 H27" stroke={color} strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export const Blob = ({ className = "", size = 90, fill = "#FF6B9D" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <path
      d="M52 8 C74 4 96 22 92 46 C88 68 74 88 50 92 C26 96 8 74 10 50 C12 26 30 12 52 8 Z"
      fill={fill}
      stroke="#000"
      strokeWidth="4"
    />
  </svg>
);

export const Spiral = ({ className = "", size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <path
      d="M30 30 m-5 0 a5 5 0 1 1 10 0 a10 10 0 1 1 -20 0 a15 15 0 1 1 30 0 a20 20 0 1 1 -40 0"
      fill="none"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const PaperPlane = ({ className = "", size = 60, fill = "#4DA6FF" }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <path
      d="M4 30 L56 6 L44 56 L30 36 L4 30 Z"
      fill={fill}
      stroke="#000"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path d="M30 36 L44 12" stroke="#000" strokeWidth="3" fill="none" />
  </svg>
);

export const SquiggleArrow = ({ className = "", width = 120, height = 60, color = "#000" }) => (
  <svg width={width} height={height} viewBox="0 0 120 60" className={className}>
    <path
      d="M4 30 Q30 4 60 30 T112 30"
      stroke={color}
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M100 20 L114 30 L100 42" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Squiggle = ({ className = "", width = 80, height = 20, color = "#000" }) => (
  <svg width={width} height={height} viewBox="0 0 80 20" className={className}>
    <path d="M2 10 Q10 2 20 10 T38 10 T56 10 T78 10" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

// Background floating shapes across page
export default function Doodles() {
  const items = [
    { x: "6%", y: "12%", el: <Star size={38} fill="#FFD84D" />, dur: 8, r: -10 },
    { x: "88%", y: "6%", el: <Plus size={32} />, dur: 5, r: 15 },
    { x: "92%", y: "28%", el: <Blob size={70} fill="#7BE495" />, dur: 9, r: 6 },
    { x: "3%", y: "40%", el: <PaperPlane size={54} fill="#FF6B9D" />, dur: 7, r: -18 },
    { x: "95%", y: "58%", el: <Star size={30} fill="#FF8A3D" />, dur: 6, r: 22 },
    { x: "8%", y: "72%", el: <Spiral size={48} />, dur: 10, r: 0 },
    { x: "80%", y: "84%", el: <Plus size={26} color="#FF6B9D" />, dur: 6, r: -8 },
    { x: "45%", y: "3%", el: <Star size={22} fill="#A78BFA" />, dur: 7, r: 8 },
  ];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((it, i) => (
        <motion.div
          key={i}
          className="absolute animate-floaty"
          style={{ left: it.x, top: it.y, "--r": `${it.r}deg` }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: it.dur, ease: "easeInOut" }}
        >
          {it.el}
        </motion.div>
      ))}
    </div>
  );
}
