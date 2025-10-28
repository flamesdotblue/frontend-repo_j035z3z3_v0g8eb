import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Drop long‑form content',
    description:
      'Connect your podcast/video feed or upload files. We index transcripts and chapters instantly.',
  },
  {
    title: 'AI selects hooks',
    description:
      'Models find viral moments, trim dead air, and craft captions with emojis and keywords.',
  },
  {
    title: 'Brand it automatically',
    description:
      'Templates apply fonts, colors, subtitles, and layouts tailored for each platform.',
  },
  {
    title: 'Distribute everywhere',
    description:
      'Schedule posts across Shorts, TikTok, and Reels—then track performance in one view.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 sm:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage:
            'radial-gradient(550px_200px_at_50%_0%, rgba(99,102,241,0.20), transparent 60%)',
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">From source to social in minutes, not weeks.</p>
        </div>

        <ol className="relative space-y-8 before:absolute before:left-4 before:top-1 before:h-full before:w-px before:bg-gradient-to-b before:from-fuchsia-400/40 before:via-emerald-400/40 before:to-cyan-400/40 sm:before:left-1/2">
          {steps.map((s, idx) => (
            <li key={s.title} className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-12">
              <div className="sm:col-span-5">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="sm:col-span-7 text-white/70">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
