'use client';

import React from 'react';
import styles from './Toast.module.css';
import { CheckCircle2, X } from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function Toast() {
  const { notification, dismissNotification, openRfqModal } = useRfq();

  if (!notification) return null;

  return (
    <div className={styles.toast}>
      <div className={styles.iconWrap}>
        <CheckCircle2 size={18} />
      </div>
      <div className={styles.messageWrap}>
        <p className={styles.message}>{notification}</p>
        <button 
          type="button" 
          className={styles.viewQuoteLink}
          onClick={() => openRfqModal()}
        >
          View RFQ List →
        </button>
      </div>
      <button 
        type="button" 
        className={styles.closeBtn} 
        onClick={dismissNotification}
        aria-label="Dismiss toast"
      >
        <X size={15} />
      </button>
    </div>
  );
}
