import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Wand2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to make text readable without blocking Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
          <Wand2 className="h-3.5 w-3.5" />
          AI Automation for Non‑Fiction Publishers
        </span>
        <h1 className="mt-6 bg-gradient-to-br from-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Turn Your Books into Viral Shorts at Scale
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Our n8n-powered pipeline creates UGC‑style reels from your non‑fiction catalog.
          95% automated. Fully AI‑driven. Ready to post in 5–10 minutes per video.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow/50 shadow-white/10 transition hover:shadow-lg"
          >
            <Rocket className="h-4 w-4" />
            Book a Demo
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/30"
          >
            <Play className="h-4 w-4" />
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-xs text-white/70">Works with existing manuscripts, PDFs, or audio — no editing skills required.</p>
      </div>
    </section>
  );
};

export default Hero;
