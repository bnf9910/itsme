'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to backend (e.g. Formspree, Resend, or custom API route)
    // For now, simulate success
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-bone-300 p-12 lg:p-16 bg-bone-50">
        <p className="eyebrow text-accent mb-6">Thank you</p>
        <h3 className="display-heading text-4xl lg:text-5xl mb-6">
          Your message is received.
        </h3>
        <p className="text-ink-700 leading-relaxed">
          One of our coordinators will reach out within one business day to
          arrange your consultation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-xs tracking-[0.2em] uppercase link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Phone (with country code)" name="phone" type="tel" />
        <Field label="Country / City" name="country" />
      </div>
      <div>
        <label className="eyebrow block mb-3" htmlFor="interest">
          Treatments of Interest
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full bg-transparent border-b border-ink py-3 text-lg outline-none focus:border-accent transition-colors"
        >
          <option value="">— Select —</option>
          <option>Onda Lifting</option>
          <option>ITs Me Injection</option>
          <option>Density Skin Booster</option>
          <option>Shoulder Filler</option>
          <option>Lifting (Ulthera / Thermage / etc.)</option>
          <option>Filler (face)</option>
          <option>General Consultation</option>
          <option>Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label className="eyebrow block mb-3" htmlFor="message">
          Tell us about your goals
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full bg-transparent border-b border-ink py-3 text-lg outline-none focus:border-accent transition-colors resize-none"
          placeholder="What you're hoping to achieve, your travel timeline, any concerns or questions..."
        />
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" required className="mt-1.5 accent-ink" />
        <label htmlFor="consent" className="text-sm text-ink-500 leading-relaxed">
          I consent to IT&apos;S ME Clinic processing my information for the
          purpose of arranging a consultation. I understand my information will
          not be shared with third parties.
        </label>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-ink text-bone-50 px-12 py-5 text-xs tracking-[0.2em] uppercase hover:bg-ink-900 transition-colors"
      >
        Send Message →
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow block mb-3" htmlFor={name}>
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-ink py-3 text-lg outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
