import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

function Dashboard() {
  // 1. Digital Clock State
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 2. User Data State
  const [users, setUsers] = useState([]);

  // 3. Network Status State
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // 4. Window Width State
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 5. Card Measurement State & Ref
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);

  // 6. Local Storage Theme Preference State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('dash_theme') || 'light';
  });

  // Effect A: Live Digital Clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Effect B: Fetch Users
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 4)))
      .catch(err => console.error(err));
  }, []);

  // Effect C: Network Status Listener
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  // Effect D: Window Width Listener & Document Title Update
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    document.title = `Dashboard (${isOnline ? 'Online' : 'Offline'})`;

    return () => window.removeEventListener('resize', handleResize);
  }, [isOnline]);

  // Effect E: Local Storage Sync for Theme
  useEffect(() => {
    localStorage.setItem('dash_theme', theme);
  }, [theme]);

  // LayoutEffect: Measure Card Width Synchronously
  useLayoutEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.getBoundingClientRect().width);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const isDark = theme === 'dark';

  const styles = {
    container: {
      fontFamily: 'system-ui, sans-serif',
      margin: '20px',
      padding: '24px',
      backgroundColor: isDark ? '#0f172a' : '#f8fafc',
      color: isDark ? '#f8fafc' : '#0f172a',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s ease'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '12px',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '8px 16px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Lecture 14: Combined Dashboard</h2>
        <button 
          style={styles.button} 
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          Toggle {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div style={styles.grid}>
        {/* Clock & Status */}
        <div style={styles.card}>
          <h3>System Status</h3>
          <p>⏰ Time: <strong>{time}</strong></p>
          <p>Connection: <strong style={{ color: isOnline ? '#16a34a' : '#dc2626' }}>{isOnline ? 'Online' : 'Offline'}</strong></p>
          <p>Viewport Width: <strong>{windowWidth}px</strong></p>
        </div>

        {/* Card Width Measurement via useLayoutEffect */}
        <div ref={cardRef} style={styles.card}>
          <h3>useLayoutEffect Measurement</h3>
          <p>Measured Dashboard Card Width:</p>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb' }}>{cardWidth}px</p>
        </div>

        {/* User Data List */}
        <div style={{ ...styles.card, gridColumn: '1 / -1' }}>
          <h3>Fetched User Directory</h3>
          {users.length === 0 ? <p>Fetching users...</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {users.map(user => (
                <div key={user.id} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
                  <strong>{user.name}</strong>
                  <p style={{ fontSize: '0.85rem', margin: '4px 0 0 0', color: isDark ? '#94a3b8' : '#64748b' }}>{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;