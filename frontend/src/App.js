import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustChips from "./components/TrustChips";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Dashboard from "./components/Dashboard";
import Planner from "./components/Planner";
import AIAnalysis from "./components/AIAnalysis";
import Comparison from "./components/Comparison";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Doodles from "./components/Doodles";

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream text-black font-body">
      <Doodles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustChips />
        <Problem />
        <Features />
        <HowItWorks />
        <Dashboard />
        <Planner />
        <AIAnalysis />
        <Comparison />
        <Stats />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
