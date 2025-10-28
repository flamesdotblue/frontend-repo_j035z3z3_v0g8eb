import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vibrant gradient overlays for punch + readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b12]/40 via-[#0b0b12]/20 to-[#0b0b12]/80" />
        <div className="absolute -inset-24 opacity-50 [background:radial-gradient(60%_60%_at_50%_20%,rgba(120,119,198,0.35),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay" style={{
          backgroundImage:
            'radial-gradient(800px_300px_at_50%_-10%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(600px_250px_at_20%_60%, rgba(167,139,250,0.25), transparent 60%), radial-gradient(700px_280px_at_80%_70%, rgba(34,197,94,0.25), transparent 60%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          New: Galaxy-grade generative workflows for non‑fiction publishers
        </div>

        <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Turn long‑form knowledge into viral, cosmic‑grade short videos
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-white/70">
          Automate clipping, formatting, and posting with n8n + AI. A luminous, end‑to‑end pipeline for YouTube, TikTok, and Reels.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
          >
            <Rocket className="h-4 w-4" />
            Launch your workflow
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            <Play className="h-4 w-4" />
            See how it works
          </a>
        </div>

        {/* Subtle bottom fade into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0b0b12]" />
      </div>
    </section>
  );
};

export default Hero;
