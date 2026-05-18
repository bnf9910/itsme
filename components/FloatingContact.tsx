'use client';

import { useState, useEffect } from 'react';
import { CLINIC } from '@/lib/data';

export default function FloatingContact() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { contact } = CLINIC;

  const buttons = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/${contact.whatsapp}`,
      target: '_blank' as const,
      bg: 'bg-[#25D366]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: `mailto:${contact.email}`,
      target: undefined,
      bg: 'bg-ink',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'Call',
      href: `tel:${contact.phoneTel}`,
      target: undefined,
      bg: 'bg-accent',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
        scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Expandable button list (desktop hover, mobile click) */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto'
        }`}
      >
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            target={btn.target}
            rel={btn.target ? 'noopener noreferrer' : undefined}
            className={`group/btn flex items-center gap-3 ${btn.bg} text-bone-50 px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all`}
            aria-label={btn.label}
          >
            <span className="text-xs tracking-[0.15em] uppercase font-medium opacity-0 max-w-0 group-hover/btn:opacity-100 group-hover/btn:max-w-[100px] transition-all overflow-hidden whitespace-nowrap">
              {btn.label}
            </span>
            {btn.icon}
          </a>
        ))}
      </div>

      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="lg:hidden bg-ink text-bone-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all"
        aria-label={expanded ? 'Close contact menu' : 'Open contact menu'}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-6 h-6 transition-transform duration-300 ${expanded ? 'rotate-45' : ''}`}
        >
          {expanded ? (
            <line x1="6" y1="6" x2="18" y2="18" />
          ) : (
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          )}
        </svg>
      </button>
    </div>
  );
}
