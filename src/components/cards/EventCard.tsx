'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Event } from '@/types';
import { formatEventDate } from '@/data/events';

interface EventCardProps {
  event: Event;
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const date = new Date(event.date);
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group flex flex-col md:flex-row gap-6 py-8 border-b border-navy-800 last:border-0"
    >
      {/* Date Display */}
      <div className="flex-shrink-0 w-20 text-center md:text-left">
        <div className="inline-flex flex-col items-center border border-gold-500/20 group-hover:border-gold-500/50 transition-colors duration-300 p-3 min-w-[70px]">
          <span className="font-inter text-xs tracking-widest uppercase text-gold-400 mb-0.5">
            {month}
          </span>
          <span className="font-cormorant text-4xl text-white font-light leading-none">
            {day}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <h3 className="font-cormorant text-2xl text-white font-light group-hover:text-gold-100 transition-colors duration-300">
            {event.name}
          </h3>
          <span className="flex-shrink-0 font-inter text-xs text-silver-400 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {event.location}
          </span>
        </div>

        <p className="font-inter text-xs text-gold-400/60 tracking-wide mb-3">
          {formatEventDate(event.date, event.endDate)}
        </p>

        <p className="font-inter text-sm text-silver-400/70 leading-relaxed max-w-2xl">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}
