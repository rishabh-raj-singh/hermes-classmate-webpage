import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: ["Features", "How it Works", "Dashboard", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Press", "Partners"],
  },
  {
    title: "Resources",
    links: ["Blog", "Teacher Guides", "CBSE Playbook", "Case Studies", "Help Center"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 md:pt-24 pb-10 px-4 md:px-8" data-testid="site-footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-yellow border-4 border-white rounded-full">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6 L12 3 L20 6 L20 14 C20 18 16 21 12 21 C8 21 4 18 4 14 Z" fill="#000" />
                  <path d="M9 12 L11 14 L15 10" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              <span className="font-display font-black text-2xl">Hermes Classmate</span>
            </div>
            <div className="font-display font-black tracking-tighter text-6xl md:text-8xl leading-[0.85]">
              STOP <br /> CHECK<span className="text-brand-yellow">ING</span>. <br />
              START <br /> UNDER<span className="text-brand-pink">STAND</span>ING.
            </div>
            <div className="mt-8 flex items-center gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`footer-social-${i}`}
                  className="h-11 w-11 grid place-items-center bg-white text-black border-4 border-white rounded-full hover:bg-brand-yellow transition-colors"
                >
                  <Icon size={18} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((col, i) => (
              <div key={i}>
                <div className="text-xs font-black uppercase tracking-widest text-brand-yellow mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        data-testid={`footer-link-${col.title.toLowerCase()}-${j}`}
                        className="text-white/80 hover:text-brand-yellow font-bold text-sm md:text-base transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-white/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs md:text-sm font-bold text-white/60">
            © {new Date().getFullYear()} Hermes Classmate · Built for teachers who'd rather teach.
          </div>
          <div className="flex items-center gap-4 text-xs md:text-sm font-bold text-white/60">
            <a href="#" className="hover:text-brand-yellow">Privacy</a>
            <a href="#" className="hover:text-brand-yellow">Terms</a>
            <a href="#" className="hover:text-brand-yellow">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
