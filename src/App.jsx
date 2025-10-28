import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PricingCTA from './components/PricingCTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0b10] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white text-gray-900">A</span>
            AutoShorts for Publishers
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#pricing" className="rounded-md bg-white px-3 py-1.5 font-semibold text-gray-900">Book a Demo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PricingCTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/60">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} AutoShorts. Built with n8n + AI.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
              <a className="hover:text-white" href="mailto:hello@yourdomain.com">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
