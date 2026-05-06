import Link from 'next/link';
import type { Metadata } from 'next';
import { PRICING, PRICING_NOTES, krwToUsd, krwLabel } from '@/lib/data';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pricing — Onda Lifting, Skin Boosters & Packages',
  description:
    "Transparent pricing in USD and KRW for signature treatments at Cheongdam IT'S ME Clinic. Featured packages, Onda Lifting tiers, fillers, and skin boosters.",
  alternates: { canonical: 'https://itsme1.kr/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://itsme1.kr' },
          { name: 'Pricing', url: 'https://itsme1.kr/pricing' },
        ]}
      />
      {/* Hero */}
      <section className="pt-44 pb-20 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow mb-8">Pricing</p>
          <h1 className="display-heading text-5xl lg:text-8xl max-w-5xl">
            Transparent <em>by design</em>.
          </h1>
          <p className="mt-12 max-w-2xl text-lg text-ink-700 leading-relaxed">
            We list our signature event prices openly. The right plan for you
            may differ—we&apos;ll confirm pricing during your consultation
            based on your individual goals and treatment area.
          </p>
        </div>
      </section>

      {/* Pricing notes */}
      <section className="py-8 bg-bone-100 border-y border-bone-200">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-ink-500 leading-relaxed">
            {PRICING_NOTES.map((note, i) => (
              <li key={i}>· {note}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Signature packages */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16">
            <p className="eyebrow mb-6">Featured Packages</p>
            <h2 className="display-heading text-4xl lg:text-6xl max-w-3xl">
              Most-requested combinations.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {PRICING.signaturePackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative p-10 lg:p-12 border ${
                  pkg.featured
                    ? 'bg-ink text-bone-50 border-ink'
                    : 'bg-bone-50 border-bone-200'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute top-6 right-6 eyebrow text-accent">
                    Most Popular
                  </span>
                )}
                <p
                  className={`eyebrow mb-3 ${
                    pkg.featured ? 'text-bone-300' : 'text-ink-500'
                  }`}
                >
                  {pkg.tier}
                </p>
                <h3 className="display-heading text-3xl lg:text-4xl mb-6 leading-tight">
                  {pkg.name}
                </h3>
                <p
                  className={`mb-8 leading-relaxed ${
                    pkg.featured ? 'text-bone-100' : 'text-ink-700'
                  }`}
                >
                  {pkg.details}
                </p>
                <div className="space-y-3 border-t pt-8 border-current/20">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm">Event Price (USD)</span>
                    <span className="font-display text-3xl lg:text-4xl">
                      {krwToUsd(pkg.eventPriceKrw)}
                    </span>
                  </div>
                  <div
                    className={`flex items-baseline justify-between text-sm ${
                      pkg.featured ? 'text-bone-300' : 'text-ink-500'
                    }`}
                  >
                    <span>Equivalent</span>
                    <span>
                      {krwLabel(pkg.eventPriceKrw)} ·{' '}
                      <span className="line-through">
                        {krwLabel(pkg.regularPriceKrw)}
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Onda Lifting tiers */}
      <section className="py-24 bg-bone-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-6">Signature Lifting</p>
              <h2 className="display-heading text-4xl lg:text-5xl mb-8">
                Onda Lifting
              </h2>
              <p className="text-ink-700 leading-relaxed mb-8 max-w-md">
                Our signature microwave lifting protocol—priced by treatment
                volume. Most patients achieve their goal in one to two sessions.
              </p>
            </div>
            <div className="bg-bone-50 border border-bone-200">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-bone-200">
                    <th className="text-left p-5 eyebrow">Volume</th>
                    <th className="text-right p-5 eyebrow">Event (USD)</th>
                    <th className="text-right p-5 eyebrow hidden sm:table-cell">
                      KRW
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.ondaTiers.map((t) => (
                    <tr
                      key={t.shots}
                      className="border-b border-bone-200 last:border-0 hover:bg-bone-100 transition-colors"
                    >
                      <td className="p-5 font-display text-lg">{t.shots}</td>
                      <td className="p-5 text-right font-display text-2xl">
                        {krwToUsd(t.eventPriceKrw)}
                      </td>
                      <td className="p-5 text-right text-sm text-ink-500 hidden sm:table-cell">
                        {krwLabel(t.eventPriceKrw)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Potra Titanium */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-6">Alternative Lifting</p>
              <h2 className="display-heading text-4xl lg:text-5xl mb-8">
                Potra Titanium Lifting
              </h2>
              <p className="text-ink-700 leading-relaxed mb-4 max-w-md">
                A lifting alternative for those seeking results without
                significant downtime—or for patients with less facial fat.
              </p>
              <ul className="space-y-2 text-sm text-ink-700 max-w-md">
                <li>· Less discomfort than Ulthera or Thermage</li>
                <li>· Improves pigmentation, skin tone, and texture</li>
                <li>· No downtime — return to your day immediately</li>
              </ul>
            </div>
            <div className="bg-bone-50 border border-bone-200">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-bone-200">
                    <th className="text-left p-5 eyebrow">Volume</th>
                    <th className="text-right p-5 eyebrow">Event (USD)</th>
                    <th className="text-right p-5 eyebrow hidden sm:table-cell">
                      KRW
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.potraTiers.map((t) => (
                    <tr
                      key={t.shots}
                      className="border-b border-bone-200 last:border-0 hover:bg-bone-100 transition-colors"
                    >
                      <td className="p-5 font-display text-lg">{t.shots}</td>
                      <td className="p-5 text-right font-display text-2xl">
                        {krwToUsd(t.eventPriceKrw)}
                      </td>
                      <td className="p-5 text-right text-sm text-ink-500 hidden sm:table-cell">
                        {krwLabel(t.eventPriceKrw)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Filler & Skin Booster grid */}
      <section className="py-24 bg-bone-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Fillers */}
            <div>
              <p className="eyebrow mb-6">Fillers</p>
              <h3 className="display-heading text-3xl mb-8">
                Selected filler packages
              </h3>
              <ul className="divide-y divide-bone-200 border-y border-bone-200">
                {PRICING.fillers.map((f) => (
                  <li key={f.area} className="py-4 flex items-baseline justify-between gap-4">
                    <span className="text-sm leading-tight">{f.area}</span>
                    <span className="font-display text-xl whitespace-nowrap">
                      {krwToUsd(f.eventPriceKrw)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skin boosters */}
            <div>
              <p className="eyebrow mb-6">Skin Boosters</p>
              <h3 className="display-heading text-3xl mb-8">
                Hydration & glow
              </h3>
              <ul className="divide-y divide-bone-200 border-y border-bone-200">
                {PRICING.skinBoosters.map((s) => (
                  <li key={s.name} className="py-4 flex items-baseline justify-between gap-4">
                    <span className="text-sm leading-tight">{s.name}</span>
                    <span className="font-display text-xl whitespace-nowrap">
                      {krwToUsd(s.priceKrw)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Injections */}
            <div>
              <p className="eyebrow mb-6">Signature Injection</p>
              <h3 className="display-heading text-3xl mb-8">
                ITs Me Injection
              </h3>
              <ul className="divide-y divide-bone-200 border-y border-bone-200">
                {PRICING.injections.map((inj) => (
                  <li key={inj.name} className="py-4">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <span className="text-sm leading-tight">{inj.name}</span>
                      <span className="font-display text-xl whitespace-nowrap">
                        {krwToUsd(inj.priceKrw)}
                      </span>
                    </div>
                    {inj.note && (
                      <p className="text-xs text-ink-500">{inj.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-ink text-bone-50">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
          <p className="eyebrow text-bone-300 mb-8">Personalized Pricing</p>
          <h2 className="display-heading text-4xl lg:text-6xl mb-10">
            Your plan is <em>yours alone</em>.
          </h2>
          <p className="text-bone-300 leading-relaxed max-w-xl mx-auto mb-10">
            The combinations above are popular—but the right plan for you
            depends on your specific goals. A consultation gives us the chance
            to design something built for you.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-bone-300 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-bone-50 hover:text-ink transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
