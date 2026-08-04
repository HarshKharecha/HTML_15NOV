import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Task 3: Digital clock with setInterval and cleanup
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <h3>Task 3: Digital Clock</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>⏰ {time}</p>
    </div>
  );
}

export default DigitalClock;