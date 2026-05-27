'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/data/services';
import { useTranslation } from '@/hooks/useTranslation';

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-navy-950 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,169,110,0.03),transparent)]" />

      <div className="container-luxury relative z-10">
        <div className="mb-16">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
            align="center"
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
