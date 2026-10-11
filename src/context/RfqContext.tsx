'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/mockProducts';

interface RfqContextType {
  rfqItems: Product[];
  addToRfq: (product: Product) => void;
  removeFromRfq: (productId: string) => void;
  clearRfq: () => void;
  isRfqModalOpen: boolean;
  openRfqModal: (product?: Product) => void;
  closeRfqModal: () => void;
  activeProductForQuote: Product | null;
  notification: string | null;
  dismissNotification: () => void;
}

const RfqContext = createContext<RfqContextType | undefined>(undefined);

export function RfqProvider({ children }: { children: ReactNode }) {
  const [rfqItems, setRfqItems] = useState<Product[]>([]);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [activeProductForQuote, setActiveProductForQuote] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const addToRfq = (product: Product) => {
    setRfqItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        setNotification(`"${product.name}" is already in your RFQ list.`);
        setTimeout(() => setNotification(null), 3500);
        return prev;
      }
      setNotification(`Added "${product.name}" to RFQ list.`);
      setTimeout(() => setNotification(null), 3500);
      return [...prev, product];
    });
  };

  const removeFromRfq = (productId: string) => {
    setRfqItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearRfq = () => {
    setRfqItems([]);
  };

  const openRfqModal = (product?: Product) => {
    if (product) {
      setActiveProductForQuote(product);
      // Also ensure it's in the list
      setRfqItems(prev => {
        if (!prev.some(item => item.id === product.id)) {
          return [...prev, product];
        }
        return prev;
      });
    }
    setIsRfqModalOpen(true);
  };

  const closeRfqModal = () => {
    setIsRfqModalOpen(false);
    setActiveProductForQuote(null);
  };

  const dismissNotification = () => setNotification(null);

  return (
    <RfqContext.Provider
      value={{
        rfqItems,
        addToRfq,
        removeFromRfq,
        clearRfq,
        isRfqModalOpen,
        openRfqModal,
        closeRfqModal,
        activeProductForQuote,
        notification,
        dismissNotification,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error('useRfq must be used within an RfqProvider');
  }
  return context;
}
