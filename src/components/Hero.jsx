import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Wand2, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/75 via-[#0a0b0f]/40 to-[#0a0b0f]/85" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0b0f]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 text-center sm:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-sm shadow-black/20">
          <Wand2 className="h-3.5 w-3.5" />
          n8n + AI automation for non‑fiction publishers
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Viral Shorts from Your Catalog
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          UGC‑style reels generated end‑to‑end. 95% automated. Ready in 5–10 minutes per video.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:translate-y-[-1px] hover:shadow-xl"
          >
            <Rocket className="h-4 w-4" /> Book a Demo
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/40"
          >
            <Play className="h-4 w-4" /> See How It Works
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Shield className="h-3.5 w-3.5" /> Rights‑safe controls
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            Multi‑platform exports
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            On‑brand caption styles
          </span>
        </div>
      </div>

      {/* bottom subtle divider curve */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-24 bg-gradient-to-b from-transparent to-[#0a0b0f]" />
    </section>
  );
};

export default Hero;
