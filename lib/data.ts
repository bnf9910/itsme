// Centralized data file for IT'S ME Clinic
// All prices: KRW excludes VAT. USD is approximate (1 USD ≈ 1,400 KRW, conservative).
// Update USD_RATE here and all prices update across the site.

export const USD_RATE = 1400;

export const krwToUsd = (krwInManwon: number): string => {
  // Input: 만원 unit (e.g. 39 = 390,000 KRW)
  const krw = krwInManwon * 10000;
  const usd = Math.round(krw / USD_RATE / 5) * 5; // round to nearest $5
  return `$${usd.toLocaleString()}`;
};

export const krwLabel = (krwInManwon: number): string => {
  return `₩${(krwInManwon * 10000).toLocaleString()}`;
};

// ============================================================
// CLINIC INFO
// ============================================================
export const CLINIC = {
  nameEn: "IT'S ME Clinic",
  nameFull: "Cheongdam IT'S ME Clinic",
  tagline: "Where You Meet Yourself, Refined.",
  address: {
    en: "3F & 4F, 14 Seolleung-ro 157-gil, Gangnam-gu, Seoul, Republic of Korea",
    ko: "서울 강남구 선릉로157길 14 3층, 4층",
  },
  district: "Cheongdam-dong, Gangnam, Seoul",
  website: "https://itsme1.kr/",
  hours: {
    weekday: "10:00 — 19:00",
    saturday: "10:00 — 17:00",
    closed: "Sundays & Public Holidays",
  },
  signature: ["Onda Lifting", "ITs Me Injection", "Density (DENSITY) Skin Booster", "Shoulder Filler"],

  // ⚠️ PLACEHOLDER VALUES — replace with real clinic contact information
  // These are used by the floating contact buttons and Contact page.
  contact: {
    // Display format (e.g. "+82 2-XXXX-XXXX") — shown to user
    phoneDisplay: "+82 2-0000-0000",
    // Tel link format (no spaces, no dashes) — used in <a href="tel:...">
    phoneTel: "+8220000000",
    // Email address
    email: "global@itsme1.kr",
    // WhatsApp — country code + number, no spaces or symbols
    // e.g. "821012345678" for a Korean number 010-1234-5678
    whatsapp: "821000000000",
    // KakaoTalk channel URL (optional)
    kakao: "",
  },
};

// ============================================================
// DOCTOR
// ============================================================
export const DOCTOR = {
  nameEn: "Dr. Hangoo Kim",
  nameKo: "김한구",
  title: "Founder & Medical Director",
  position: "Cheongdam IT'S ME Clinic",
  // Translated and adapted from the credentials image
  credentials: [
    "Adjunct Professor, Yonsei University College of Medicine — Outpatient",
    "Clinical Instructor, Yonsei University College of Medicine",
    "Outpatient Advisor, Catholic University Seongga Hospital",
    "Honorary Chairman (3rd term), Korean Society of Laser Skin & Hair Science",
    "Vice President, Korean Society of Skin Anti-aging Plastic Surgery",
    "Academic Director, Korea Anti-aging Medical Society (KOAT)",
    "Founding Member & Academic Director, Korean Anti-aging Medical Society",
    "Vice President, Korean Society of Aesthetic Medicine",
    "Vice President, Korean Society of Sun & Light Medicine",
  ],
  formerPositions: [
    "Former Director, Misogong Skin & Anti-aging Network",
    "Former Director, Baekseolgongju Skin & Anti-aging Network",
    "Former Director, IDI Skin Clinic",
    "Former Director, Lia Yeonhee Dermatology & Plastic Surgery",
    "Former Center Director, Envue Dermatology & Plastic Surgery",
  ],
  bioEn: "Dr. Hangoo Kim brings over two decades of expertise in aesthetic dermatology and anti-aging medicine to IT'S ME Clinic. His philosophy centers on understated, natural results—enhancing what makes each patient distinctive rather than imposing a uniform standard of beauty. As an academic leader in Korea's medical aesthetics community, Dr. Kim has shaped industry standards through dozens of published papers, lectures, and society leadership roles.",
};

// ============================================================
// SIGNATURE TREATMENTS  (the "main" treatments per spec)
// ============================================================
export const SIGNATURE_TREATMENTS = [
  {
    slug: "onda-lifting",
    name: "Onda Lifting",
    image: "/images/clinic/dsc07252_l.webp",
    deviceImage: "/images/treatments/onda.webp",
    tagline: "Microwave deep-tissue lifting—no downtime, no incision.",
    description: "Onda uses microwave energy to selectively target and tighten deep skin layers and subcutaneous fat. The result: a contoured, lifted face without the downtime of surgical procedures. Ideal for anyone wanting natural, gradual rejuvenation.",
    bestFor: ["Sagging jawline", "Loss of facial volume", "Cheek and submental fat", "First-time lifting patients"],
    duration: "30–45 minutes",
    downtime: "None",
  },
  {
    slug: "its-me-injection",
    name: "ITs Me Injection",
    image: "/images/clinic/dsc07258_l.webp",
    deviceImage: "/images/treatments/density.webp",
    tagline: "Our signature contour-defining injection.",
    description: "A bespoke injection protocol developed in-house by Dr. Kim. Designed to refine facial and body contours by targeting localized fat deposits, ITs Me Injection delivers visible definition over a series of treatments. The protocol is calibrated per patient based on tissue thickness and treatment area.",
    bestFor: ["Facial slimming", "Double chin", "Body contouring", "Subtle, gradual change"],
    duration: "20–30 minutes",
    downtime: "Minimal — light swelling 1–2 days",
  },
  {
    slug: "density",
    name: "Density Skin Booster",
    image: "/images/clinic/dsc07230_l.webp",
    deviceImage: "/images/treatments/density.webp",
    tagline: "Restore moisture and elasticity from within.",
    description: "Density is an advanced skin booster that delivers hyaluronic acid and skin-conditioning ingredients deep into the dermis. Unlike topical hydration, Density works at the cellular level to restore plumpness, smooth fine lines, and improve skin density over a 4–8 week timeline.",
    bestFor: ["Dehydrated skin", "Fine lines", "Loss of glow", "Pre-event skin prep"],
    duration: "20 minutes",
    downtime: "None — small bumps resolve within hours",
  },
  {
    slug: "shoulder-filler",
    name: "Shoulder Filler",
    image: "/images/clinic/dsc07232_l.webp",
    deviceImage: "/images/clinic/dsc07254_l.webp",
    tagline: "Sculpt elegant shoulder lines.",
    description: "Strategic placement of dermal filler to refine the slope and balance of the shoulder line—a treatment increasingly requested by patients who want a more elegant silhouette in formal wear or wedding photography. Results last 12–18 months.",
    bestFor: ["Asymmetric shoulders", "Pre-wedding refinement", "Shoulder line balancing"],
    duration: "30 minutes",
    downtime: "Minimal swelling 24–48 hours",
  },
];

// ============================================================
// FULL TREATMENT MENU — 4 categories (per spec)
// ============================================================
export const TREATMENT_CATEGORIES = [
  {
    id: "its-me-injection",
    name: "ITs Me Injection — Treatment Areas",
    short: "ITs Me Injection",
    description: "Our signature contour-defining injection. Calibrated per patient and applied across 11 facial and body areas for refined, gradual definition.",
    devices: [
      { name: "Double Chin", description: "Refining the line between jaw and neck for a defined profile.", image: "/images/treatments/density.webp" },
      { name: "Jawline", description: "Sculpting along the jawline to enhance facial framing.", image: "/images/treatments/density.webp" },
      { name: "Nasolabial Folds (Upper)", description: "Softening the area above the nasolabial fold.", image: "/images/treatments/density.webp" },
      { name: "Front Cheek", description: "Refining anterior cheek volume and contour.", image: "/images/treatments/density.webp" },
      { name: "Side Cheek", description: "Defining lateral cheek for a slimmer mid-face.", image: "/images/treatments/density.webp" },
      { name: "Deep Cheek (Bull's-Eye)", description: "Targeting deeper cheek fat layers.", image: "/images/treatments/density.webp" },
      { name: "Marionette Lines", description: "Smoothing the lines from mouth corners to chin.", image: "/images/treatments/density.webp" },
      { name: "Back of Neck", description: "Refining the contour of the posterior neck.", image: "/images/treatments/density.webp" },
      { name: "Accessory Breast", description: "Reducing accessory breast tissue along the bra line.", image: "/images/treatments/density.webp" },
      { name: "Upper Body", description: "Body contouring for arms, back, and torso.", image: "/images/treatments/density.webp" },
      { name: "Lower Body", description: "Body contouring for thighs, hips, and lower torso.", image: "/images/treatments/density.webp" },
    ],
  },
  {
    id: "petit",
    name: "Petit Procedures",
    short: "Petit",
    description: "Subtle, minimally-invasive refinements—fillers, neurotoxins, and thread lifts—performed in-office with minimal downtime.",
    devices: [
      { name: "Dermal Filler", description: "Volume restoration and contour refinement across the face.", image: "/images/treatments/density.webp" },
      { name: "Juvederm", description: "Premium hyaluronic acid filler for natural, long-lasting volume.", image: "/images/treatments/density.webp" },
      { name: "Restylane", description: "Versatile HA filler for lips, tear troughs, and contour.", image: "/images/treatments/density.webp" },
      { name: "Botox", description: "Neurotoxin for dynamic line softening and slimming.", image: "/images/treatments/density.webp" },
      { name: "Xeomin", description: "Highly purified neurotoxin alternative—suited for sensitive patients.", image: "/images/treatments/density.webp" },
      { name: "Thread Lifting", description: "Absorbable threads for non-surgical lift and skin renewal.", image: "/images/treatments/density.webp" },
    ],
  },
  {
    id: "lifting",
    name: "Premium Lifting Center",
    short: "Lifting",
    description: "Korea's most advanced non-surgical lifting technologies, calibrated for skin type and facial anatomy.",
    devices: [
      { name: "Ulthera Prime", description: "HIFU energy reaches the SMAS layer for deep, lasting lift.", image: "/images/treatments/ulthera-prime.webp" },
      { name: "Thermage FLX", description: "Monopolar RF tightens and stimulates collagen across the full face.", image: "/images/treatments/thermage-flx.webp" },
      { name: "Density", description: "Premium skin booster restoring deep moisture and elasticity.", image: "/images/treatments/density.webp" },
      { name: "Onda Lifting", description: "Microwave technology targeting deep tissue and adipose layers.", image: "/images/treatments/onda.webp" },
      { name: "Potra Titanium", description: "Lifting alternative for slimmer faces and zero-downtime lifestyles.", image: "/images/treatments/potra.webp" },
      { name: "Shrink Universe", description: "Next-generation HIFU with broader coverage and shorter sessions.", image: "/images/treatments/shrink-universe.webp" },
      { name: "MCT (Stem Cell)", description: "Stem-cell-based regenerative protocol for deep tissue revitalization.", image: "/images/treatments/density.webp" },
      { name: "Potenza", description: "Microneedle RF for pores, scars, and overall texture.", image: "/images/treatments/potenza.webp" },
      { name: "Volnewmer", description: "RF lifting calibrated for sensitive Asian skin tones.", image: "/images/treatments/volnewmer.webp" },
    ],
  },
  {
    id: "skin-booster",
    name: "Skin Boosters",
    short: "Skin Booster",
    description: "Hydration, elasticity, and luminosity—delivered directly into the dermis through micro-injection protocols.",
    devices: [
      { name: "Rejuran / Rejuran HB", description: "Polynucleotide-based booster for skin healing and elasticity.", image: "/images/treatments/density.webp" },
      { name: "Skinvive", description: "Hyaluronic acid microdroplet booster for cheek smoothness and glow.", image: "/images/treatments/density.webp" },
      { name: "Belotero (Revive)", description: "Mesotherapy booster for hydration and fine line smoothing.", image: "/images/treatments/density.webp" },
      { name: "Rituo", description: "Premium hydration protocol with Dermashine delivery.", image: "/images/treatments/density.webp" },
      { name: "Letigen", description: "Advanced skin booster targeting deep dermal regeneration.", image: "/images/treatments/density.webp" },
      { name: "Trifill Pro", description: "Combination booster targeting hydration and collagen at once.", image: "/images/treatments/trifill-pro.webp" },
    ],
  },
];

// ============================================================
// PRICING — USD-converted from event prices in 수가표
// All KRW values are in 만원 units. VAT excluded.
// ============================================================
export const PRICING_NOTES = [
  "All prices in USD are approximate, based on a conservative 1 USD ≈ 1,400 KRW conversion.",
  "Final pricing and treatment plan are confirmed at consultation.",
  "VAT (10%) is not included unless stated otherwise.",
  "Anesthesia fees, when applicable, are billed separately.",
];

export const PRICING = {
  signaturePackages: [
    {
      name: "Ulthera + Thermage Lifting",
      tier: "Signature",
      details: "Ulthera 300 shots + Thermage 600 shots — our most-requested combination for full-face deep lift.",
      eventPriceKrw: 319,
      regularPriceKrw: 378,
      featured: true,
    },
    {
      name: "Eye Lifting Package",
      tier: "Premium",
      details: "Eye Thermage 225 shots + Full-face Thermage 600 shots + Eye Rejuran 1cc.",
      eventPriceKrw: 359,
      regularPriceKrw: 413,
    },
    {
      name: "ITs Me V-Line Lifting",
      tier: "Signature",
      details: "Sculptra 10cc + Juvederm 2cc (chin) + contour-shaping Botox.",
      eventPriceKrw: 238,
      regularPriceKrw: 278,
    },
    {
      name: "Mid-face Volume Restoration",
      tier: "Filler Package",
      details: "Nose filler 2cc + Tear-trough Restylane 1cc—balanced central face refinement.",
      eventPriceKrw: 129,
      regularPriceKrw: 150,
    },
  ],
  ondaTiers: [
    { shots: "40,000 lines", eventPriceKrw: 39, regularPriceKrw: 59 },
    { shots: "60,000 lines", eventPriceKrw: 57, regularPriceKrw: 89 },
    { shots: "80,000 lines", eventPriceKrw: 75, regularPriceKrw: 119 },
    { shots: "100,000 lines", eventPriceKrw: 93, regularPriceKrw: 149 },
  ],
  potraTiers: [
    { shots: "40,000 lines", eventPriceKrw: 29.9, regularPriceKrw: 49 },
    { shots: "50,000 lines", eventPriceKrw: 39, regularPriceKrw: 59 },
    { shots: "60,000 lines", eventPriceKrw: 49, regularPriceKrw: 69 },
    { shots: "70,000 lines", eventPriceKrw: 59, regularPriceKrw: 79 },
  ],
  fillers: [
    { area: "Shoulder Filler (premium, 4 vials)", eventPriceKrw: 169, regularPriceKrw: 200 },
    { area: "Shoulder Filler (premium, 6 vials)", eventPriceKrw: 249, regularPriceKrw: 300 },
    { area: "Ear Filler (premium, 3 vials)", eventPriceKrw: 139, regularPriceKrw: 150 },
    { area: "Ear Filler (premium, 4 vials)", eventPriceKrw: 179, regularPriceKrw: 200 },
    { area: "Lip Filler 2cc + Lip-corner Botox", eventPriceKrw: 99, regularPriceKrw: 111 },
  ],
  skinBoosters: [
    { name: "Rituo (incl. Dermashine)", priceKrw: 69.9 },
    { name: "Cellderm (incl. Dermashine)", priceKrw: 59.9 },
    { name: "Rejuran 2cc", priceKrw: 29 },
    { name: "Rejuran Eye 1cc", priceKrw: 20 },
    { name: "Skinvive 1cc", priceKrw: 39 },
    { name: "Restylane Vital Light 1cc", priceKrw: 49 },
  ],
  injections: [
    { name: "ITs Me Injection — Face (basic)", priceKrw: 15, note: "3 sessions: ₩390,000" },
    { name: "ITs Me Injection — Body (basic)", priceKrw: 29, note: "3 sessions: ₩790,000" },
  ],
};

// ============================================================
// BEFORE / AFTER GALLERY
// Curated to show only photos without on-image text/emoji marks.
// Additional results available during consultation.
// ============================================================
export const RESULTS = [
  { title: "Facial Refinement", image: "/images/results/result25.webp", category: "Filler" },
  { title: "Facial Contour", image: "/images/results/result26.webp", category: "Filler" },
  { title: "Profile Refinement", image: "/images/results/result27.webp", category: "Filler" },
  { title: "Nose Bridge", image: "/images/results/result28.webp", category: "Filler" },
  { title: "Lip Filler", image: "/images/results/lip-filler.webp", category: "Filler" },
  { title: "Forehead Filler", image: "/images/results/forehead-filler.webp", category: "Filler" },
];

// ============================================================
// CLINIC PHOTOS
// ============================================================
export const CLINIC_PHOTOS = [
  "/images/clinic/dsc07222_l.webp",
  "/images/clinic/dsc07225_l.webp",
  "/images/clinic/dsc07227_l.webp",
  "/images/clinic/dsc07230_l.webp",
  "/images/clinic/dsc07232_l.webp",
  "/images/clinic/dsc07236_l.webp",
  "/images/clinic/dsc07252_l.webp",
  "/images/clinic/dsc07254_l.webp",
  "/images/clinic/dsc07258_l.webp",
];
