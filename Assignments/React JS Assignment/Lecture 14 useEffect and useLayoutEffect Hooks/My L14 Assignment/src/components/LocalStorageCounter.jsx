import React, { useState, useEffect } from 'react';

function LocalStorageCounter() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#2563eb',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }
  }

  // Task 10: Load initial count from LocalStorage
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('ls_counter');
    return saved !== null ? Number(saved) : 0;
  });

  // Update LocalStorage on count change
  useEffect(() => {
    localStorage.setItem('ls_counter', count.toString());
  }, [count]);

  return (
    <div style={styles.container}>
      <h3>Task 10: Local Storage Counter</h3>
      <p>Persisted Count: <strong>{count}</strong></p>
      <button
        style={styles.button}
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment & Persist
      </button>
    </div>
  );
}

export default LocalStorageCounter;