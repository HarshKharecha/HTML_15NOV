import React, { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', course: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    stepTitle: { fontSize: '0.95rem', color: '#2563eb', margin: '0 0 14px 0', fontWeight: '700', textTransform: 'uppercase' },
    inputGroup: { marginBottom: '12px' },
    label: { display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    btnRow: { display: 'flex', gap: '10px', marginTop: '16px' },
    btnPrimary: { flex: 1, padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', backgroundColor: '#2563eb', color: '#fff', cursor: 'pointer' },
    btnSecondary: { padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', color: '#475569', fontWeight: '600', cursor: 'pointer' }
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 18: Multi-Step Registration Form</h3>
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); if (!formData.course || !formData.city) return alert("Fill Step 2 parameters"); setSubmitted(true); }}>
          {step === 1 && (
            <div>
              <h4 style={styles.stepTitle}>Sequence 01: Identity Metadata</h4>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Legal Name</label>
                <input type="text" style={styles.input} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Communication Email</label>
                <input type="email" style={styles.input} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <button type="button" style={styles.btnPrimary} onClick={() => { if (!formData.name || !formData.email) return alert("Validate Step 1 content"); setStep(2); }}>Advance Sequence ➔</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h4 style={styles.stepTitle}>Sequence 02: Curriculum Matrix</h4>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Target Academic Course</label>
                <input type="text" style={styles.input} value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Operational Center City</label>
                <input type="text" style={styles.input} value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
              </div>
              <div style={styles.btnRow}>
                <button type="button" style={styles.btnSecondary} onClick={() => setStep(1)}>🡰 Retract</button>
                <button type="submit" style={styles.btnPrimary}>Execute Data Pipeline</button>
              </div>
            </div>
          )}
        </form>
      ) : (
        <div style={{background: '#d1e7dd', padding: '14px', borderRadius: '8px', color: '#0f5132'}}><p style={{margin:0, fontWeight:'600'}}>✓ Distributed Payload Consolidated: {formData.name} mapping successfully resolved for execution.</p></div>
      )}
    </div>
  );
}

export default MultiStepForm;