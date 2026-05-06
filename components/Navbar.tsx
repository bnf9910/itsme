'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CLINIC } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/results', label: 'Before & After' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-bone-50/95 backdrop-blur-md border-b border-bone-200'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2 group" onClick={() => setOpen(false)}>
            <span className="font-script text-3xl text-ink leading-none">Cheongdam</span>
            <span className="font-display text-xl tracking-[0.15em] text-ink leading-none">
              IT&apos;S ME
            </span>
            <span className="hidden sm:inline font-display text-xs tracking-[0.3em] text-ink-500 leading-none uppercase">
              Clinic
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-ink-700 hover:text-ink link-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-block bg-ink text-bone-50 px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-ink-900 transition-colors"
            >
              Book Consultation
            </Link>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-6 bg-ink transition-transform ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-opacity ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-transform ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 lg:px-12 py-8 flex flex-col gap-6 border-t border-bone-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-display tracking-tight text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-block bg-ink text-bone-50 px-6 py-4 text-xs tracking-[0.2em] uppercase text-center"
            onClick={() => setOpen(false)}
          >
            Book Consultation
          </Link>
          <p className="eyebrow mt-4">{CLINIC.district}</p>
        </nav>
      </div>
    </header>
  );
}
