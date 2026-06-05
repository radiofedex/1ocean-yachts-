'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
  showPDFButton?: boolean;
  index?: number;
}

export function DestinationCard({
  destination,
  showPDFButton = false,
  index = 0,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden h-[520px] md:h-[600px]"
    >
      {/* Image / Placeholder */}
      {/* IMAGE PLACEHOLDER: Replace with next/image pointing to /public/assets/destinations/{destination.id}.jpg */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-silver-400/10 text-xs font-inter tracking-widest uppercase">
            {/* ASSET: /public/assets/destinations/{destination.id}.jpg */}
            {destination.name}
          </span>
        </div>
      </div>

      {/* Hover zoom effect overlay */}
      <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-all duration-700" />

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        {/* Region label */}
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400 mb-3">
          {destination.region === 'europe' ? 'Mediterranean' : 'The Americas'}
        </p>

        <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light mb-4 leading-tight">
          {destination.name}
        </h2>

        <p className="font-inter text-sm text-silver-300/80 leading-relaxed mb-5 max-w-sm">
          {destination.description}
        </p>

        {/* Destinations list */}
        <div className="flex flex-wrap gap-2 mb-6">
          {destination.destinations.map((d) => (
            <span
              key={d}
              className="font-inter text-xs text-silver-400/70 border border-navy-600/60 px-2.5 py-1"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={destination.href}
            className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-3 font-inter text-xs font-medium tracking-wider uppercase hover:bg-gold-400 transition-colors duration-200 w-fit"
          >
            Explore Charters
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          
          {showPDFButton && (
            <a
              href="/assets/pdf/europe-charter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold-500/50 text-gold-400 px-6 py-3 font-inter text-xs font-medium tracking-wider uppercase hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-200 w-fit"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Brochure
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
