'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={clsx(
        'flex flex-col',
        isCenter && 'items-center text-center',
        className
      )}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className={clsx(
            'font-inter text-xs tracking-[0.3em] uppercase mb-3',
            light ? 'text-gold-400' : 'text-gold-500'
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      {eyebrow && (
        <motion.div
          variants={fadeInUp}
          className={clsx('w-8 h-px bg-gold-500 mb-6', isCenter && 'mx-auto')}
        />
      )}
      <motion.h2
        variants={fadeInUp}
        className={clsx(
          'font-cormorant font-light leading-[1.1] text-balance',
          light ? 'text-white' : 'text-navy-950',
          'text-4xl md:text-5xl lg:text-6xl'
        )}
      >
        {title.split('\\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < title.split('\\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={clsx(
            'font-inter font-light text-base md:text-lg mt-5 leading-relaxed max-w-2xl',
            light ? 'text-silver-400' : 'text-navy-500',
            isCenter && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
