import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Task 11: Stopwatch interval control
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <h3>Task 11: Stopwatch</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{seconds}s</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{ padding: '8px 12px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px' }} onClick={() => setIsActive(true)}>Start</button>
        <button style={{ padding: '8px 12px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px' }} onClick={() => setIsActive(false)}>Stop</button>
        <button style={{ padding: '8px 12px', backgroundColor: '#64748b', color: '#fff', border: 'none', borderRadius: '6px' }} onClick={() => { setIsActive(false); setSeconds(0); }}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;