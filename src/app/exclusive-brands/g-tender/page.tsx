import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';
import { getBrandById } from '@/data/brands';

export const metadata: Metadata = {
  title: 'G-Tender | Luxury Superyacht Tenders',
  description:
    'G-Tender — premium luxury tenders engineered as the ultimate superyacht companion. Discover the G-Tender collection through 1 Ocean Yachts.',
};

const brand = getBrandById('g-tender')!;

const models = [
  {
    name: 'G-Tender GT7',
    length: '7m',
    description: 'The perfect companion for superyachts up to 40m. Lightweight, fast, and designed to impress at every marina.',
  },
  {
    name: 'G-Tender GT9',
    length: '9m',
    description: 'Our flagship tender, engineered for superyachts that demand the best. Superior performance, unmatched comfort, and stunning aesthetics.',
  },
  {
    name: 'Bespoke Programs',
    length: 'Custom',
    description: 'Fully customised tender programs designed to match your mothership\'s aesthetic and operational requirements.',
  },
];

export default function GTenderPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden min-h-[65vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 to-navy-950/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-700/40" />
        {/* IMAGE PLACEHOLDER: /public/assets/brands/g-tender-hero.jpg */}
        <div className="container-luxury relative z-10 pb-12">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Exclusive Representation
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-7xl text-white font-light leading-tight mb-4">
            {brand.name}
          </h1>
          <p className="font-cormorant text-2xl text-gold-300/80 italic font-light mb-8">
            {brand.tagline}
          </p>
          <p className="font-inter text-base text-silver-300/70 font-light leading-relaxed max-w-xl">
            {brand.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">About G-Tender</p>
              <div className="w-8 h-px bg-gold-500 mb-6" />
              <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-5">
                The Ultimate Superyacht Companion
              </h2>
              <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
                Every superyacht deserves a tender that is worthy of her. G-Tender was conceived
                with this principle at its core — creating luxury tender boats that match the
                quality, aesthetics, and performance expectations of the world's finest yachts.
              </p>
              <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
                Crafted from the finest materials and finished to superyacht standards, G-Tender
                boats combine exceptional performance — with speeds up to 45 knots — with interior
                comfort and aesthetic sophistication that makes every arrival an event.
              </p>
              <p className="font-inter text-sm text-navy-500 leading-relaxed">
                As exclusive representatives, 1 Ocean Yachts provides personalized access to the
                G-Tender collection and can guide clients through the customization process to
                create their perfect vessel.
              </p>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
              <span className="text-silver-400/20 text-xs font-inter tracking-widest uppercase text-center px-8">
                {/* ASSET: /public/assets/brands/g-tender-feature.jpg */}
                G-Tender Feature Image
              </span>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-navy-200/40 mb-20">
            {[
              { title: 'Performance', value: 'Up to 45 knots', desc: 'Sport performance in a luxury package' },
              { title: 'Construction', value: 'Carbon Composite', desc: 'Lightweight, strong and beautiful' },
              { title: 'Customization', value: 'Bespoke', desc: 'Tailored to match your mothership' },
            ].map((feat, i) => (
              <div key={feat.title} className={`p-10 text-center ${i < 2 ? 'border-r border-navy-200/40' : ''}`}>
                <p className="font-inter text-xs tracking-widest uppercase text-gold-600 mb-2">{feat.title}</p>
                <p className="font-cormorant text-3xl text-navy-950 font-light mb-2">{feat.value}</p>
                <p className="font-inter text-sm text-navy-500">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Models */}
          <div>
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">Models</p>
            <div className="w-8 h-px bg-gold-500 mb-8" />
            <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-10">
              The G-Tender Collection
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-200/30">
              {models.map((model) => (
                <div key={model.name} className="bg-[#F8F6F1] p-10">
                  <p className="font-inter text-xs tracking-widest uppercase text-gold-600 mb-2">
                    {model.length}
                  </p>
                  <h3 className="font-cormorant text-2xl text-navy-950 font-light mb-3">
                    {model.name}
                  </h3>
                  <p className="font-inter text-sm text-navy-500 leading-relaxed">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
