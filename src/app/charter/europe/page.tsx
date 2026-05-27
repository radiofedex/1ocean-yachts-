'use client';

import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';
import { CTAButton } from '@/components/ui/CTAButton';
import { useModal } from '@/context/ModalContext';
import { motion } from 'framer-motion';

const europeSpots = [
  {
    name: 'Costa Smeralda, Sardinia',
    description:
      'The jewel of the Mediterranean. Costa Smeralda\'s emerald waters, pink granite cliffs, and legendary beach clubs make it the ultimate summer playground for the world\'s elite.',
  },
  {
    name: 'Balearic Islands',
    description:
      'Ibiza, Formentera, Mallorca, and Menorca — four islands, each with a distinct character. From the glamorous to the serenely secluded, the Balearics have it all.',
  },
  {
    name: 'Elba & Tuscany Archipelago',
    description:
      'A hidden gem of the Tyrrhenian Sea. Elba offers pristine beaches, turquoise waters, and a wild, unspoilt coastline that rewards the discerning explorer.',
  },
  {
    name: 'Corsica',
    description:
      'The island of beauty. Corsica\'s dramatic mountain peaks, crystal-clear coves, and spectacular cuisine make it one of the most captivating charter destinations in the world.',
  },
  {
    name: 'French Riviera',
    description:
      'From Monaco to Saint-Tropez, the Côte d\'Azur defines Mediterranean glamour. Summer in the South of France aboard a superyacht is the pinnacle of luxury living.',
  },
];

export default function CharterEuropePage() {
  const { openModal, setCharterRegion } = useModal();

  function handleCharterEnquiry() {
    setCharterRegion('europe');
    openModal('charter');
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden min-h-[60vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/60 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-800/50" />
        {/* IMAGE PLACEHOLDER: /public/assets/destinations/europe-hero.jpg */}
        <div className="container-luxury relative z-10 pb-12">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Charter · Mediterranean
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-7xl text-white font-light leading-tight mb-6 max-w-3xl">
            Charter in Europe
          </h1>
          <p className="font-inter text-base text-silver-300/70 font-light leading-relaxed max-w-xl mb-10">
            The legendary waters of the Mediterranean — Sardinia, Corsica, the Balearics, and the
            French Riviera — await. Discover our curated European charter collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton variant="primary" size="lg" onClick={handleCharterEnquiry}>
              Plan My Mediterranean Charter
            </CTAButton>
            {/* PDF: Place europe-charter.pdf at /public/assets/pdf/europe-charter.pdf */}
            <a
              href="/assets/pdf/europe-charter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold-500/50 text-gold-400 px-8 py-4 font-inter text-sm font-medium tracking-wider uppercase hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Charter Brochure
            </a>
          </div>
        </div>
      </section>

      {/* PDF Brochure Banner */}
      <section className="bg-gold-500/10 border-y border-gold-500/20 py-8">
        <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-cormorant text-2xl text-white font-light mb-1">
              Europe Charter Collection 2025
            </p>
            <p className="font-inter text-sm text-silver-400/70">
              Download our comprehensive guide to Mediterranean charter destinations, vessels, and services.
            </p>
          </div>
          {/* PDF: Place europe-charter.pdf at /public/assets/pdf/europe-charter.pdf */}
          <a
            href="/assets/pdf/europe-charter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-3.5 font-inter text-sm font-medium tracking-wider uppercase hover:bg-gold-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Brochure
          </a>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="max-w-2xl mb-16">
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
              Destinations
            </p>
            <div className="w-8 h-px bg-gold-500 mb-6" />
            <h2 className="font-cormorant text-4xl md:text-5xl text-navy-950 font-light mb-5">
              The Mediterranean Awaits
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              From the wild coasts of Corsica to the glittering bay of Monaco, our European charter
              program covers the finest waters in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-200/30">
            {europeSpots.map((spot, i) => (
              <motion.div
                key={spot.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#F8F6F1] p-10"
              >
                <div className="w-6 h-px bg-gold-500 mb-5" />
                <h3 className="font-cormorant text-2xl text-navy-950 font-light mb-3">
                  {spot.name}
                </h3>
                <p className="font-inter text-sm text-navy-500 leading-relaxed">
                  {spot.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="primary"
              onClick={handleCharterEnquiry}
              className="bg-navy-950 border-navy-950 hover:bg-navy-800 text-white"
            >
              Enquire About Mediterranean Charters
            </CTAButton>
            {/* PDF: Place europe-charter.pdf at /public/assets/pdf/europe-charter.pdf */}
            <a
              href="/assets/pdf/europe-charter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy-300/50 text-navy-600 px-8 py-3.5 font-inter text-sm font-medium tracking-wider uppercase hover:border-gold-500/50 hover:text-gold-600 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
