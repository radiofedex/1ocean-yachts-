import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { LeadSection } from '@/components/sections/LeadSection';

export const metadata: Metadata = {
  title: 'Yacht Management',
  description:
    'Professional yacht management services for owners worldwide. 1 Ocean Yachts provides comprehensive operations, maintenance, crew, and compliance management.',
};

const managementServices = [
  {
    title: 'Operations Management',
    description:
      'Day-to-day operational oversight, voyage planning, port logistics, and flag state compliance — all managed seamlessly by our team.',
  },
  {
    title: 'Technical Management',
    description:
      'Planned maintenance schedules, emergency repairs, refit management, and survey coordination to maintain your yacht in perfect condition.',
  },
  {
    title: 'Crew Management',
    description:
      'Recruitment, payroll, certification compliance, and performance management for your entire crew — handled with professionalism and discretion.',
  },
  {
    title: 'Financial Management',
    description:
      'Transparent budgeting, expense tracking, accounting, and financial reporting tailored to your ownership structure and requirements.',
  },
  {
    title: 'Charter Management',
    description:
      'For owners who wish to offset ownership costs, we manage all aspects of charter operations — from marketing to guest services.',
  },
  {
    title: 'Insurance & Compliance',
    description:
      'Comprehensive insurance brokerage, MCA/MLC compliance, and regulatory management to protect your asset and ensure full legal compliance.',
  },
];

export default function YachtManagementPage() {
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
            Yacht Management
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl">
            Comprehensive management solutions for yacht owners worldwide. We handle every detail so
            you can focus on enjoying your vessel.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="max-w-2xl mb-16">
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
              Management Services
            </p>
            <div className="w-8 h-px bg-gold-500 mb-6" />
            <h2 className="font-cormorant text-4xl md:text-5xl text-navy-950 font-light mb-5">
              Full-Service Yacht Management
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              Owning a yacht should be a pleasure, not a burden. Our management team takes complete
              responsibility for your vessel, ensuring it is always ready to sail and maintained to
              the highest standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-200/30">
            {managementServices.map((service, i) => (
              <div key={service.title} className="bg-[#F8F6F1] p-10">
                <div className="w-6 h-px bg-gold-500 mb-5" />
                <h3 className="font-cormorant text-2xl text-navy-950 font-light mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-navy-500 leading-relaxed">
                  {service.description}
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
