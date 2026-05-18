import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://itsme1.kr'),
  title: {
    default: "IT'S ME Clinic | Premium Aesthetic Medicine in Cheongdam, Seoul",
    template: "%s | IT'S ME Clinic",
  },
  description:
    "Cheongdam IT'S ME Clinic — a refined aesthetic destination in Gangnam, Seoul. Signature treatments include Onda Lifting, ITs Me Injection, Density Skin Booster, and Shoulder Filler. English consultation available.",
  keywords: [
    'aesthetic clinic Seoul',
    'Cheongdam dermatology',
    'Korean clinic English speaking',
    'Gangnam aesthetic clinic',
    'Onda lifting Seoul',
    'medical tourism Korea',
    'dermatology Cheongdam',
    'IT\'S ME Clinic',
    'Korean skin booster',
    'Seoul filler treatment',
    'non-surgical lifting Korea',
    'Gangnam plastic surgery alternative',
  ],
  authors: [{ name: 'Cheongdam IT\'S ME Clinic' }],
  creator: 'Cheongdam IT\'S ME Clinic',
  publisher: 'Cheongdam IT\'S ME Clinic',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ko_KR'],
    url: 'https://itsme1.kr',
    siteName: "IT'S ME Clinic",
    title: "IT'S ME Clinic | Premium Aesthetic Medicine in Cheongdam, Seoul",
    description:
      "A refined aesthetic destination in Gangnam, Seoul. English consultation available.",
    images: [
      {
        url: '/images/clinic/dsc07227_l.webp',
        width: 1920,
        height: 1280,
        alt: "IT'S ME Clinic Cheongdam interior",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "IT'S ME Clinic | Premium Aesthetic Medicine in Seoul",
    description:
      'Refined aesthetic medicine in Cheongdam-dong. English consultations.',
    images: ['/images/clinic/dsc07227_l.webp'],
  },
  alternates: {
    canonical: 'https://itsme1.kr',
    languages: {
      'en-US': 'https://itsme1.kr',
      'x-default': 'https://itsme1.kr',
    },
  },
  category: 'health',
  verification: {
    // Add your verification codes when ready:
    // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Manrope:wght@200;300;400;500;600;700&family=Italianno&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bone-50 text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
