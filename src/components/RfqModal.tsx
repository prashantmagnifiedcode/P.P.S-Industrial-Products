'use client';

import React, { useState } from 'react';
import styles from './RfqModal.module.css';
import { 
  X, 
  Trash2, 
  CheckCircle, 
  Send, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  FileUp, 
  ShieldCheck, 
  Sparkles,
  Layers
} from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function RfqModal() {
  const { 
    isRfqModalOpen, 
    closeRfqModal, 
    rfqItems, 
    removeFromRfq, 
    clearRfq,
    activeProductForQuote 
  } = useRfq();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Gurugram / NCR',
    spindleType: 'VMC / Machining Center',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqRefNumber, setRfqRefNumber] = useState('');

  if (!isRfqModalOpen) return null;

  const handleQuantityChange = (id: string, delta: number) => {
    const current = quantities[id] || 10;
    const updated = Math.max(1, current + delta);
    setQuantities(prev => ({ ...prev, [id]: updated }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `RFQ-PPS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqRefNumber(generatedRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    clearRfq();
    closeRfqModal();
  };

  return (
    <div className={styles.overlay} onClick={closeRfqModal}>
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleWrap}>
            <div className={styles.modalBadge}>
              <Sparkles size={14} />
              <span>Direct OEM Quotation</span>
            </div>
            <h2 className={styles.modalTitle}>Request for Quotation (RFQ)</h2>
            <p className={styles.modalSubtitle}>
              P.P.S Industrial Products • Gurugram Sales Desk & Technical Consultation
            </p>
          </div>
          <button 
            type="button" 
            className={styles.closeBtn} 
            onClick={closeRfqModal}
            aria-label="Close RFQ dialog"
          >
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className={styles.successState}>
            <div className={styles.successIconBox}>
              <CheckCircle size={48} className={styles.successCheck} />
            </div>
            <h3 className={styles.successTitle}>Quotation Request Dispatched!</h3>
            <p className={styles.successDesc}>
              Thank you, <strong>{formData.contactPerson || 'Valued Client'}</strong>. Our tooling application engineers in Sector 5 Gurugram have received your specifications.
            </p>

            <div className={styles.refBox}>
              <span className={styles.refLabel}>Quotation Reference ID</span>
              <span className={styles.refValue}>{rfqRefNumber}</span>
              <span className={styles.refNote}>Official tax invoice quote & batch delivery timeline will be sent to <strong>{formData.email || 'your email'}</strong> within 2 business hours.</span>
            </div>

            <div className={styles.successActions}>
              <button 
                type="button" 
                className={styles.primaryDoneBtn}
                onClick={handleReset}
              >
                Done & Return to Catalog
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            {/* Left Column: Selected Tooling Items */}
            <div className={styles.itemsColumn}>
              <div className={styles.sectionHeading}>
                <Layers size={16} className={styles.sectionIcon} />
                <span>Selected Tooling & Inserts ({rfqItems.length})</span>
              </div>

              {rfqItems.length === 0 ? (
                <div className={styles.emptyItems}>
                  <p>No specific parts selected yet.</p>
                  <span>You can submit a general tooling quotation inquiry below or add inserts from the catalog.</span>
                </div>
              ) : (
                <div className={styles.itemsList}>
                  {rfqItems.map((item) => {
                    const qty = quantities[item.id] || 10;
                    return (
                      <div key={item.id} className={styles.itemRow}>
                        <div className={styles.itemMain}>
                          <span className={styles.itemSku}>{item.sku}</span>
                          <span className={styles.itemName}>{item.name}</span>
                          <span className={styles.itemSpec}>
                            {item.isoCode} • {item.grade}
                          </span>
                        </div>

                        <div className={styles.itemControls}>
                          <div className={styles.qtyBox}>
                            <button
                              type="button"
                              className={styles.qtyBtn}
                              onClick={() => handleQuantityChange(item.id, -5)}
                            >
                              -
                            </button>
                            <span className={styles.qtyNumber}>{qty} pcs</span>
                            <button
                              type="button"
                              className={styles.qtyBtn}
                              onClick={() => handleQuantityChange(item.id, 5)}
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            className={styles.deleteBtn}
                            onClick={() => removeFromRfq(item.id)}
                            title="Remove from quotation"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className={styles.dispatchAssurance}>
                <ShieldCheck size={18} className={styles.shieldIcon} />
                <div>
                  <span className={styles.assuranceTitle}>100% Genuine Certified Carbide</span>
                  <p className={styles.assuranceText}>
                    All inserts & toolholders undergo strict optical comparator check for runout and edge hardness.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Buyer & Technical Details */}
            <div className={styles.detailsColumn}>
              <div className={styles.sectionHeading}>
                <Building2 size={16} className={styles.sectionIcon} />
                <span>Procurement & Machine Details</span>
              </div>

              <div className={styles.fieldsGrid}>
                <div className={styles.fieldGroup}>
                  <label>Company / Workshop Name *</label>
                  <div className={styles.inputIconWrap}>
                    <Building2 size={15} className={styles.fieldIcon} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Precision Engineering Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Contact Person Name *</label>
                  <div className={styles.inputIconWrap}>
                    <User size={15} className={styles.fieldIcon} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Mobile Number (For Instant WhatsApp Quote) *</label>
                  <div className={styles.inputIconWrap}>
                    <Phone size={15} className={styles.fieldIcon} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9811X XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Official Email Address *</label>
                  <div className={styles.inputIconWrap}>
                    <Mail size={15} className={styles.fieldIcon} />
                    <input
                      type="email"
                      required
                      placeholder="purchase@apexprecision.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Delivery Industrial Hub</label>
                  <div className={styles.inputIconWrap}>
                    <MapPin size={15} className={styles.fieldIcon} />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                      <option value="Pan India (All States)">Pan India (All Industrial Hubs)</option>
                      <option value="Faridabad Industrial Corridor">Faridabad Industrial Corridor</option>
                      <option value="Delhi NCR / Okhla / Mayapuri">Delhi NCR / Okhla / Mayapuri</option>
                      <option value="Pune / Chakan / Bhosari">Pune / Chakan / Bhosari</option>
                      <option value="Bangalore / Peenya">Bangalore / Peenya</option>
                      <option value="Chennai / Sriperumbudur">Chennai / Sriperumbudur</option>
                      <option value="Other Pan-India Location">Other Pan-India Location</option>
                    </select>
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Machine / Spindle Type</label>
                  <select
                    value={formData.spindleType}
                    onChange={(e) => setFormData({ ...formData, spindleType: e.target.value })}
                    className={styles.simpleSelect}
                  >
                    <option value="VMC (BT40 / BT50 Spindle)">VMC (BT40 / BT50 Spindle)</option>
                    <option value="CNC Turning Center (BMT / VDI Turret)">CNC Turning Center (BMT / VDI Turret)</option>
                    <option value="Swiss Type Automatic Lathe">Swiss Type Automatic Lathe</option>
                    <option value="Surface / Cylindrical Grinding">Surface / Cylindrical Grinding</option>
                    <option value="Conventional Toolroom Machinery">Conventional Toolroom Machinery</option>
                  </select>
                </div>
              </div>

              <div className={styles.fieldGroupFull}>
                <label>Target Material, Workpiece Hardness & Special Notes</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Machining EN8 / SS304 / Die Steel 55 HRC. Looking for 50 boxes of TNMG inserts and BT40 collet chucks with test certificate..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              {/* Submit CTA */}
              <button type="submit" className={styles.submitBtn}>
                <Send size={16} />
                <span>Submit Quotation Request to P.P.S Sales Team</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
