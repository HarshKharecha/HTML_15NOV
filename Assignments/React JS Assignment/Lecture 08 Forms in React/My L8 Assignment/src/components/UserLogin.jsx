import React, { useState } from 'react';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const styles = {
    mainContainer: { 
      padding: '24px', 
      border: '1px solid #e2e8f0', 
      borderRadius: '12px',
      margin: '20px',
      backgroundColor: '#f8fafc', 
      fontFamily: 'sans-serif',
      maxWidth: '500px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    heading: { 
      color: '#0f172a', 
      borderBottom: '2px solid #e2e8f0', 
      paddingBottom: '12px', 
      margin: '0 0 20px 0', 
      fontSize: '1.3rem',
      fontWeight: '700'
    },
    inputGroup: { marginBottom: '16px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none' },
    button: {
      width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem',
      cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff', transition: 'all 0.2s', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
    },
    resultBox: { marginTop: '20px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '16px' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ email, password });
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 2: User Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input type="email" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input type="password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Sign In
        </button>
      </form>

      {submittedData && (
        <div style={styles.resultBox}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#1e40af' }}>✓ Authentication Payload Dispatched</p>
          <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#1e3a8a' }}><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserLogin;