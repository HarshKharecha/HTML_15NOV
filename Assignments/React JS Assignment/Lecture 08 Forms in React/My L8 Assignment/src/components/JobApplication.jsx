import React, { useState } from 'react';

function JobApplication() {
  const [app, setApp] = useState({ name: '', email: '', experience: '', skills: '' });
  const [summary, setSummary] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '12px' },
    label: { display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff' }
  };

  const handleApply = (e) => {
    e.preventDefault();
    if(!app.name || !app.email || !app.experience || !app.skills) return alert('Input processing failed.');
    setSummary(app);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 13: Job Application Form</h3>
      <form onSubmit={handleApply}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Applicant Full Name</label>
          <input type="text" style={styles.input} onChange={e => setApp({...app, name: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} onChange={e => setApp({...app, email: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Total Experience (Years)</label>
          <input type="text" style={styles.input} onChange={e => setApp({...app, experience: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Core Skillsets</label>
          <input type="text" style={styles.input} placeholder="React, Node, TypeScript..." onChange={e => setApp({...app, skills: e.target.value})} />
        </div>
        <button type="submit" style={styles.button}>Dispatch Application</button>
      </form>
      {summary && <div style={{marginTop: '16px', background: '#f1f5f9', padding: '12px', borderRadius: '8px'}}><p style={{margin: 0, fontSize: '0.9rem'}}>💼 Candidate <strong>{summary.name}</strong> queued with specialization in [{summary.skills}].</p></div>}
    </div>
  );
}

export default JobApplication;