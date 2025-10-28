import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PricingCTA from './components/PricingCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      {/* Global ambience: vignette + subtle noise */}
      <div className="pointer-events-none fixed inset-0 -z-[1]">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(1200px_600px_at_50%_-10%, rgba(99,102,241,0.35), transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'300\' height=\'300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.8\' numOctaves=\'4\' seed=\'2\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.25\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Simple navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-4 w-[94%] max-w-7xl rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-semibold tracking-tight">Nebula Shorts</a>
            <div className="hidden gap-6 text-sm text-white/80 sm:flex">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#how" className="hover:text-white">How it works</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
            </div>
            <a href="#pricing" className="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90 hover:bg-white/15">
              Get started
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PricingCTA />
      </main>

      <footer className="mt-10 border-t border-white/10/15/0 bg-white/5/0">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Nebula Labs. Built with n8n + AI.
        </div>
      </footer>
    </div>
  );
};

export default App;
