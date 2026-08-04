import React, { useState, useEffect } from 'react';

function TitleCounter() {
  const [count, setCount] = useState(0);

  // Task 2: Update document title on count change
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <h3>Task 2: Title Counter</h3>
      <p>Current Count: <strong>{count}</strong></p>
      <button 
        style={{ padding: '8px 16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default TitleCounter;