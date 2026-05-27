import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';
import { getBrandById } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Palmer Johnson Yachts',
  description:
    'Palmer Johnson — American yacht building heritage since 1918. Discover Sport Yachts and custom superyachts through our exclusive representation.',
};

const brand = getBrandById('palmer-johnson')!;

const models = [
  {
    name: 'Sport Yacht 48',
    length: '48m',
    description: 'The iconic Sport Yacht design that revolutionized the superyacht industry. Aggressive lines, exceptional performance, and breathtaking interior volume.',
  },
  {
    name: 'Sport Yacht 62',
    length: '62m',
    description: 'The flagship Sport Yacht. With her dramatic superstructure and carbon fiber construction, she represents the ultimate expression of Palmer Johnson\'s design philosophy.',
  },
  {
    name: 'Custom Programs',
    length: 'From 30m+',
    description: 'Fully bespoke yacht programs developed in close collaboration with clients and leading naval architects. Your vision, realized to the highest standard.',
  },
];

export default function PalmerJohnsonPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden min-h-[65vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 to-navy-950/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-700/40" />
        {/* IMAGE PLACEHOLDER: /public/assets/brands/palmer-johnson-hero.jpg */}
        <div className="container-luxury relative z-10 pb-12">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Exclusive Representation
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <p className="font-inter text-xs text-silver-400 tracking-widest uppercase mb-3">
            Est. {brand.founded}
          </p>
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

      {/* Heritage */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* IMAGE PLACEHOLDER */}
            <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
              <span className="text-silver-400/20 text-xs font-inter tracking-widest uppercase text-center px-8">
                {/* ASSET: /public/assets/brands/palmer-johnson-heritage.jpg */}
                Palmer Johnson Heritage Image
              </span>
            </div>

            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">Heritage</p>
              <div className="w-8 h-px bg-gold-500 mb-6" />
              <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-5">
                Over a Century of American Yacht Building
              </h2>
              <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
                Founded in Sturgeon Bay, Wisconsin in 1918, Palmer Johnson has been building
                exceptional yachts for over a century. From wooden sailboats to the groundbreaking
                all-composite Sport Yacht line, the company has continually pushed the boundaries of
                what is possible in yacht construction.
              </p>
              <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
                The Sport Yacht series, introduced in the early 2000s, brought a new aesthetic
                language to large yachts — combining aggressive, aerodynamic superstructures with
                exceptional interior volume and performance that was unmatched in their class.
              </p>
              <p className="font-inter text-sm text-navy-500 leading-relaxed">
                As exclusive representatives, 1 Ocean Yachts is uniquely positioned to facilitate
                the acquisition of existing Palmer Johnson vessels and to guide new clients through
                the bespoke construction process.
              </p>
            </div>
          </div>

          {/* Models */}
          <div className="mb-16">
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">Models</p>
            <div className="w-8 h-px bg-gold-500 mb-8" />
            <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-10">
              Select Programs
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
