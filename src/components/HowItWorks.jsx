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
    <section id="how-it-works" className="relative bg-gradient-to-b from-transparent to-white/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">A streamlined, auditable pipeline you can trust.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">{idx + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
