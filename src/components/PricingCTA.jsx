import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingCTA = () => {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      {/* Corner ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-8 backdrop-blur">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-white">Ready to scale your short‑form engine?</h3>
              <p className="mt-2 max-w-xl text-white/70">
                Start with a curated template, then grow into custom pipelines with your brand kit and publishing targets.
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-transform duration-200 hover:scale-[1.02]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
