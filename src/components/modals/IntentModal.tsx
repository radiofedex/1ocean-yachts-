'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { useTranslation } from '@/hooks/useTranslation';
import { BuyYachtForm } from './BuyYachtForm';
import { SellYachtForm } from './SellYachtForm';
import { CharterYachtForm } from './CharterYachtForm';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 10,
    transition: { duration: 0.25 },
  },
};

export function IntentModal() {
  const { modalType, closeModal } = useModal();
  const { t } = useTranslation();

  const isOpen = modalType !== null;

  const getTitle = () => {
    if (modalType === 'buy') return t.modals.buy.title;
    if (modalType === 'sell') return t.modals.sell.title;
    if (modalType === 'charter') return t.modals.charter.title;
    return '';
  };

  const getSubtitle = () => {
    if (modalType === 'buy') return t.modals.buy.subtitle;
    if (modalType === 'sell') return t.modals.sell.subtitle;
    if (modalType === 'charter') return t.modals.charter.subtitle;
    return '';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-navy-950/90 backdrop-blur-md"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          />

          {/* Modal Panel */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-900 border border-navy-700 shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-navy-900 border-b border-navy-800 px-8 py-6 flex items-start justify-between">
              <div>
                <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold-500 mb-1.5">
                  1 Ocean Yachts
                </p>
                <h2 className="font-cormorant text-2xl md:text-3xl text-white font-light">
                  {getTitle()}
                </h2>
                {getSubtitle() && (
                  <p className="font-inter text-sm text-silver-400 mt-1.5 leading-relaxed">
                    {getSubtitle()}
                  </p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="flex-shrink-0 ml-4 w-9 h-9 flex items-center justify-center border border-navy-700 text-silver-400 hover:text-white hover:border-gold-500/50 transition-all duration-200"
                aria-label={t.common.close}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Content */}
            <div className="px-8 py-8">
              <AnimatePresence mode="wait">
                {modalType === 'buy' && (
                  <motion.div
                    key="buy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <BuyYachtForm />
                  </motion.div>
                )}
                {modalType === 'sell' && (
                  <motion.div
                    key="sell"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SellYachtForm />
                  </motion.div>
                )}
                {modalType === 'charter' && (
                  <motion.div
                    key="charter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CharterYachtForm />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
