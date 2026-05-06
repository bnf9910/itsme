import { CLINIC, DOCTOR, SIGNATURE_TREATMENTS } from '@/lib/data';

const BASE_URL = 'https://itsme1.kr';

// ============================================================
// Organization / MedicalBusiness Schema
// Used on the homepage — tells Google "this is a medical clinic"
// ============================================================
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: CLINIC.nameFull,
    alternateName: CLINIC.nameEn,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo/itsme-logo.png`,
    image: `${BASE_URL}/images/clinic/dsc07240_l.webp`,
    description:
      "Premium aesthetic medicine clinic in Cheongdam-dong, Gangnam, Seoul. Specializing in non-surgical lifting, skin boosters, and contour refinement. English consultation available for international patients.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14 Seolleung-ro 157-gil, 3F & 4F',
      addressLocality: 'Gangnam-gu',
      addressRegion: 'Seoul',
      postalCode: '06014',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.5263,
      longitude: 127.0461,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$$',
    medicalSpecialty: ['Dermatology', 'CosmeticProcedure', 'Aesthetics'],
    availableService: SIGNATURE_TREATMENTS.map((t) => ({
      '@type': 'MedicalProcedure',
      name: t.name,
      description: t.description,
    })),
    knowsLanguage: ['en', 'ko'],
    sameAs: [BASE_URL],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================
// Physician Schema
// Tells Google about Dr. Kim — qualifications, role, affiliations
// ============================================================
export function PhysicianSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${BASE_URL}/about#physician`,
    name: DOCTOR.nameEn,
    alternateName: DOCTOR.nameKo,
    jobTitle: DOCTOR.title,
    image: `${BASE_URL}/images/doctor/director.webp`,
    description: DOCTOR.bioEn,
    medicalSpecialty: ['Dermatology', 'CosmeticProcedure', 'Aesthetics'],
    worksFor: {
      '@type': 'MedicalBusiness',
      '@id': `${BASE_URL}/#organization`,
      name: CLINIC.nameFull,
    },
    affiliation: DOCTOR.credentials.map((c) => ({
      '@type': 'Organization',
      name: c,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================
// MedicalProcedure Schemas — one per signature treatment
// ============================================================
export function TreatmentsSchema() {
  const schemas = SIGNATURE_TREATMENTS.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${BASE_URL}/treatments#${t.slug}`,
    name: t.name,
    description: t.description,
    procedureType: 'NoninvasiveProcedure',
    bodyLocation: 'Face',
    preparation: 'Consultation with a board-certified physician',
    followup: t.downtime,
    howPerformed: `Performed in-clinic. Duration: ${t.duration}.`,
    indication: t.bestFor.map((b) => ({
      '@type': 'MedicalIndication',
      name: b,
    })),
  }));

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

// ============================================================
// FAQ Schema — for the Treatments page
// HUGE for GEO (AI search) — FAQs are the most cited content
// ============================================================
export const FAQ_DATA = [
  {
    question: 'Do you offer English-language consultations?',
    answer:
      "Yes. English-language consultations are available with our bilingual coordinator. We recommend booking in advance to ensure scheduling. Please mention your language preference when reaching out.",
  },
  {
    question: 'Where is IT\'S ME Clinic located?',
    answer:
      "We are located on the 3rd and 4th floors of 14 Seolleung-ro 157-gil, in the Cheongdam-dong neighborhood of Gangnam-gu, Seoul. The clinic is approximately 10 minutes by taxi from Gangnam Station.",
  },
  {
    question: 'What is Onda Lifting and how does it differ from HIFU treatments?',
    answer:
      "Onda is a microwave-based lifting technology that targets deep skin layers and subcutaneous fat. Unlike HIFU (which uses focused ultrasound), Onda uses microwave energy with the Coolwaves system, delivering selective heating that lifts and tightens without surface damage. It is typically less painful than HIFU and has no downtime.",
  },
  {
    question: 'How is the ITs Me Injection different from standard fat-dissolving injections?',
    answer:
      "ITs Me Injection is our in-house protocol developed by Dr. Hangoo Kim. It is calibrated per patient based on tissue thickness and target area, and is designed for natural, gradual contour refinement rather than dramatic change. The protocol is suitable for both face and body contouring.",
  },
  {
    question: 'How much do treatments cost? Are prices in USD?',
    answer:
      "Our pricing page lists prices in both USD (approximate, based on a 1 USD ≈ 1,400 KRW conservative conversion) and KRW. Final pricing is confirmed at consultation based on your specific treatment plan. VAT (10%) is excluded unless stated.",
  },
  {
    question: 'How long should I stay in Seoul for treatment?',
    answer:
      "For most non-surgical treatments (Onda Lifting, fillers, skin boosters), patients can return to normal activity the same day. For comprehensive packages, we recommend 3 to 5 days in Seoul to allow for consultation, treatment, and a follow-up visit. We can advise on your specific timeline during the initial consultation.",
  },
  {
    question: 'Is downtime expected after treatments?',
    answer:
      "Most of our signature treatments have minimal to no downtime. Onda Lifting and Density Skin Booster typically allow immediate return to normal activity. Filler treatments may involve mild swelling for 24 to 48 hours. We provide detailed post-care instructions for each procedure.",
  },
  {
    question: 'Do you provide before-and-after photos of all procedures?',
    answer:
      "Selected before-and-after results are available on our Results page. Additional cases — including lifting, skin booster, and body contouring — are presented privately during consultation, with patient consent.",
  },
  {
    question: 'How do I book a consultation as an international patient?',
    answer:
      "Use the contact form on our website. Include your country, preferred travel dates, and treatments of interest. Our coordinator will respond within one business day with availability and next steps. Virtual consultations are also available for international patients before travel.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      "We accept major credit cards (Visa, Mastercard, American Express), and bank transfer. International patients are welcome to discuss payment arrangements during consultation. All transactions are processed in Korean Won (KRW) at the day's exchange rate.",
  },
];

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================
// Breadcrumb Schema (helper, can be reused per page)
// ============================================================
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================
// WebSite Schema with SearchAction (for sitelinks search box)
// ============================================================
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: CLINIC.nameFull,
    description:
      "A refined aesthetic destination in Cheongdam-dong, Gangnam — premium non-surgical procedures and English consultations.",
    inLanguage: 'en',
    publisher: { '@id': `${BASE_URL}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
