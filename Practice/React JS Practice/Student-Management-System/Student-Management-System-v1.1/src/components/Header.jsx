import React, { useState, useEffect } from 'react';

function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    headerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      fontFamily: 'sans-serif',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    logo: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#2563eb',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      userSelect: 'none'
    },
    dateTimeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '0.9rem',
      color: '#475569',
      fontWeight: '600',
      backgroundColor: '#f8fafc',
      padding: '8px 16px',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
      transition: 'all 0.2s ease'
    },
    divider: {
      color: '#cbd5e1',
      fontWeight: '300'
    },
    timeHighlight: {
      color: '#2563eb',
      fontWeight: '700',
      fontFamily: 'monospace',
      fontSize: '0.95rem'
    }
  };

  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const formattedTime = dateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div style={styles.headerWrapper}>
      <div style={styles.logo}>
        <span>🎓</span> EduDashboard
      </div>

      <div
        style={styles.dateTimeContainer}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = '#cbd5e1';
          e.currentTarget.style.backgroundColor = '#f1f5f9';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = '#e2e8f0';
          e.currentTarget.style.backgroundColor = '#f8fafc';
        }}
      >
        <span>📅 {formattedDate}</span>
        <span style={styles.divider}>|</span>
        <span style={styles.timeHighlight}>⏰ {formattedTime}</span>
      </div>
    </div>
  );
}

export default Header;