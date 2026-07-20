import React, { useState } from 'react';

function PasswordValidation() {
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState(false);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    formLayout: { display: 'flex', gap: '10px' },
    input: { flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' },
    button: { padding: '10px 16px', borderRadius: '8px', border: 'none', fontWeight: '600', backgroundColor: '#2563eb', color: '#ffffff', cursor: 'pointer' },
    statusMsg: (ok) => ({ marginTop: '14px', fontSize: '0.9rem', fontWeight: '600', color: ok ? '#166534' : '#dc2626' })
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (password.length >= 8) {
      setMsg('✓ Security Clearance: Length verified (≥ 8 characters).');
      setStatus(true);
    } else {
      setMsg(`❌ Error: Insufficient length (${password.length}/8 characters).`);
      setStatus(false);
    }
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 8: Password Validation</h3>
      <form onSubmit={handleCheck} style={styles.formLayout}>
        <input type="password" value={password} style={styles.input} onChange={e => setPassword(e.target.value)} placeholder="Minimum 8 characters" />
        <button type="submit" style={styles.button}>Check</button>
      </form>
      {msg && <p style={styles.statusMsg(status)}>{msg}</p>}
    </div>
  );
}

export default PasswordValidation;