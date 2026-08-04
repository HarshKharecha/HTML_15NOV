import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

function Dashboard() {
  // States
  const [users, setUsers] = useState([]);
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardWidth, setCardWidth] = useState(0);
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('dashboard_theme') || 'light';
  });

  const cardRef = useRef(null);

  // Effect 1: API Fetching
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=4')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  // Effect 2: Digital Clock Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Effect 3: Browser Title Sync
  useEffect(() => {
    document.title = `Dashboard (${theme.toUpperCase()})`;
  }, [theme]);

  // Effect 4: Online/Offline Network Monitoring
  useEffect(() => {
    const setOnline = () => setIsOnline(true);
    const setOffline = () => setIsOnline(false);

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  // Effect 5: Local Storage Theme Handler
  useEffect(() => {
    localStorage.setItem('dashboard_theme', theme);
  }, [theme]);

  // Effect 6: Window Resize Tracker
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // LayoutEffect: DOM Card Measurement Synchronously
  useLayoutEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [windowWidth]);

  const currentStyles = theme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <div style={{ ...styles.dashboard, ...currentStyles }}>
      <header style={styles.header}>
        <h1>React Combined Dashboard</h1>
        <button
          style={styles.themeBtn}
          onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
        >
          Toggle Theme ({theme})
        </button>
      </header>

      <div style={styles.grid}>
        {/* Widget 1: System Info */}
        <div style={styles.card}>
          <h3>System Monitor</h3>
          <p>Time: <strong>{clock}</strong></p>
          <p>Status: <span style={{ color: isOnline ? 'green' : 'red' }}>{isOnline ? 'Online' : 'Offline'}</span></p>
          <p>Viewport: <strong>{windowWidth}px</strong></p>
        </div>

        {/* Widget 2: Measured Card via useLayoutEffect */}
        <div ref={cardRef} style={styles.card}>
          <h3>Card Dimension Tracker</h3>
          <p>Measured Card Width: <strong>{cardWidth}px</strong></p>
          <small>Calculated synchronously using <code>useLayoutEffect</code>.</small>
        </div>

        {/* Widget 3: API Users */}
        <div style={{ ...styles.card, gridColumn: '1 / -1' }}>
          <h3>API Loaded Users</h3>
          {users.length === 0 ? (
            <p>Fetching users...</p>
          ) : (
            <ul style={styles.userList}>
              {users.map(u => (
                <li key={u.id} style={styles.userCard}>
                  <strong>{u.name}</strong> - {u.company.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    padding: '24px',
    borderRadius: '12px',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease',
  },
  lightContainer: {
    backgroundColor: '#f8f9fa',
    color: '#212529',
    border: '1px solid #dee2e6',
  },
  darkContainer: {
    backgroundColor: '#212529',
    color: '#f8f9fa',
    border: '1px solid #495057',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  themeBtn: {
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#0d6efd',
    color: '#fff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    border: '1px solid rgba(150, 150, 150, 0.2)',
  },
  userList: {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
  },
  userCard: {
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: 'rgba(100, 100, 100, 0.15)',
  },
};

export default Dashboard;