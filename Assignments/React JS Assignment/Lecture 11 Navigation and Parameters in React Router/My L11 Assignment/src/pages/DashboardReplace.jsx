import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardReplace() {
  const navigate = useNavigate();

  const styles = {
    pageWrapper: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '40px auto',
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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '16px'
    },
    heading: {
      color: '#0f172a',
      fontSize: '2rem',
      fontWeight: '800',
      margin: 0,
      lineHeight: '1.3'
    },
    logoutButton: {
      padding: '8px 16px',
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#dc2626',
      transition: 'background-color 0.2s ease'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    welcomeBanner: {
      backgroundColor: '#ecfdf5',
      border: '1px solid #a7f3d0',
      padding: '16px 20px',
      borderRadius: '12px',
      color: '#065f46',
      fontSize: '1.05rem',
      fontWeight: '600',
      margin: 0
    },
    infoText: {
      color: '#475569',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      margin: 0
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.headerSection}>
        <h2 style={styles.heading}>Dashboard</h2>
        <button 
          style={styles.logoutButton} 
          onClick={() => navigate('/more/loginreplace')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
        >
          Sign Out
        </button>
      </div>

      <div style={styles.contentContainer}>
        <p style={styles.welcomeBanner}>
          Welcome message: You have successfully logged in securely!
        </p>
        <p style={styles.infoText}>
          Because this session uses a replacement history stack, pressing your browser's back button will not loop you back to the login screen.
        </p>
      </div>
    </div>
  );
}

export default DashboardReplace;