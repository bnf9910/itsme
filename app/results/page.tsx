import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { RESULTS } from '@/lib/data';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Before & After Results',
  description:
    "Selected before-and-after results from IT'S ME Clinic in Cheongdam, Seoul. Filler and contour refinement outcomes — results that whisper, never shout.",
  alternates: { canonical: 'https://itsme1.kr/results' },
};

export default function ResultsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://itsme1.kr' },
          { name: 'Before & After', url: 'https://itsme1.kr/results' },
        ]}
      />
      {/* Hero */}
      <section className="pt-44 pb-20 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow mb-8">Selected Results</p>
          <h1 className="display-heading text-5xl lg:text-8xl max-w-5xl">
            Results that <em>whisper</em>.
          </h1>
          <p className="mt-12 max-w-2xl text-lg text-ink-700 leading-relaxed">
            We measure success not by how dramatic a transformation looks, but
            by how natural it feels. Every result shown here was achieved with
            patient consent and represents typical outcomes—though every
            individual response varies.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-bone-100 border-y border-bone-200">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow text-ink-500">
            Disclaimer · Individual results may vary. Photos shown with patient
            consent. Procedures involve risks; please consult with our medical
            team before treatment.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {RESULTS.map((r, i) => (
              <figure
                key={r.image}
                className={`group ${i % 6 === 1 ? 'lg:mt-16' : ''} ${
                  i % 6 === 4 ? 'lg:mt-16' : ''
                }`}
              >
                <div className="image-frame aspect-[3/4] bg-bone-200 mb-4 relative">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <figcaption className="font-display text-2xl">
                    {r.title}
                  </figcaption>
                  <span className="eyebrow text-accent">{r.category}</span>
                </div>
              </figure>
            ))}
          </div>

          {/* More-on-consultation note */}
          <div className="mt-24 max-w-2xl mx-auto text-center border-t border-bone-200 pt-12">
            <p className="eyebrow text-accent mb-4">An Extended Portfolio</p>
            <p className="font-display text-2xl lg:text-3xl text-ink leading-relaxed">
              Many additional cases—including lifting, skin booster, and body
              contour outcomes—are presented privately during consultation.
            </p>
            <p className="mt-4 text-sm text-ink-500">
              We respect patient privacy and only share specific results in
              direct conversation, with consent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-44 bg-bone-100">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
          <p className="eyebrow mb-8">Could this be you?</p>
          <h2 className="display-heading text-4xl lg:text-6xl mb-10">
            See what&apos;s possible
            <br />
            for <em>your</em> goals.
          </h2>
          <p className="max-w-xl mx-auto text-ink-700 leading-relaxed mb-10">
            During a consultation, we&apos;ll review what kind of result is
            realistic for your face and timeline—then design a plan around it.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink text-bone-50 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-ink-900 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
