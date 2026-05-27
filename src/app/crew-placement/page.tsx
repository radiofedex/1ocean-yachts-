import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';

export const metadata: Metadata = {
  title: 'Crew Placement',
  description:
    'Elite crew placement services for luxury yachts. 1 Ocean Yachts connects certified maritime professionals with exceptional vessels.',
};

const positions = [
  {
    title: 'Captains & Masters',
    description:
      'MCA-certified captains with extensive experience in superyacht operations, from coastal cruising to blue-water ocean passages.',
  },
  {
    title: 'Engineers',
    description:
      'Marine engineers at all certification levels, experienced with the latest propulsion systems, generators, and complex yacht systems.',
  },
  {
    title: 'Deck Officers & Bosuns',
    description:
      'Qualified deck officers and bosuns with experience on yachts of all sizes, from motor yachts to the largest sailing vessels.',
  },
  {
    title: 'Chief Steward/Stewardesses',
    description:
      'Highly trained interior professionals with hospitality backgrounds, STCW certification, and experience on five-star yachts.',
  },
  {
    title: 'Chefs',
    description:
      'Trained culinary professionals with yacht-specific experience, from Mediterranean cuisine to Asian fusion — matched to your guests\' preferences.',
  },
  {
    title: 'Deckhands & Junior Crew',
    description:
      'Vetted, enthusiastic junior crew with proper certification and references, ready to integrate seamlessly into your existing team.',
  },
];

export default function CrewPlacementPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Advisory Services
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Crew Placement
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl">
            Connecting elite vessels with certified, experienced maritime professionals. From
            captains to stewardesses, we match the right talent to your crew.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">Our Approach</p>
              <div className="w-8 h-px bg-gold-500 mb-6" />
              <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-5">
                Excellence in Every Position
              </h2>
              <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
                A yacht is only as exceptional as the people who operate it. Our crew placement
                service goes beyond matching CVs to vacancies — we take the time to understand
                the specific culture, style, and requirements of each vessel and owner.
              </p>
              <p className="font-inter text-sm text-navy-500 leading-relaxed">
                Every crew member we recommend has been personally interviewed, reference-checked,
                and verified for all required STCW and MCA certifications. We stand behind every
                placement we make.
              </p>
            </div>

            <div className="space-y-4">
              {['Personal interviews with all candidates', 'Full certification & reference verification', 'STCW and MCA compliance checks', 'Personality and culture matching', 'Ongoing placement support', 'Replacement guarantee'].map((item) => (
                <div key={item} className="flex items-center gap-4 p-5 bg-white border border-navy-100">
                  <div className="w-5 h-5 border border-gold-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-inter text-sm text-navy-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Positions */}
          <div className="max-w-2xl mb-12">
            <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-4">
              Positions We Place
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              We source and vet candidates for every position on board, from senior officers to
              junior crew.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-200/30">
            {positions.map((pos) => (
              <div key={pos.title} className="bg-[#F8F6F1] p-8">
                <div className="w-6 h-px bg-gold-500 mb-4" />
                <h3 className="font-cormorant text-xl text-navy-950 font-light mb-3">
                  {pos.title}
                </h3>
                <p className="font-inter text-sm text-navy-500 leading-relaxed">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
