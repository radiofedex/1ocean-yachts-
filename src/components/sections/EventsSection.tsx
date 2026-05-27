'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EventCard } from '@/components/cards/EventCard';
import { CTAButton } from '@/components/ui/CTAButton';
import { events } from '@/data/events';
import { useTranslation } from '@/hooks/useTranslation';

export function EventsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-navy-950 py-24 md:py-32 relative">
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute top-0 left-0 right-0" />

      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow={t.events.eyebrow}
            title={t.events.title}
            subtitle={t.events.subtitle}
            align="left"
            light
          />
          <div className="flex-shrink-0">
            <CTAButton variant="outline" href="/events" size="sm">
              {t.events.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </CTAButton>
          </div>
        </div>

        <div>
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
