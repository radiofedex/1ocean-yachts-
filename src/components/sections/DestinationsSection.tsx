'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { destinations } from '@/data/destinations';
import { useTranslation } from '@/hooks/useTranslation';

export function DestinationsSection() {
  const { t } = useTranslation();
  const america = destinations.find((d) => d.region === 'america')!;
  const europe = destinations.find((d) => d.region === 'europe')!;

  return (
    <section className="bg-navy-950 py-24 md:py-32 relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mb-24" />

      <div className="container-luxury">
        <div className="mb-16">
          <SectionHeading
            eyebrow={t.destinations.eyebrow}
            title={t.destinations.title}
            subtitle={t.destinations.subtitle}
            align="center"
            light
          />
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <DestinationCard destination={america} showPDFButton={false} index={0} />
          <DestinationCard destination={europe} showPDFButton={true} index={1} />
        </div>
      </div>
    </section>
  );
}
