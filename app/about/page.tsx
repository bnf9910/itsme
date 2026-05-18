import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CLINIC, DOCTOR, CLINIC_PHOTOS } from '@/lib/data';
import { PhysicianSchema, BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About — Dr. Hangoo Kim & Our Philosophy',
  description:
    "Meet Dr. Hangoo Kim, founder of Cheongdam IT'S ME Clinic. 20+ years of expertise in aesthetic dermatology and a philosophy of understated, natural beauty.",
  alternates: { canonical: 'https://itsme1.kr/about' },
};

export default function AboutPage() {
  return (
    <>
      <PhysicianSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://itsme1.kr' },
          { name: 'About', url: 'https://itsme1.kr/about' },
        ]}
      />
      {/* Hero */}
      <section className="pt-44 pb-20 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow mb-8">About the Clinic</p>
          <h1 className="display-heading text-5xl lg:text-8xl max-w-5xl">
            A practice built on <em>restraint</em>.
          </h1>
          <p className="mt-12 max-w-2xl text-lg text-ink-700 leading-relaxed">
            IT&apos;S ME Clinic was founded on a principle that runs counter to
            much of contemporary aesthetic medicine: that the most effective
            treatments are the ones no one notices except, eventually, you.
          </p>
        </div>
      </section>

      {/* Director full profile */}
      <section className="py-24 bg-bone-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="image-frame aspect-[3/4] mb-6 bg-bone-200 relative">
                <Image
                  src="/images/doctor/director.webp"
                  alt={DOCTOR.nameEn}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="font-script text-2xl text-accent text-center mb-2">
                {DOCTOR.nameKo}
              </p>
              <p className="text-center text-sm text-ink-500 tracking-widest uppercase">
                Founder · Medical Director
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">The Founder</p>
              <h2 className="display-heading text-5xl lg:text-7xl mb-3">
                {DOCTOR.nameEn}
              </h2>
              <p className="font-script text-3xl text-accent mb-2">
                {DOCTOR.nameKo} · {DOCTOR.title}
              </p>
              <p className="text-sm text-ink-500 tracking-widest uppercase mb-10">
                {DOCTOR.position}
              </p>
              <div className="hairline w-32 mb-10" />
              <p className="text-lg text-ink-700 leading-relaxed mb-12">
                {DOCTOR.bioEn}
              </p>

              <div className="space-y-10">
                <div>
                  <p className="eyebrow mb-4">Academic & Society Roles</p>
                  <ul className="space-y-2 text-ink-700">
                    {DOCTOR.credentials.map((c, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-accent">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow mb-4">Previous Appointments</p>
                  <ul className="space-y-2 text-ink-700">
                    {DOCTOR.formerPositions.map((c, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-accent">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy callout */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
          <p className="eyebrow mb-8">Our Philosophy</p>
          <blockquote className="display-heading text-3xl lg:text-5xl leading-tight max-w-4xl mx-auto">
            <em className="font-script text-accent text-[1.4em]">&ldquo;</em>
            We don&apos;t treat patients to look like a trend. We treat them so
            they recognize themselves in the mirror—just clearer, brighter, more
            themselves.<em className="font-script text-accent text-[1.4em]">&rdquo;</em>
          </blockquote>
          <p className="mt-12 eyebrow text-accent">— Dr. Hangoo Kim</p>
        </div>
      </section>

      {/* Clinic interior gallery */}
      <section className="py-24 bg-bone-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16">
            <p className="eyebrow mb-6">The Space</p>
            <h2 className="display-heading text-5xl lg:text-7xl max-w-3xl">
              An interior designed for <em>quiet</em>.
            </h2>
            <p className="mt-8 max-w-2xl text-ink-700 leading-relaxed">
              Two floors in a discrete Cheongdam-dong building, finished in
              warm bone, soft plaster, and curved wood. Spaces are designed for
              calm—both before and after treatment.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {CLINIC_PHOTOS.slice(0, 9).map((src, i) => (
              <div
                key={src}
                className={`image-frame ${
                  i % 5 === 0 ? 'aspect-[4/5] lg:row-span-2' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={src}
                  alt={`Clinic interior ${i + 1}`}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-6">Visit Us</p>
              <h2 className="display-heading text-4xl lg:text-6xl mb-8">
                Find us in Cheongdam.
              </h2>
              <div className="space-y-6 text-ink-700">
                <div>
                  <p className="eyebrow text-ink-500 mb-2">Address</p>
                  <p className="text-lg leading-relaxed">{CLINIC.address.en}</p>
                  <p className="text-sm text-ink-500 mt-1">{CLINIC.address.ko}</p>
                </div>
                <div>
                  <p className="eyebrow text-ink-500 mb-2">Hours</p>
                  <p>Mon — Fri · {CLINIC.hours.weekday}</p>
                  <p>Saturday · {CLINIC.hours.saturday}</p>
                  <p className="text-ink-500">{CLINIC.hours.closed}</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-block bg-ink text-bone-50 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-ink-900 transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
            <div className="image-frame aspect-[4/5]">
              <Image
                src="/images/clinic/dsc07236_l.webp"
                alt="IT'S ME Clinic exterior"
                width={1000}
                height={1250}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
