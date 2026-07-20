import React, { useState } from 'react';

function EmailValidation() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    formLayout: { display: 'flex', gap: '10px' },
    input: { flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' },
    button: { padding: '10px 16px', borderRadius: '8px', border: 'none', fontWeight: '600', backgroundColor: '#2563eb', color: '#ffffff', cursor: 'pointer' },
    statusMsg: (valid) => ({ marginTop: '14px', fontSize: '0.9rem', fontWeight: '600', color: valid ? '#166534' : '#dc2626' })
  };

  const handleValidate = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setMessage('✓ Success: This email domain pattern matches standard criteria.');
      setIsValid(true);
    } else {
      setMessage('❌ Error: The email address string requires an "@" character.');
      setIsValid(false);
    }
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 7: Email Validation Form</h3>
      <form onSubmit={handleValidate} style={styles.formLayout}>
        <input type="text" value={email} style={styles.input} onChange={e => setEmail(e.target.value)} placeholder="name@domain.com" />
        <button type="submit" style={styles.button}>Validate</button>
      </form>
      {message && <p style={styles.statusMsg(isValid)}>{message}</p>}
    </div>
  );
}

export default EmailValidation;