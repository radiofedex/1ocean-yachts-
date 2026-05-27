import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { BrandCard } from '@/components/cards/BrandCard';
import { LeadSection } from '@/components/sections/LeadSection';
import { brands } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Exclusive Brands',
  description:
    'Official representation for Palmer Johnson Yachts and G-Tender — two legendary names in luxury yachting. Discover these exclusive marques through 1 Ocean Yachts.',
};

export default function ExclusiveBrandsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Exclusive Representation
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Our Signature Brands
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl">
            Authorised representatives of two of the most distinguished names in luxury yachting.
            Access these exclusive marques through our dedicated brand advisory team.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-navy-950 py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {brands.map((brand, i) => (
              <BrandCard key={brand.id} brand={brand} index={i} />
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
