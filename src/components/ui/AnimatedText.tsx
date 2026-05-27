'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'words' | 'chars';
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const charVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  type = 'words',
}: AnimatedTextProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: type === 'words' ? 0.06 : 0.03,
      },
    },
  };

  if (type === 'chars') {
    const chars = text.split('');
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={charVariants}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  const words = text.split(' ');
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
