import React from 'react';

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#1e293b',
    color: '#64748b',
    fontSize: '0.875rem'
  }
};

function Footer() {
  return (
    <footer style={styles.footer}>
      Troopy Stack © 2026 Smart Productivity Dashboard
    </footer>
  );
}

export default Footer;