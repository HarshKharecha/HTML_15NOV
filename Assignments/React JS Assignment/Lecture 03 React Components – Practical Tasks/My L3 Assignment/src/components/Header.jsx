import React from 'react';

function Header() {
  const styles = {
    header: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#ffffff',
      padding: '40px 20px',
      textAlign: 'center',
      borderBottom: '4px solid #2563eb',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      margin: '0 0 10px 0',
      letterSpacing: '-0.05em',
    },
    tagline: {
      fontSize: '1.1rem',
      color: '#94a3b8',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    }
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Genius Build</h1>
      <p style={styles.tagline}><em>Why wait for tomorrow? Build today, right now. Rule tomorrow.</em></p>
    </header>
  );
}

export default Header;