import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CLINIC, DOCTOR, SIGNATURE_TREATMENTS, RESULTS } from '@/lib/data';
import { OrganizationSchema, WebSiteSchema, PhysicianSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "IT'S ME Clinic | Premium Aesthetic Medicine in Cheongdam, Seoul",
  description:
    "Cheongdam IT'S ME Clinic — refined aesthetic destination in Gangnam, Seoul. Signature treatments: Onda Lifting, ITs Me Injection, Density Skin Booster. English consultation available.",
  alternates: { canonical: 'https://itsme1.kr' },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <PhysicianSchema />
      {/* ========================= HERO ========================= */}
      <section className="relative min-h-[100vh] grain overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clinic/dsc07227_l.webp"
            alt="IT'S ME Clinic Cheongdam interior"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bone-50/30 via-bone-50/10 to-bone-50/95" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pt-44 lg:pt-56 pb-32">
          <div className="reveal-on-load">
            <p className="eyebrow mb-8" style={{ animationDelay: '0.1s' }}>
              Cheongdam · Gangnam · Seoul
            </p>
            <h1 className="display-heading text-[clamp(3rem,9vw,8rem)] text-ink max-w-5xl">
              Where you meet
              <br />
              <em className="font-script font-normal text-[1.2em] text-accent">
                yourself
              </em>
              , refined.
            </h1>
            <div className="mt-12 max-w-xl">
              <p className="text-ink-700 leading-relaxed text-lg">
                A refined aesthetic destination in Cheongdam-dong—where Korea&apos;s most
                advanced lifting and skin technologies meet a philosophy of
                understated, natural beauty.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-ink text-bone-50 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-ink-900 transition-colors"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/treatments"
                  className="inline-block border border-ink text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-ink hover:text-bone-50 transition-colors"
                >
                  Explore Treatments
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marker */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500">
          <span className="eyebrow">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-ink-500 to-transparent" />
        </div>
      </section>

      {/* ========================= ANNOUNCEMENT STRIP ========================= */}
      <section className="bg-ink text-bone-50 py-6 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 text-sm tracking-[0.2em] uppercase">
              <span>English Consultation Available</span>
              <span className="text-accent">◆</span>
              <span>Signature Onda Lifting</span>
              <span className="text-accent">◆</span>
              <span>Medical Tourism Friendly</span>
              <span className="text-accent">◆</span>
              <span>20+ Years of Expertise</span>
              <span className="text-accent">◆</span>
              <span>Cheongdam · Gangnam</span>
              <span className="text-accent">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= PHILOSOPHY ========================= */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">Philosophy</p>
              <h2 className="display-heading text-5xl lg:text-7xl mb-8">
                Beauty, on
                <br />
                your <em>own</em> terms.
              </h2>
              <div className="hairline w-32 mb-10" />
              <div className="space-y-6 text-ink-700 leading-relaxed">
                <p>
                  At IT&apos;S ME Clinic, we believe the most beautiful version of you
                  is the one that already exists—simply refined, never replaced.
                </p>
                <p>
                  Our practice is built around a single principle: subtle,
                  understated enhancement that preserves what makes you
                  recognizably <em className="font-display">you</em>. Every
                  treatment plan is calibrated to your facial structure, skin
                  history, and personal definition of beauty.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-10 inline-block text-sm tracking-[0.2em] uppercase text-ink link-underline"
              >
                Meet Dr. Hangoo Kim →
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6">
              <div className="image-frame aspect-[3/4]">
                <Image
                  src="/images/clinic/dsc07252_l.webp"
                  alt="Treatment room"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="image-frame aspect-[3/4] mt-12">
                <Image
                  src="/images/clinic/dsc07254_l.webp"
                  alt="Reception detail"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= SIGNATURE TREATMENTS ========================= */}
      <section className="py-32 lg:py-44 bg-bone-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-6">
            <div>
              <p className="eyebrow mb-6">Signature Protocols</p>
              <h2 className="display-heading text-5xl lg:text-7xl max-w-2xl">
                Four treatments that define us.
              </h2>
            </div>
            <Link
              href="/treatments"
              className="inline-block self-start text-sm tracking-[0.2em] uppercase text-ink link-underline"
            >
              View All Treatments →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {SIGNATURE_TREATMENTS.map((t, idx) => (
              <article
                key={t.slug}
                className={`group ${idx % 2 === 1 ? 'lg:mt-20' : ''}`}
              >
                <div className="image-frame aspect-[4/5] mb-8 bg-bone-200 relative">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-3xl text-accent">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl">{t.name}</h3>
                </div>
                <p className="text-ink-500 italic mb-4 max-w-md">{t.tagline}</p>
                <p className="text-ink-700 leading-relaxed max-w-md">
                  {t.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= DOCTOR ========================= */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="image-frame aspect-[3/4]">
                <Image
                  src="/images/doctor/director.webp"
                  alt={DOCTOR.nameEn}
                  width={800}
                  height={1066}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              <p className="eyebrow mb-6">The Founder</p>
              <h2 className="display-heading text-5xl lg:text-7xl mb-2">
                {DOCTOR.nameEn}
              </h2>
              <p className="font-script text-3xl text-accent mb-10">
                {DOCTOR.title}
              </p>
              <div className="hairline w-32 mb-10" />
              <p className="text-ink-700 leading-relaxed text-lg max-w-2xl mb-10">
                {DOCTOR.bioEn}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <p className="eyebrow mb-3">Academic</p>
                  <ul className="space-y-1.5 text-sm text-ink-700">
                    {DOCTOR.credentials.slice(0, 4).map((c, i) => (
                      <li key={i}>· {c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3">Leadership</p>
                  <ul className="space-y-1.5 text-sm text-ink-700">
                    {DOCTOR.credentials.slice(4, 8).map((c, i) => (
                      <li key={i}>· {c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-10 inline-block text-sm tracking-[0.2em] uppercase text-ink link-underline"
              >
                Full Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= RESULTS PREVIEW ========================= */}
      <section className="py-32 lg:py-44 bg-ink text-bone-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <p className="eyebrow text-bone-300 mb-6">Selected Results</p>
              <h2 className="display-heading text-5xl lg:text-7xl text-bone-50 max-w-2xl">
                Quiet transformations.
              </h2>
            </div>
            <Link
              href="/results"
              className="inline-block self-start text-sm tracking-[0.2em] uppercase text-bone-50 link-underline"
            >
              See All Results →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {RESULTS.slice(0, 4).map((r) => (
              <figure key={r.title} className="image-frame aspect-[3/4] bg-bone-200 relative">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
                <figcaption className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-bone-50 z-10">
                  {r.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <p className="eyebrow mb-8">Begin Your Journey</p>
          <h2 className="display-heading text-5xl lg:text-8xl mb-12 max-w-4xl mx-auto">
            Your first visit
            <br />
            is a <em>conversation</em>.
          </h2>
          <p className="max-w-xl mx-auto text-ink-700 leading-relaxed mb-12">
            Every plan begins with a thorough consultation—understanding your
            goals, your skin, and what feels right for you. English-speaking
            consultations are available with advance booking.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink text-bone-50 px-12 py-5 text-xs tracking-[0.2em] uppercase hover:bg-ink-900 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
