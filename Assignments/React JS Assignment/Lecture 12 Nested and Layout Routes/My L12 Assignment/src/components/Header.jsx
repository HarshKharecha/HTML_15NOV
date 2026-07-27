import React, { useState, useEffect } from 'react';

function Header() {
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
      // margin: '20px 20px 0 20px',
      // borderRadius: '12px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'rgb(37, 99, 235)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    dateTimeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '0.95rem',
      color: '#64748b',
      fontWeight: '500',
      backgroundColor: '#f8fafc',
      padding: '8px 16px',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    },
    divider: {
      color: '#cbd5e1',
      fontWeight: '300'
    },
    timeHighlight: {
      color: '#2563eb',
      fontWeight: '600'
    }
  };

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });

  return (
    <div style={styles.headerWrapper}>
      <div style={styles.logo}>Improve Productivity</div>
      <div style={styles.dateTimeContainer}>
        <span>📅 {formattedDate}</span>
        <span style={styles.divider}>|</span>
        <span style={styles.timeHighlight}>⏰ {formattedTime}</span>
      </div>
    </div>
  );
}

export default Header;