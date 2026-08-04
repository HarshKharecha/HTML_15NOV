import React, { useState, useEffect } from 'react';

function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 7: Connection Status</h2>
      <div style={isOnline ? styles.online : styles.offline}>
        Status: {isOnline ? "Online" : "Offline"}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px 0',
  },
  online: {
    color: '#155724',
    backgroundColor: '#d4edda',
    padding: '10px',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  offline: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    padding: '10px',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
};

export default OnlineStatus;