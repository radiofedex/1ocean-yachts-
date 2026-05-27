'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ModalType, CharterRegion } from '@/types';

interface ModalContextValue {
  modalType: ModalType;
  charterRegion: CharterRegion;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  setCharterRegion: (region: CharterRegion) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [charterRegion, setCharterRegionState] = useState<CharterRegion>(null);

  const openModal = useCallback((type: ModalType) => {
    setModalType(type);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
    setCharterRegionState(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, []);

  const setCharterRegion = useCallback((region: CharterRegion) => {
    setCharterRegionState(region);
  }, []);

  return (
    <ModalContext.Provider
      value={{ modalType, charterRegion, openModal, closeModal, setCharterRegion }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used inside ModalProvider');
  return ctx;
}
