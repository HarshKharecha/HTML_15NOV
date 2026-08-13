import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; {new Date().getFullYear()} Smart Form System - by Harsh S Kharecha</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: 'auto',
    borderTop: '1px solid #3b83f61a',
  },
  text: {
    margin: 0,
    fontSize: '0.875rem',
  },
};

export default Footer;