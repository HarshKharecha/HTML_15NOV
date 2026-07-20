import React, { useState } from 'react';

function LoginValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '14px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    errLabel: { color: '#dc2626', fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff', marginTop: '6px' },
    alertSuccess: { marginTop: '16px', padding: '12px', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '8px', fontWeight: '600', textAlign: 'center' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email.includes('@')) validationErrors.email = 'Missing character: Email requires standard symbol structure (@).';
    if (password.length < 8) validationErrors.password = 'Length rule configuration: Minimum limit requires 8 counts.';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess('');
    } else {
      setErrors({});
      setSuccess('🎉 Gatekeeper state cleared: Session established securely.');
    }
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 9: Login Validation</h3>
      <form onSubmit={handleLogin}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Account Email</label>
          <input type="text" style={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <span style={styles.errLabel}>{errors.email}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Access Key (Password)</label>
          <input type="password" style={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
          {errors.password && <span style={styles.errLabel}>{errors.password}</span>}
        </div>
        <button type="submit" style={styles.button}>Secure Authorization</button>
      </form>
      {success && <div style={styles.alertSuccess}>{success}</div>}
    </div>
  );
}

export default LoginValidation;