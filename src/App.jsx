import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PricingCTA from './components/PricingCTA';

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0b10] text-white">
      {/* Global ambience: vignette + noise */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>")' }} />
      </div>

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-gray-900 shadow-sm">A</span>
            <span className="tracking-tight">AutoShorts for Publishers</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/80 sm:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how-it-works" className="transition hover:text-white">How it works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#pricing" className="rounded-lg bg-white px-3.5 py-2 font-semibold text-gray-900 shadow-sm transition hover:translate-y-[-1px] hover:shadow-md">Book a Demo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PricingCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 py-14 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/70">
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
