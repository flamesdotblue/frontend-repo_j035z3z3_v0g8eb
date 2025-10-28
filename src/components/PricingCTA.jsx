import React from 'react';
import { Check, Rocket, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for testing with 1–2 titles per month.',
    features: [
      'Up to 30 shorts/month',
      'Single brand style kit',
      'Human review step',
      'Basic analytics exports',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'For imprints and publishers running multi‑title campaigns.',
    features: [
      '150+ shorts/month',
      'Multiple brand kits & voices',
      'Priority render queue',
      'API & publishing integrations',
    ],
    highlighted: true,
  },
];

const PricingCTA = () => {
  return (
    <section id="pricing" className="relative py-28">
      {/* Soft corner lights */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Pricing that scales with your catalog</h2>
          <p className="mt-3 text-white/70">We tailor deployments to your stack, brand kits, and compliance needs.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative overflow-hidden rounded-2xl border ${
                tier.highlighted ? 'border-white/30 bg-white/[0.08]' : 'border-white/10 bg-white/[0.045]'
              } p-6 backdrop-blur-xl transition hover:bg-white/[0.09]`}
            >
              {tier.highlighted && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-400/30 blur-3xl" />
              )}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <span className="text-sm text-white/70">{tier.price}</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{tier.description}</p>

                <ul className="mt-5 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/85">
                      <Check className="h-4 w-4 text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="mailto:hello@yourdomain.com?subject=Book%20a%20Demo%20—%20AI%20Publishing%20Automation"
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      tier.highlighted
                        ? 'bg-white text-gray-900 shadow-lg shadow-black/20 hover:translate-y-[-1px] hover:shadow-xl'
                        : 'border border-white/20 bg-black/30 text-white backdrop-blur-md hover:bg-black/40'
                    }`}
                  >
                    <Rocket className="h-4 w-4" /> Book a Demo
                  </a>
                  <a href="#how-it-works" className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/60">
          Need enterprise? We offer on‑prem, SSO, and custom moderation workflows.
        </p>
      </div>
    </section>
  );
};

export default PricingCTA;
