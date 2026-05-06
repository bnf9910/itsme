import type { Metadata } from 'next';
import { CLINIC } from '@/lib/data';
import ContactForm from '@/components/ContactForm';
import { BreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact & Book Consultation',
  description:
    "Book a consultation at Cheongdam IT'S ME Clinic in Gangnam, Seoul. English consultation available for international patients. Response within one business day.",
  alternates: { canonical: 'https://itsme1.kr/contact' },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://itsme1.kr' },
          { name: 'Contact', url: 'https://itsme1.kr/contact' },
        ]}
      />
      {/* Hero */}
      <section className="pt-44 pb-20 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow mb-8">Contact</p>
          <h1 className="display-heading text-5xl lg:text-8xl max-w-5xl">
            We&apos;re here to <em>listen</em> first.
          </h1>
          <p className="mt-12 max-w-2xl text-lg text-ink-700 leading-relaxed">
            Send us a message about what you&apos;re hoping to achieve, your
            availability, and any questions. We&apos;ll respond within one
            business day with next steps.
          </p>
        </div>
      </section>

      <section className="pb-32 lg:pb-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info */}
            <aside className="lg:col-span-5 space-y-12">
              <div>
                <p className="eyebrow mb-3">Visit</p>
                <p className="font-display text-2xl leading-relaxed">
                  {CLINIC.address.en}
                </p>
                <p className="text-sm text-ink-500 mt-2">{CLINIC.address.ko}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">Hours</p>
                <ul className="font-display text-xl space-y-2">
                  <li>Mon — Fri · {CLINIC.hours.weekday}</li>
                  <li>Saturday · {CLINIC.hours.saturday}</li>
                  <li className="text-ink-500">{CLINIC.hours.closed}</li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Online</p>
                <a
                  href={CLINIC.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl link-underline"
                >
                  itsme1.kr ↗
                </a>
              </div>
              <div className="bg-bone-100 border-l-2 border-accent p-6">
                <p className="eyebrow mb-3 text-accent">For International Patients</p>
                <p className="text-sm text-ink-700 leading-relaxed">
                  English-speaking consultation is available with prior arrangement.
                  When booking, please note your language preference and we&apos;ll
                  schedule with our bilingual coordinator.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
