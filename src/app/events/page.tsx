import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { EventCard } from '@/components/cards/EventCard';
import { LeadSection } from '@/components/sections/LeadSection';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Find 1 Ocean Yachts at the world\'s premier yacht shows and events — Cannes Yachting Festival, Monaco Yacht Show, Fort Lauderdale Boat Show, and more.',
};

export default function EventsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Global Presence
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Find Us Around the World
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl">
            1 Ocean Yachts attends the premier events of the global yachting calendar. Connect
            with our team at the world's most prestigious yacht shows.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="max-w-2xl mb-16">
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
              2025 Calendar
            </p>
            <div className="w-8 h-px bg-gold-500 mb-6" />
            <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-5">
              Upcoming Events
            </h2>
            <p className="font-inter text-sm text-navy-500 leading-relaxed">
              Whether you are looking to buy, sell, or charter, our team is available for private
              meetings at all major yacht shows. Contact us to arrange a confidential consultation.
            </p>
          </div>

          <div className="max-w-4xl">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          {/* Meeting request */}
          <div className="mt-16 p-12 bg-navy-950 max-w-3xl">
            <h3 className="font-cormorant text-3xl text-white font-light mb-3">
              Request a Private Meeting
            </h3>
            <p className="font-inter text-sm text-silver-400/70 leading-relaxed mb-6">
              Attending any of these events? Contact us in advance to arrange a confidential meeting
              with our team. We can meet at the show, on board a vessel, or at your preferred location.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-3.5 font-inter text-sm font-medium tracking-wider uppercase hover:bg-gold-400 transition-colors"
            >
              Arrange a Meeting
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <LeadSection />
    </Layout>
  );
}
