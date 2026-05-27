import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about 1 Ocean Yachts — a Miami-based luxury yacht advisory firm with global reach. Our story, values, and commitment to excellence.',
};

const values = [
  {
    title: 'Discretion',
    description: 'Every client relationship is built on complete confidentiality. We protect your privacy at every stage, from initial enquiry through to closing.',
  },
  {
    title: 'Expertise',
    description: 'Our team combines decades of industry experience with deep market knowledge across the Americas and Mediterranean, ensuring you always have the best possible advice.',
  },
  {
    title: 'Personalization',
    description: 'We never offer generic solutions. Every client receives our undivided attention and a service tailored precisely to their needs and vision.',
  },
  {
    title: 'Integrity',
    description: 'Our reputation is built on honest advice, transparent dealings, and outcomes that genuinely serve our clients\' best interests — not our own.',
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden min-h-[65vh] flex items-end">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10 pb-12">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Our Story
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-7xl text-white font-light leading-tight mb-6 max-w-4xl">
            Born on the Water, Built for Excellence
          </h1>
          <p className="font-inter text-base text-silver-300/70 font-light leading-relaxed max-w-xl">
            A boutique luxury yachting advisory firm with deep Miami roots and a truly global
            network. We serve our clients with the attention and discretion that defines true luxury.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
                Who We Are
              </p>
              <div className="w-8 h-px bg-gold-500 mb-6" />
              <h2 className="font-cormorant text-4xl md:text-5xl text-navy-950 font-light mb-6">
                Miami-Based, Globally Connected
              </h2>
              <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
                1 Ocean Yachts was founded with a singular conviction: that clients who demand
                excellence in every aspect of their lives deserve the same from their yacht
                advisory firm. Headquartered at the heart of Miami's world-class yachting
                community, we are ideally positioned to serve both the Americas and European
                markets.
              </p>
              <p className="font-inter text-sm text-navy-500 leading-relaxed mb-4">
                Our boutique model ensures that every client receives personal attention from our
                senior advisors — not an assistant or a junior broker. We take on a limited number
                of clients at any one time precisely because we believe that service cannot be
                scaled without compromise.
              </p>
              <p className="font-inter text-sm text-navy-500 leading-relaxed">
                With over 15 years of combined experience and relationships spanning the world's
                leading shipyards, brokerages, and charter agencies, we have the network to access
                opportunities that simply are not available to others.
              </p>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
                <span className="text-silver-400/20 text-xs font-inter tracking-widest uppercase text-center px-8">
                  {/* ASSET: /public/assets/about/team.jpg */}
                  Team Image
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/15 pointer-events-none" />
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
              Our Values
            </p>
            <div className="w-8 h-px bg-gold-500 mb-10" />
            <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-12">
              What Defines Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-200/30">
              {values.map((value) => (
                <div key={value.title} className="bg-[#F8F6F1] p-10">
                  <h3 className="font-cormorant text-2xl text-navy-950 font-light mb-3">
                    {value.title}
                  </h3>
                  <div className="w-6 h-px bg-gold-500 mb-4" />
                  <p className="font-inter text-sm text-navy-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="text-center max-w-3xl mx-auto py-16 border-t border-b border-navy-200/40">
            <p className="font-cormorant text-3xl md:text-4xl text-navy-950 font-light italic leading-relaxed">
              "Our mission is to be the most trusted luxury yacht advisory firm in the Americas —
              a firm that clients return to not because they have to, but because they choose to."
            </p>
          </div>

          {/* Contact info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-inter text-xs tracking-widest uppercase text-gold-600 mb-2">Headquarters</p>
              <p className="font-inter text-sm text-navy-600">{contactInfo.address}</p>
            </div>
            <div>
              <p className="font-inter text-xs tracking-widest uppercase text-gold-600 mb-2">Phone</p>
              <a href={`tel:${contactInfo.phone}`} className="font-inter text-sm text-navy-600 hover:text-gold-600 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div>
              <p className="font-inter text-xs tracking-widest uppercase text-gold-600 mb-2">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="font-inter text-sm text-navy-600 hover:text-gold-600 transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
