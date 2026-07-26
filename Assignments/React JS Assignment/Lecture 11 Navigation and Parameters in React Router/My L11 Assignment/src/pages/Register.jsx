import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '400px',
      margin: '60px auto',
      padding: '32px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    headerSection: {
      textAlign: 'center',
      marginBottom: '4px'
    },
    heading: {
      color: '#0f172a',
      fontSize: '1.75rem',
      fontWeight: '700',
      margin: '0 0 8px 0'
    },
    subHeading: {
      color: '#64748b',
      fontSize: '0.95rem',
      margin: 0
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    label: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#334155'
    },
    input: {
      padding: '10px 14px',
      fontSize: '0.95rem',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      outline: 'none',
      transition: 'border-color 0.2s ease',
      color: '#0f172a'
    },
    submitButton: {
      backgroundColor: '#059669',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 18px',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(5, 150, 105, 0.2)',
      transition: 'background-color 0.2s ease',
      marginTop: '8px'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerSection}>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.subHeading}>Sign up to get started with your account.</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            placeholder="johndoe"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            placeholder="name@example.com"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            style={styles.input}
            required
          />
        </div>

        <button
          type="submit"
          style={styles.submitButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;