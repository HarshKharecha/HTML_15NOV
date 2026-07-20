import React, { useState } from 'react';

function EventRegistration() {
  const [reg, setReg] = useState({ name: '', email: '', mobile: '', event: '' });
  const [view, setView] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '12px' },
    label: { display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#6d28d9', color: '#ffffff' }
  };

  const handleReg = (e) => {
    e.preventDefault();
    if(Object.values(reg).some(v => !v)) return alert("Required data fields incomplete");
    setView(reg);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 16: Event Registration</h3>
      <form onSubmit={handleReg}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Participant Name</label>
          <input type="text" style={styles.input} onChange={e => setReg({...reg, name: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Communications Email</label>
          <input type="email" style={styles.input} onChange={e => setReg({...reg, email: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input type="text" style={styles.input} onChange={e => setReg({...reg, mobile: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Seminar/Summit Index Name</label>
          <input type="text" style={styles.input} onChange={e => setReg({...reg, event: e.target.value})} />
        </div>
        <button type="submit" style={styles.button}>Secure Summit Pass</button>
      </form>
      {view && <p style={{color: '#6d28d9', marginTop: '14px', fontWeight: '600', fontSize: '0.9rem'}}>🎟️ Access Event: Confirmed registry entry for {view.name} at [{view.event}].</p>}
    </div>
  );
}

export default EventRegistration;