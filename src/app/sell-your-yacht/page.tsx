'use client';

import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';
import { CTAButton } from '@/components/ui/CTAButton';
import { useModal } from '@/context/ModalContext';
import { motion } from 'framer-motion';

const processSteps = [
  {
    number: '01',
    title: 'Confidential Valuation',
    description:
      'Our brokers conduct a thorough assessment of your vessel using current market data, recent comparable sales, and technical condition to establish an accurate and competitive valuation.',
  },
  {
    number: '02',
    title: 'Strategic Marketing',
    description:
      'We create a bespoke marketing campaign tailored to your yacht, combining targeted outreach to our global buyer database with presence at premier yacht shows and strategic media placement.',
  },
  {
    number: '03',
    title: 'Qualified Buyer Management',
    description:
      'We rigorously qualify all interested parties before any viewing, ensuring your time and privacy are respected throughout the sales process.',
  },
  {
    number: '04',
    title: 'Negotiation & Closing',
    description:
      'Our experienced team manages all aspects of negotiation, legal documentation, survey coordination, and the final transfer — ensuring a seamless, confidential closing.',
  },
];

export default function SellYourYachtPage() {
  const { openModal } = useModal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Yacht Sales
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Sell Your Yacht
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl mb-10">
            Expert representation, global reach, and complete discretion for owners who demand the
            best possible outcome for their vessel.
          </p>
          <CTAButton
            variant="primary"
            size="lg"
            onClick={() => openModal('sell')}
          >
            Request a Confidential Valuation
          </CTAButton>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="max-w-2xl mb-16">
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">Our Process</p>
            <div className="w-8 h-px bg-gold-500 mb-6" />
            <h2 className="font-cormorant text-4xl md:text-5xl text-navy-950 font-light mb-5">
              From Listing to Closing
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              Selling a yacht requires expertise, market intelligence, and an established network of
              qualified buyers. At 1 Ocean Yachts, we guide you through every stage with precision
              and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy-200/40">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-10 border-r border-navy-200/40 even:border-r-0 border-b border-navy-200/40 last:border-b-0 [&:nth-last-child(2)]:border-b-0"
              >
                <div className="font-cormorant text-5xl text-gold-400/30 font-light mb-4">
                  {step.number}
                </div>
                <h3 className="font-cormorant text-2xl text-navy-950 font-light mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-navy-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Confidentiality note */}
          <div className="mt-12 p-8 bg-navy-950 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-inter text-xs tracking-widest uppercase text-gold-400">
                Complete Discretion Guaranteed
              </span>
            </div>
            <p className="font-inter text-sm text-silver-400/70 max-w-lg mx-auto mb-6">
              All enquiries and negotiations are handled with the utmost confidentiality.
              Your privacy and the privacy of your assets are paramount to us.
            </p>
            <CTAButton
              variant="primary"
              onClick={() => openModal('sell')}
            >
              Begin the Process
            </CTAButton>
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
