import Link from 'next/link';
import { CLINIC } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone-50 mt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        {/* Top row */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-script text-4xl">Cheongdam</span>
              <span className="font-display text-2xl tracking-[0.15em]">IT&apos;S ME</span>
            </div>
            <p className="text-bone-300 max-w-md leading-relaxed text-sm">
              A refined aesthetic destination in the heart of Cheongdam-dong,
              Gangnam—where individuality is the standard of beauty.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-bone-300 mb-6">Visit</p>
            <p className="font-display text-lg leading-relaxed text-bone-50">
              {CLINIC.address.en}
            </p>
            <p className="text-sm text-bone-300 mt-4">{CLINIC.address.ko}</p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-bone-300 mb-6">Hours</p>
            <ul className="space-y-2 text-sm text-bone-100">
              <li>Mon–Fri · {CLINIC.hours.weekday}</li>
              <li>Saturday · {CLINIC.hours.saturday}</li>
              <li className="text-bone-500">Sun · Closed</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-bone-300 mb-6">Navigate</p>
            <ul className="space-y-2 text-sm text-bone-100">
              <li><Link href="/about" className="hover:text-bone-50 link-underline">About</Link></li>
              <li><Link href="/treatments" className="hover:text-bone-50 link-underline">Treatments</Link></li>
              <li><Link href="/results" className="hover:text-bone-50 link-underline">Results</Link></li>
              <li><Link href="/pricing" className="hover:text-bone-50 link-underline">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-bone-50 link-underline">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="hairline my-12 opacity-30" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-display text-3xl md:text-5xl leading-tight max-w-xl">
              Where you meet <em className="font-light">yourself</em>, refined.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end inline-block border border-bone-300 text-bone-50 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-bone-50 hover:text-ink transition-colors"
          >
            Book a Consultation →
          </Link>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-bone-500">
          <p>© {new Date().getFullYear()} Cheongdam IT&apos;S ME Clinic. All rights reserved.</p>
          <p className="font-mono">
            <a href={CLINIC.website} target="_blank" rel="noopener noreferrer" className="hover:text-bone-100">
              itsme1.kr ↗
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
