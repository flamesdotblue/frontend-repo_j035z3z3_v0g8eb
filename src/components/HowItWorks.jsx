import React from 'react';
import { BookOpen, FileText, Wand2, Scissors, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Ingest your catalog',
    desc: 'Drop in manuscripts, PDFs, EPUBs, or audio. Map metadata and chapters in minutes.',
  },
  {
    icon: FileText,
    title: 'Auto-select highlights',
    desc: 'AI identifies clip‑worthy insights, frameworks, quotes, and chapter hooks for UGC.',
  },
  {
    icon: Wand2,
    title: 'Generate scripts & assets',
    desc: 'Auto‑scripts, voice lines, on‑screen captions, b‑roll prompts, and thumbnail copy.',
  },
  {
    icon: Scissors,
    title: 'Assemble & format',
    desc: 'n8n pipeline stitches scenes, styles captions, and exports platform‑native versions.',
  },
  {
    icon: CheckCircle2,
    title: 'Review & publish',
    desc: 'One‑click approval flows. Export to TikTok, IG Reels, and YouTube Shorts.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[120vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A streamlined, auditable pipeline you can trust.</p>
        </div>

        <div className="relative mt-14">
          {/* timeline line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:block" />

          <ol className="grid gap-6 sm:grid-cols-2">
            {steps.map(({ icon: Icon, title, desc }, idx) => (
              <li key={title} className="group relative">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:bg-white/[0.06]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
