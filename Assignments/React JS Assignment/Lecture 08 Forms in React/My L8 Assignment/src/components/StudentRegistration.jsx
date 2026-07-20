import React, { useState } from 'react';

function StudentRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

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
    inputGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#475569'
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      fontSize: '0.95rem',
      color: '#334155',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    displayBox: {
      marginTop: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
    },
    displayTitle: {
      margin: '0 0 10px 0',
      fontSize: '0.95rem',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    text: {
      margin: '6px 0',
      fontSize: '0.95rem',
      color: '#334155'
    }
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 1: Student Registration Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Student Name</label>
          <input 
            type="text" 
            style={styles.input} 
            placeholder="Enter full name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input 
            type="email" 
            style={styles.input} 
            placeholder="student@example.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input 
            type="text" 
            style={styles.input} 
            placeholder="Enter mobile number"
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
          />
        </div>
      </form>

      <div style={styles.displayBox}>
        <h4 style={styles.displayTitle}>Live Information View</h4>
        <p style={styles.text}><strong>Name:</strong> {name || '—'}</p>
        <p style={styles.text}><strong>Email:</strong> {email || '—'}</p>
        <p style={styles.text}><strong>Mobile:</strong> {mobile || '—'}</p>
      </div>
    </div>
  );
}

export default StudentRegistration;