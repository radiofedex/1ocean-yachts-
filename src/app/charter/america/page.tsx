'use client';

import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';
import { CTAButton } from '@/components/ui/CTAButton';
import { useModal } from '@/context/ModalContext';
import { motion } from 'framer-motion';
import { americaDestinations } from '@/data/destinations';

const americaSpots = [
  {
    name: 'Miami & South Florida',
    description:
      'The vibrant gateway to the Caribbean. Miami\'s turquoise waters and year-round sunshine make it the perfect departure point for any Americas charter.',
  },
  {
    name: 'The Bahamas',
    description:
      'Pristine white sand beaches, crystal clear waters and over 700 islands await. The Bahamas offers some of the most spectacular cruising grounds in the world.',
  },
  {
    name: 'Florida Keys',
    description:
      'A string of tropical islands stretching southwest from Miami, with world-class fishing, snorkelling, and that unique Keys atmosphere.',
  },
  {
    name: 'Caribbean Islands',
    description:
      'From the US Virgin Islands to the BVI, Turks & Caicos, and beyond — the Caribbean offers endless exploration and legendary trade wind sailing.',
  },
];

export default function CharterAmericaPage() {
  const { openModal, setCharterRegion } = useModal();

  function handleCharterEnquiry() {
    setCharterRegion('america');
    openModal('charter');
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden min-h-[60vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/60 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-800/50" />
        {/* IMAGE PLACEHOLDER: /public/assets/destinations/america-hero.jpg */}
        <div className="container-luxury relative z-10 pb-12">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Charter · The Americas
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-7xl text-white font-light leading-tight mb-6 max-w-3xl">
            Charter in the Americas
          </h1>
          <p className="font-inter text-base text-silver-300/70 font-light leading-relaxed max-w-xl mb-10">
            From the turquoise shallows of the Bahamas to the vibrant energy of Miami and the wild
            beauty of the Caribbean — the Americas offer some of the world's most spectacular
            charter destinations.
          </p>
          <CTAButton variant="primary" size="lg" onClick={handleCharterEnquiry}>
            Plan My Charter
          </CTAButton>
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
              Explore the Americas
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              Our charter experts have deep knowledge of these waters and the finest vessels
              available in each destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-200/30">
            {americaSpots.map((spot, i) => (
              <motion.div
                key={spot.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#F8F6F1] p-10"
              >
                <h3 className="font-cormorant text-2xl text-navy-950 font-light mb-3">
                  {spot.name}
                </h3>
                <p className="font-inter text-sm text-navy-500 leading-relaxed">
                  {spot.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton variant="primary" onClick={handleCharterEnquiry} className="bg-navy-950 border-navy-950 hover:bg-navy-800 text-white">
              Enquire About America Charters
            </CTAButton>
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
