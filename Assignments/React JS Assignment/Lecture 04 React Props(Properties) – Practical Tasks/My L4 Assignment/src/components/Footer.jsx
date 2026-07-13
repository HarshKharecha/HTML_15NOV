import React from 'react';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#0f172a',
      color: '#94a3b8',
      padding: '30px 20px',
      marginTop: '60px',
      textAlign: 'center',
      fontSize: '0.9rem',
      borderTop: '1px solid #1e293b'
    },
    copy: {
      margin: '0 0 10px 0',
      color: '#f8fafc',
      fontWeight: '500'
    },
    contact: {
      margin: 0,
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.copy}>&copy; 2026 Genius Build. All rights reserved.</p>
      <p style={styles.contact}>Contact: support@GeniusBuild.com | +1 (555) 0199</p>
    </footer>
  );
}

export default Footer;