import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { DestinationsSection } from '@/components/sections/DestinationsSection';
import { LeadSection } from '@/components/sections/LeadSection';
import { yachts } from '@/data/yachts';
import { YachtCard } from '@/components/cards/YachtCard';

export const metadata: Metadata = {
  title: 'Yachts for Charter',
  description:
    'Luxury yacht charter in the Americas and Mediterranean. Explore Caribbean, Bahamas, Sardinia, French Riviera and more with 1 Ocean Yachts.',
};

const charterYachts = yachts.filter((y) => y.status === 'charter' || y.status === 'both');

export default function YachtsForCharterPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Private Charter
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Yachts for Charter
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl">
            Extraordinary voyages in the world's most spectacular waters. 1 Ocean Yachts
            curates bespoke charter experiences in the Americas and across the Mediterranean.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <DestinationsSection />

      {/* Charter Yachts */}
      <section className="bg-[#F8F6F1] py-24">
        <div className="container-luxury">
          <div className="max-w-2xl mb-12">
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
              Available Vessels
            </p>
            <div className="w-8 h-px bg-gold-500 mb-6" />
            <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-4">
              Charter Fleet
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              A select portfolio of charter vessels across different sizes and styles, available in
              the Americas and Mediterranean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {charterYachts.map((yacht, i) => (
              <YachtCard key={yacht.id} yacht={yacht} index={i} />
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
