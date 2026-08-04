import React, { useState, useEffect } from 'react';

function LocalStorageCounter() {
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
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
      <h3>Task 10: Local Storage Counter</h3>
      <p>Persisted Count: <strong>{count}</strong></p>
      <button 
        style={{ padding: '8px 16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment & Persist
      </button>
    </div>
  );
}

export default LocalStorageCounter;