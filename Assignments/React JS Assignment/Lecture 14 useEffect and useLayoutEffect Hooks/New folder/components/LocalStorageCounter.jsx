import React, { useState, useEffect } from 'react';

function LocalStorageCounter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('counterValue');
    return saved !== null ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('counterValue', count);
  }, [count]);

  return (
    <div style={styles.container}>
      <h2>Task 10: Local Storage Counter</h2>
      <p style={styles.countText}>Stored Value: {count}</p>
      <button style={styles.button} onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
      <button style={{ ...styles.button, backgroundColor: '#dc3545' }} onClick={() => setCount(0)}>
        Reset
      </button>
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
  countText: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  button: {
    padding: '8px 16px',
    marginRight: '10px',
    cursor: 'pointer',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default LocalStorageCounter;