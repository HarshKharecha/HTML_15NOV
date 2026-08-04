import React, { useState, useEffect } from 'react';

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Task 7: Online/offline event listeners with cleanup
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
    <div style={{ padding: '20px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <h3>Task 7: Network Status</h3>
      <p style={{ fontWeight: '600', color: isOnline ? '#16a34a' : '#dc2626' }}>
        Status: {isOnline ? '🟢 Online' : '🔴 Offline'}
      </p>
    </div>
  );
}

export default NetworkStatus;