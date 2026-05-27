'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface CTAButtonProps {
  variant?: Variant;
  size?: Size;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-navy-900 hover:bg-gold-400 font-inter font-medium tracking-wider uppercase text-sm border border-gold-500 hover:border-gold-400',
  secondary:
    'bg-navy-800 text-white border border-navy-700 hover:border-gold-500/50 font-inter font-medium tracking-wider uppercase text-sm',
  outline:
    'border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500 font-inter font-medium tracking-wider uppercase text-sm',
  ghost:
    'text-gold-400 hover:text-gold-300 font-inter font-medium tracking-wider uppercase text-sm',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-sm',
};

function cn(...inputs: (string | undefined | null | false)[]): string {
  return twMerge(clsx(inputs));
}

export function CTAButton({
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  children,
  className,
  disabled,
  type = 'button',
  external = false,
}: CTAButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
