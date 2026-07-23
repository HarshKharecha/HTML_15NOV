import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const styles = {
    footerContainer: {
      backgroundColor: '#ffffff',
      color: '#64748b',
      fontFamily: 'sans-serif',
      padding: '20px 24px',
      textAlign: 'center',
      borderTop: '1px solid #e2e8f0',
      marginTop: '40px',
      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.02)',
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    text: {
      fontSize: '0.9rem',
      margin: 0,
      color: '#475569',
    },
    linksContainer: {
      display: 'flex',
      gap: '16px',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'color 0.2s ease',
    }
  };

  return (
    <>
      <div style={styles.footerContainer}>
        <div style={styles.topRow}>
          <p style={styles.text}>
            © {currentYear} <strong style={{ color: '#0f172a' }}>EduDashboard</strong>. All rights reserved.
          </p>
          <div style={styles.linksContainer}>
            <a href="#privacy" style={styles.link}>Privacy Policy</a>
            <a href="#terms" style={styles.link}>Terms of Service</a>
            <a href="#support" style={styles.link}>Support</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;