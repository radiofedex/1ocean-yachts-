import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';
import { YachtCard } from '@/components/cards/YachtCard';
import { yachts } from '@/data/yachts';

export const metadata: Metadata = {
  title: 'Yachts for Sale',
  description:
    'Browse our curated selection of luxury yachts for sale. Motor yachts, sailing yachts and superyachts available worldwide through 1 Ocean Yachts.',
};

const saleYachts = yachts.filter((y) => y.status === 'sale' || y.status === 'both');

export default function YachtsForSalePage() {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Brokerage
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Yachts for Sale
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl">
            Tailored access to the world's most desirable yachts. Our expert brokers provide
            discreet, personalized guidance through every stage of acquisition.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F8F6F1] py-20">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-5">
              A Curated Portfolio of Exceptional Vessels
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
              At 1 Ocean Yachts, our sales practice is built on discretion and expertise. We
              represent a carefully selected portfolio of motor yachts, sailing yachts, and
              superyachts — spanning the Americas and Europe — and provide clients with access to
              both listed and off-market opportunities.
            </p>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              Whether you are a first-time buyer or an experienced owner adding to your fleet, our
              brokers provide comprehensive guidance from initial search through financing, survey,
              and closing.
            </p>
          </div>
        </div>
      </section>

      {/* Yacht Grid */}
      <section className="bg-[#F8F6F1] pb-24">
        <div className="container-luxury">
          {/* Filter placeholder */}
          <div className="flex items-center justify-between py-6 mb-8 border-b border-navy-200/40">
            <p className="font-inter text-sm text-navy-500">
              Showing <span className="text-navy-800 font-medium">{saleYachts.length}</span> yachts
            </p>
            <div className="flex items-center gap-3">
              <span className="font-inter text-xs text-navy-400 tracking-widest uppercase">
                Filter
              </span>
              {/* Filter UI placeholder */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleYachts.map((yacht, i) => (
              <YachtCard key={yacht.id} yacht={yacht} index={i} />
            ))}
          </div>

          {saleYachts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-inter text-navy-500">No yachts currently listed. Please contact us for off-market opportunities.</p>
            </div>
          )}
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
