import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4"
      data-testid="site-navbar"
    >
      <nav
        className={`w-full max-w-6xl flex items-center justify-between gap-3 bg-white nb-border-thick rounded-full pl-4 pr-2 py-2 md:pl-6 md:pr-3 md:py-3 transition-all ${
          scrolled ? "shadow-nb-lg" : "shadow-nb"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group" data-testid="nav-logo">
          <span className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center bg-brand-yellow nb-border rounded-full shadow-nb-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6 L12 3 L20 6 L20 14 C20 18 16 21 12 21 C8 21 4 18 4 14 Z" fill="#000" />
              <path d="M9 12 L11 14 L15 10" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </span>
          <span className="font-display font-black text-lg md:text-xl tracking-tight leading-none">
            Hermes<span className="text-brand-pink">.</span>
            <span className="hidden sm:inline text-black/60 font-bold text-sm ml-1">Classmate</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-brand-yellow hover:nb-border transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            data-testid="nav-github"
            aria-label="Github"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center bg-white nb-border rounded-full shadow-nb-sm hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-nb transition-all"
          >
            <Github size={18} strokeWidth={2.5} />
          </a>
          <a
            href="https://hermes-classmate.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-cta-get-started"
            className="inline-flex items-center gap-1.5 bg-black text-brand-yellow font-black uppercase tracking-wider text-xs md:text-sm rounded-full px-4 md:px-5 py-2.5 md:py-3 nb-border shadow-nb hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-nb-md transition-all"
          >
            Get Started
            <span aria-hidden>→</span>
          </a>
          <button
            className="md:hidden h-10 w-10 grid place-items-center bg-white nb-border rounded-full shadow-nb-sm"
            onClick={() => setOpen((o) => !o)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 inset-x-4 bg-white nb-border-thick rounded-2xl shadow-nb-lg p-4 md:hidden"
          data-testid="nav-mobile-menu"
        >
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-brand-yellow"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
