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
              {/* Direct contact buttons */}
              <div>
                <p className="eyebrow mb-4">Reach Us Directly</p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 p-4 bg-[#25D366] hover:bg-[#1da851] text-white transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                      </svg>
                      <span className="font-display text-lg">WhatsApp</span>
                    </div>
                    <span className="text-xs tracking-[0.15em] uppercase">Message →</span>
                  </a>

                  <a
                    href={`mailto:${CLINIC.contact.email}`}
                    className="flex items-center justify-between gap-4 p-4 bg-ink hover:bg-ink-900 text-bone-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="font-display text-lg">{CLINIC.contact.email}</span>
                    </div>
                    <span className="text-xs tracking-[0.15em] uppercase">Email →</span>
                  </a>

                  <a
                    href={`tel:${CLINIC.contact.phoneTel}`}
                    className="flex items-center justify-between gap-4 p-4 bg-accent hover:bg-accent-dark text-bone-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="font-display text-lg">{CLINIC.contact.phoneDisplay}</span>
                    </div>
                    <span className="text-xs tracking-[0.15em] uppercase">Call →</span>
                  </a>
                </div>
              </div>

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
