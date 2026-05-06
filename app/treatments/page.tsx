import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SIGNATURE_TREATMENTS, TREATMENT_CATEGORIES } from '@/lib/data';
import { TreatmentsSchema, FAQSchema, FAQ_DATA, BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Treatments — Onda Lifting, Skin Boosters, Filler',
  description:
    "Signature non-surgical treatments at Cheongdam IT'S ME Clinic: Onda Lifting, ITs Me Injection, Density Skin Booster, Ulthera, Thermage, Potenza, and more.",
  alternates: { canonical: 'https://itsme1.kr/treatments' },
};

export default function TreatmentsPage() {
  return (
    <>
      <TreatmentsSchema />
      <FAQSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://itsme1.kr' },
          { name: 'Treatments', url: 'https://itsme1.kr/treatments' },
        ]}
      />
      
      {/* Hero */}
      <section className="pt-44 pb-20 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow mb-8">Treatments</p>
          <h1 className="display-heading text-5xl lg:text-8xl max-w-5xl">
            Calibrated for <em>your</em> face.
          </h1>
          <p className="mt-12 max-w-2xl text-lg text-ink-700 leading-relaxed">
            We invest in only the equipment and protocols that meet our standard
            for safety, predictability, and natural-looking results. Below: an
            overview. Specifics—including which combination is right for you—
            are determined at consultation.
          </p>
        </div>
      </section>

      {/* Signature */}
      <section className="py-24 bg-bone-100 border-y border-bone-200">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16">
            <p className="eyebrow mb-6">Signature Protocols</p>
            <h2 className="display-heading text-4xl lg:text-6xl max-w-3xl">
              Four treatments that define IT&apos;S ME.
            </h2>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {SIGNATURE_TREATMENTS.map((t, idx) => (
              <article
                key={t.slug}
                className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="aspect-[4/5] bg-ink text-bone-50 flex flex-col justify-between p-12 lg:p-16 relative overflow-hidden">
                    <div className="absolute -top-8 -right-4 font-display text-[14rem] text-accent/15 leading-none select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <p className="eyebrow text-accent relative z-10">
                      Signature {String(idx + 1).padStart(2, '0')}
                    </p>
                    <div className="relative z-10">
                      <p className="font-script text-5xl text-accent mb-6">
                        {t.name.split(' ')[0]}
                      </p>
                      <p className="font-display text-3xl lg:text-4xl leading-tight">
                        {t.tagline}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <span className="font-display text-7xl text-accent/40 leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="display-heading text-4xl lg:text-6xl mt-4 mb-4">
                    {t.name}
                  </h3>
                  <p className="text-ink-500 italic mb-6 text-lg">
                    {t.tagline}
                  </p>
                  <p className="text-ink-700 leading-relaxed mb-8 max-w-xl">
                    {t.description}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6 max-w-2xl border-t border-bone-300 pt-8">
                    <div>
                      <p className="eyebrow mb-2">Best For</p>
                      <ul className="text-sm text-ink-700 space-y-1">
                        {t.bestFor.map((b) => (
                          <li key={b}>· {b}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow mb-2">Duration</p>
                      <p className="text-sm text-ink-700">{t.duration}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-2">Downtime</p>
                      <p className="text-sm text-ink-700">{t.downtime}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-20">
            <p className="eyebrow mb-6">The Full Menu</p>
            <h2 className="display-heading text-4xl lg:text-6xl max-w-3xl">
              Every device, considered.
            </h2>
            <p className="mt-6 max-w-xl text-ink-700">
              We carry the full range of leading aesthetic technologies. Each
              has its place; none is universal.
            </p>
          </div>

          <div className="space-y-24">
            {TREATMENT_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
                  <div>
                    <p className="eyebrow text-accent mb-3">
                      {String(TREATMENT_CATEGORIES.indexOf(cat) + 1).padStart(
                        2,
                        '0'
                      )}{' '}
                      ·  Category
                    </p>
                    <h3 className="display-heading text-3xl lg:text-5xl">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="max-w-md text-ink-500">{cat.description}</p>
                </div>
                <div className="hairline mb-10" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.devices.map((d, di) => (
                    <article
                      key={d.name}
                      className="group relative border border-bone-200 bg-bone-50 hover:bg-ink hover:text-bone-50 transition-colors duration-500 overflow-hidden"
                    >
                      <div className="absolute top-6 right-6 font-display text-5xl text-accent/30 group-hover:text-accent/60 transition-colors">
                        {String(di + 1).padStart(2, '0')}
                      </div>
                      <div className="p-10 pt-12">
                        <h4 className="font-display text-3xl mb-2">{d.name}</h4>
                        <div className="hairline w-12 my-4 opacity-60" />
                        <p className="text-sm leading-relaxed opacity-90">
                          {d.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FAQ ========================= */}
      <section className="py-32 lg:py-44 bg-bone-100">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">Frequently Asked</p>
            <h2 className="display-heading text-4xl lg:text-6xl">
              Questions, <em>answered</em>.
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-ink-700">
              Practical answers for international patients considering a visit.
            </p>
          </div>

          <div className="space-y-2">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group border-b border-bone-300 py-6 cursor-pointer"
              >
                <summary className="flex items-start justify-between gap-6 list-none">
                  <h3 className="font-display text-xl lg:text-2xl text-ink leading-snug pr-4">
                    {faq.question}
                  </h3>
                  <span className="font-display text-3xl text-accent flex-shrink-0 transition-transform group-open:rotate-45 leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink-700 leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink text-bone-50">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
          <h2 className="display-heading text-4xl lg:text-6xl mb-8">
            Not sure where to begin?
          </h2>
          <p className="text-bone-300 leading-relaxed max-w-xl mx-auto mb-10">
            A consultation is the right place to start. We&apos;ll review your
            goals, examine your skin and structure, and design a plan together.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-bone-300 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-bone-50 hover:text-ink transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
