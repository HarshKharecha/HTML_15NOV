import React, { useState } from 'react';

function CollegeAdmission() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', course: '', address: '' });
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    gridRow: { display: 'flex', gap: '12px', marginBottom: '12px' },
    inputGroup: { flex: 1, display: 'flex', flexDirection: 'column' },
    label: { marginBottom: '4px', fontSize: '0.8rem', fontWeight: '600', color: '#475569' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box', width: '100%' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff', marginTop: '10px' },
    errorBox: { color: '#dc2626', fontSize: '0.85rem', fontWeight: '600', marginTop: '10px' },
    successCard: { marginTop: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '16px' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(value => value.trim() === '')) {
      setError('⚠️ Validation Intercepted: All system properties must be explicitly provided.');
      return;
    }
    setError('');
    setData(form);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 10: College Admission Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.gridRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Applicant Name</label>
            <input type="text" style={styles.input} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input type="email" style={styles.input} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
        </div>
        <div style={styles.gridRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Mobile Number</label>
            <input type="text" style={styles.input} onChange={e => setForm({...form, mobile: e.target.value})} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Target Course</label>
            <input type="text" style={styles.input} onChange={e => setForm({...form, course: e.target.value})} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
          <label style={styles.label}>Permanent Residency Address</label>
          <input type="text" style={styles.input} onChange={e => setForm({...form, address: e.target.value})} />
        </div>
        <button type="submit" style={styles.button}>Send Academic</button>
      </form>
      {error && <p style={styles.errorBox}>{error}</p>}
      {data && (
        <div style={styles.successCard}>
          <p style={{ margin: 0, color: '#166534', fontWeight: '600' }}>✓ Academic Dossier Formulated Successfully for {data.name} [{data.course}].</p>
        </div>
      )}
    </div>
  );
}

export default CollegeAdmission;