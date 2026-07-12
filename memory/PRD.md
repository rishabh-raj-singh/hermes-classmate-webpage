# Hermes Classmate — Landing Page PRD

## Original Problem Statement
Build a Neo-Brutalism landing page for an AI-powered Classroom Intelligence Platform (Hermes Classmate) for teachers. Emphasize thick black borders, offset shadows, bright playful colors, heavy typography, and scroll animations. Inspired by https://neo-brutalism-ui-library.vercel.app/ but not a copy of the layout.

## User Choices
- Brand name: **Hermes Classmate**
- Stack: **React + Tailwind + Framer Motion** (CRA)
- Illustrations: **All SVG/CSS doodles** (no photos)
- CTAs: Anchor scrolls to Try Demo section for now
- Social links: placeholders (#)

## Product Positioning
Not another LMS. An AI Classroom Intelligence Platform that:
- Ingests answer sheets (PDF or phone photos)
- AI reads, tags, and evaluates every answer (Subject / Chapter / Skill / Bloom / Marks / Confidence)
- Surfaces concept mastery, learning gaps, class analytics
- Auto-generates a weekly teacher planner from real gaps
- CBSE-first (Class 6–10, Math / Science / English / Social Studies)

## Personas
- **Primary**: CBSE school teachers (Class 6–10) who spend weekends checking papers.
- **Secondary**: School HODs / principals wanting classroom-level insight.

## What's Been Implemented (2026-01-12)
- **Design system**: Neo-Brutalism tokens (4px borders, hard offset shadows 4/8/12/16px, cream #FFF9EF background, brand palette yellow/pink/blue/mint/orange/purple), Bricolage Grotesque display + DM Sans body + Caveat handwriting.
- **Navbar**: Floating pill with logo, links, GitHub chip, "Get Started" CTA, mobile menu.
- **Hero**: Big display headline "Stop checking papers. Start understanding learning." with animated papers, floating insight cards, custom SVG teacher illustration.
- **Trust chip marquee**: 8 rotating badges (CBSE, AI, Skills, etc.)
- **Problem section**: 2 rows of 4 cards (Traditional vs Hermes) with animated arrows.
- **Features grid**: 8 bento-style feature cards (Paper Upload, AI Eval, Dashboard, Gaps, Chapters, Skills, Planner, Class Insights).
- **How it Works timeline**: 5 zig-zag steps with scroll-driven vertical progress line.
- **Fake SaaS Dashboard**: Browser chrome, KPI tiles, bar chart, concept mastery bars, student list, question heatmap.
- **Weekly Planner**: 6 rotated sticky notes (Mon–Weekend) with pins.
- **AI Analysis Split**: Handwritten paper (Caveat font on ruled lines) → 6 insight chips.
- **Comparison table**: Traditional vs Hermes across 6 dimensions.
- **Stats**: 4 animated counters on black background (papers, accuracy, productivity, planning speed).
- **Testimonials**: 3 comic-style speech bubble cards with tails + avatars.
- **FAQ**: 6-question neo-brutalism accordion with yellow open state.
- **Final CTA**: Bright yellow section with floating SVG shapes + Book Demo / Try Prototype.
- **Footer**: Black bg, giant "STOP CHECKING. START UNDERSTANDING." typography, 3 link columns, social row.
- **Global**: SVG doodles library (Star, Plus, Blob, Spiral, PaperPlane, SquiggleArrow, Squiggle), floating background elements, scroll animations via Framer Motion, mobile responsive.
- **Backend**: Minimal FastAPI server with /api/health endpoint (placeholder for future).

## Architecture
- `/app/frontend` — CRA React app
  - `src/App.js` — top-level composition
  - `src/components/*` — 14 modular section components
  - `src/index.css` — Tailwind + Neo-Brutalism utilities + keyframes
  - `tailwind.config.js` — brand palette + `shadow-nb-*` tokens
- `/app/backend` — FastAPI (health endpoint only)

## Backlog / Future
- **P1**: Working "Try Demo" upload flow (PDF drop → AI extraction preview).
- **P1**: Real dashboard route (`/app`) with mock data behind auth.
- **P2**: Blog / CBSE Playbook content section.
- **P2**: Pricing page.
- **P2**: SEO metadata + OG images.
- **P3**: i18n (Hindi + regional).

## Next Actions
1. Wire "Try Demo" to a real drag-and-drop demo (client-side mock is fine to start).
2. Add capture form (email) to Book Demo CTA.
3. Add lightweight analytics.
