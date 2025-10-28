import React from 'react';
import { Zap, Timer, Share2, Sparkles, ShieldCheck, Palette } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'UGC‑style, on‑brand',
    desc: 'Camera‑ready scripts, b‑roll prompts, captions, and layout templates tuned for book marketing.',
    accent: 'from-fuchsia-400 to-pink-400',
  },
  {
    icon: Zap,
    title: '95% automated',
    desc: 'AI handles ideation, scripting, voice, captioning, and formatting. Your team reviews & posts.',
    accent: 'from-emerald-400 to-teal-400',
  },
  {
    icon: Timer,
    title: '5–10 min per video',
    desc: 'From chapter highlights to ready‑to‑post reels faster than your coffee cools.',
    accent: 'from-amber-400 to-orange-400',
  },
  {
    icon: Share2,
    title: 'Viral at scale',
    desc: 'Batch produce shorts for TikTok, Reels, and YT Shorts with platform‑specific variants.',
    accent: 'from-sky-400 to-indigo-400',
  },
  {
    icon: ShieldCheck,
    title: 'Rights‑safe',
    desc: 'Configurable sourcing and usage controls aligned to your publishing policies.',
    accent: 'from-purple-400 to-violet-400',
  },
  {
    icon: Palette,
    title: 'Brand kits',
    desc: 'Fonts, colors, overlays, and caption styles locked to each imprint or title.',
    accent: 'from-rose-400 to-red-400',
  },
];

const Features = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24" id="features">
      {/* Decorative grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-[1] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to make books trend</h2>
        <p className="mt-3 text-white/70">
          Purpose‑built for non‑fiction publishers and imprints using n8n + AI to drive predictable reach.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc, accent }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-2xl`} />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
