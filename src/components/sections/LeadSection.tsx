'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { useTranslation } from '@/hooks/useTranslation';

interface LeadOption {
  key: string;
  icon: React.ReactNode;
  modalType?: 'buy' | 'sell' | 'charter';
  region?: 'america' | 'europe';
  href?: string;
  title: string;
  description: string;
}

export function LeadSection() {
  const { openModal, setCharterRegion } = useModal();
  const { t } = useTranslation();

  function handleOption(option: LeadOption) {
    if (option.modalType) {
      if (option.region) {
        setCharterRegion(option.region);
      }
      openModal(option.modalType);
    }
  }

  const options: LeadOption[] = [
    {
      key: 'buy',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      modalType: 'buy',
      title: t.lead.options.buy.title,
      description: t.lead.options.buy.description,
    },
    {
      key: 'sell',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      modalType: 'sell',
      title: t.lead.options.sell.title,
      description: t.lead.options.sell.description,
    },
    {
      key: 'charter_america',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      modalType: 'charter',
      region: 'america',
      title: t.lead.options.charter_america.title,
      description: t.lead.options.charter_america.description,
    },
    {
      key: 'charter_europe',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      modalType: 'charter',
      region: 'europe',
      title: t.lead.options.charter_europe.title,
      description: t.lead.options.charter_europe.description,
    },
    {
      key: 'management',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      href: '/yacht-management',
      title: t.lead.options.management.title,
      description: t.lead.options.management.description,
    },
    {
      key: 'crew',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: '/crew-placement',
      title: t.lead.options.crew.title,
      description: t.lead.options.crew.description,
    },
  ];

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,169,110,0.04),transparent)]" />
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute top-0 left-0 right-0" />

      <div className="container-luxury relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            {t.lead.subtitle}
          </p>
          <div className="w-8 h-px bg-gold-500 mx-auto mb-8" />
          <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight">
            {t.lead.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t.lead.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </motion.div>

        {/* Options grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-700/30"
        >
          {options.map((option) => (
            <motion.div key={option.key} variants={fadeInUp}>
              {option.modalType ? (
                <button
                  onClick={() => handleOption(option)}
                  className="group w-full text-left p-8 md:p-10 bg-navy-900 hover:bg-navy-800/80 transition-all duration-300 border border-transparent hover:border-gold-500/20 h-full"
                >
                  <div className="w-10 h-10 border border-navy-700 group-hover:border-gold-500/40 flex items-center justify-center text-silver-500 group-hover:text-gold-400 transition-all duration-300 mb-6">
                    {option.icon}
                  </div>
                  <h3 className="font-cormorant text-2xl text-white font-light mb-2 group-hover:text-gold-100 transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="font-inter text-sm text-silver-400/60 leading-relaxed mb-5">
                    {option.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-500/50 group-hover:text-gold-400 transition-colors duration-300">
                    <span className="font-inter text-xs tracking-widest uppercase">Begin</span>
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              ) : (
                <a
                  href={option.href}
                  className="group w-full text-left p-8 md:p-10 bg-navy-900 hover:bg-navy-800/80 transition-all duration-300 border border-transparent hover:border-gold-500/20 h-full flex flex-col"
                >
                  <div className="w-10 h-10 border border-navy-700 group-hover:border-gold-500/40 flex items-center justify-center text-silver-500 group-hover:text-gold-400 transition-all duration-300 mb-6">
                    {option.icon}
                  </div>
                  <h3 className="font-cormorant text-2xl text-white font-light mb-2 group-hover:text-gold-100 transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="font-inter text-sm text-silver-400/60 leading-relaxed mb-5 flex-1">
                    {option.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-500/50 group-hover:text-gold-400 transition-colors duration-300">
                    <span className="font-inter text-xs tracking-widest uppercase">Learn More</span>
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
