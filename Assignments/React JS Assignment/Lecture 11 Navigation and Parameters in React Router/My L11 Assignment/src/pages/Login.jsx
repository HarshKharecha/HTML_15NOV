import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [success, setSuccess] = useState(false);
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
      marginBottom: '8px'
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
    loginButton: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 18px',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
      transition: 'background-color 0.2s ease, transform 0.1s ease',
      marginTop: '8px'
    },
    successMessage: {
      color: '#059669',
      fontSize: '0.9rem',
      fontWeight: '600',
      backgroundColor: '#ecfdf5',
      border: '1px solid #a7f3d0',
      padding: '10px 14px',
      borderRadius: '8px',
      textAlign: 'center',
      margin: 0
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerSection}>
        <h2 style={styles.heading}>Welcome Back</h2>
        <p style={styles.subHeading}>Please enter your details to sign in.</p>
      </div>

      <form onSubmit={handleLogin} style={styles.form}>
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
          style={styles.loginButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Sign In
        </button>
      </form>

      {success && (
        <p style={styles.successMessage}>
          Login Successful! Redirecting...
        </p>
      )}
    </div>
  );
}

export default Login;