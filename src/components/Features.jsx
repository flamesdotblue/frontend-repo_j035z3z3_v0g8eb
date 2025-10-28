import React from 'react';
import { Zap, Shield, Wand2 } from 'lucide-react';

const features = [
  {
    title: 'Autopilot editing',
    description:
      'AI detects hooks, generates captions, and crops to platform-perfect frames—all hands-free.',
    icon: Wand2,
    accent: 'from-fuchsia-500/30 to-rose-500/10',
  },
  {
    title: 'Lightning distribution',
    description:
      'Batch schedule and publish to YouTube Shorts, TikTok, and Reels with one flow.',
    icon: Zap,
    accent: 'from-emerald-400/30 to-cyan-400/10',
  },
  {
    title: 'Enterprise‑grade guardrails',
    description:
      'Moderation, brand safety, and audit logs baked in. Sleep easy, ship faster.',
    icon: Shield,
    accent: 'from-indigo-400/30 to-violet-400/10',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      {/* Decorative grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(600px_240px_at_10%_10%, rgba(236,72,153,0.12), transparent 60%), radial-gradient(700px_260px_at_90%_20%, rgba(34,197,94,0.10), transparent 60%), radial-gradient(800px_300px_at_50%_100%, rgba(56,189,248,0.12), transparent 60%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.06)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.06)_25px)] bg-[size:26px_26px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built for scale and speed</h2>
          <p className="mt-3 text-white/70">
            A single pipeline to generate, stylize, and publish short‑form clips from long‑form gems.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/90">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
