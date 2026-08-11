import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Smart Form & Modal Control System</h1>
      <p style={styles.subtitle}>Lecture 16: forwardRef & useImperativeHandle Practice</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#3b82f6',
    color: '#f8fafc',
    padding: '1.5rem 2rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(59, 131, 246, 0.1)',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '700',
  },
  subtitle: {
    margin: '0.5rem 0 0',
    fontSize: '0.95rem',
    color: '#f0f0f0',
  },
};

export default Header;