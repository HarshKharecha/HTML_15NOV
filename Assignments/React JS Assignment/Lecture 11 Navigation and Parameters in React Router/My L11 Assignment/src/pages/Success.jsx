import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '450px',
      margin: '80px auto',
      padding: '40px 32px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    },
    iconBadge: {
      width: '56px',
      height: '56px',
      backgroundColor: '#ecfdf5',
      color: '#059669',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    heading: {
      color: '#0f172a',
      fontSize: '1.75rem',
      fontWeight: '800',
      margin: 0
    },
    message: {
      color: '#475569',
      fontSize: '1rem',
      lineHeight: '1.5',
      margin: '0 0 16px 0'
    },
    homeButton: {
      backgroundColor: '#059669',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 24px',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(5, 150, 105, 0.2)',
      transition: 'background-color 0.2s ease'
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.iconBadge}>✓</div>
      <h2 style={styles.heading}>Success!</h2>
      <p style={styles.message}>Registration completed successfully! Your account is now active and ready to use.</p>
      <button 
        style={styles.homeButton} 
        onClick={() => navigate('/')}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
      >
        Go to Login
      </button>
    </div>
  );
}

export default Success;