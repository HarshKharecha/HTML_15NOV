import React, { useState } from 'react';

function LibraryMembership() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Standard');
  const [done, setDone] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '14px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#047857', color: '#ffffff' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email) return alert('Data missing error context');
    setDone({ name, email, type });
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 17: Library Membership Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}> Full Name</label>
          <input type="text" style={styles.input} onChange={e => setName(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tier Membership Selection</label>
          <select style={{...styles.input, backgroundColor: '#fff'}} onChange={e => setType(e.target.value)}>
            <option value="Standard">Standard Tier Archive</option>
            <option value="Premium">Premium Access Tier</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>Issue Membership Token</button>
      </form>
      {done && <p style={{color: '#047857', marginTop: '14px', fontWeight: '600', fontSize: '0.9rem'}}>📚 Card Issued: Welcome, {done.name}! Profile tier configured: [{done.type}].</p>}
    </div>
  );
}

export default LibraryMembership;