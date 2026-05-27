import type { Metadata } from 'next';
import { Cormorant_Garant, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ModalProvider } from '@/context/ModalContext';
import { IntentModal } from '@/components/modals/IntentModal';

const cormorant = Cormorant_Garant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '1 Ocean Yachts | Luxury Yacht Sales, Charter & Advisory',
    template: '%s | 1 Ocean Yachts',
  },
  description:
    'Miami-based luxury yacht brokerage specializing in yacht sales, charter services in the Americas and Mediterranean, yacht management, crew placement, and exclusive brand representation including Palmer Johnson and G-Tender.',
  keywords: [
    'luxury yachts',
    'yacht for sale',
    'yacht charter',
    'superyacht',
    'Miami yacht broker',
    'Mediterranean charter',
    'Caribbean charter',
    'Palmer Johnson',
    'G-Tender',
    'yacht management',
    'crew placement',
  ],
  authors: [{ name: '1 Ocean Yachts' }],
  creator: '1 Ocean Yachts',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.1oceanyachts.com',
    siteName: '1 Ocean Yachts',
    title: '1 Ocean Yachts | Luxury Yacht Sales, Charter & Advisory',
    description:
      'Curating Yachting Excellence, One Client at a Time. Luxury yacht sales, charter and advisory services from Miami.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1 Ocean Yachts | Luxury Yacht Sales, Charter & Advisory',
    description:
      'Curating Yachting Excellence, One Client at a Time.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-inter bg-navy-950 text-white antialiased">
        <LanguageProvider>
          <ModalProvider>
            {children}
            <IntentModal />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
