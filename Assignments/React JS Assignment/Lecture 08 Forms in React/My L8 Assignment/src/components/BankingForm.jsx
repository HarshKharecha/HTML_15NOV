import React, { useState } from 'react';

function BankingForm() {
  const [data, setData] = useState({ name: '', mobile: '', pan: '', type: 'Savings' });
  const [info, setInfo] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '12px' },
    label: { display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    select: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', backgroundColor: '#fff' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#0f172a', color: '#ffffff', marginTop: '6px' }
  };

  const handleOpenAccount = (e) => {
    e.preventDefault();
    if(!data.name || !data.mobile || !data.pan) return alert("System Fault: Field validation mismatch.");
    setInfo(data);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 14: Banking Account Opening</h3>
      <form onSubmit={handleOpenAccount}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Legal Entity Name</label>
          <input type="text" style={styles.input} onChange={e => setData({...data, name: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Registered Mobile Number</label>
          <input type="text" style={styles.input} onChange={e => setData({...data, mobile: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Permanent Account Identifier (PAN)</label>
          <input type="text" style={styles.input} onChange={e => setData({...data, pan: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Financial Instrument Type</label>
          <select style={styles.select} onChange={e => setData({...data, type: e.target.value})}>
            <option value="Savings">Savings Ledger</option>
            <option value="Current">Current Operating Account</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>Initialize Vault Creation</button>
      </form>
      {info && <p style={{background: '#e2e8f0', padding: '12px', borderRadius: '8px', fontSize: '0.9rem', marginTop: '14px'}}>🏦 Protocol Confirmed: Allocated [{info.type}] configuration for {info.name}.</p>}
    </div>
  );
}

export default BankingForm;