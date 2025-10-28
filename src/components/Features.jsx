import React from 'react';
import { Zap, Timer, Share2, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'UGC‑style, on‑brand',
    desc: 'Camera‑ready scripts, b‑roll prompts, captions, and layout templates tuned for book marketing.',
  },
  {
    icon: Zap,
    title: '95% automated',
    desc: 'AI handles ideation, scripting, voice, captioning, and formatting. Your team reviews & posts.',
  },
  {
    icon: Timer,
    title: '5–10 min per video',
    desc: 'From chapter highlights to ready‑to‑post reels faster than your coffee cools.',
  },
  {
    icon: Share2,
    title: 'Viral at scale',
    desc: 'Batch produce shorts for TikTok, Reels, and YT Shorts with platform‑specific variants.',
  },
  {
    icon: ShieldCheck,
    title: 'Rights‑safe',
    desc: 'Configurable sourcing and usage controls aligned to your publishing policies.',
  },
];

const Features = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20" id="features">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to make books trend</h2>
        <p className="mt-3 text-white/70">
          Purpose‑built for non‑fiction publishers and imprints using n8n + AI to drive predictable reach.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:bg-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
