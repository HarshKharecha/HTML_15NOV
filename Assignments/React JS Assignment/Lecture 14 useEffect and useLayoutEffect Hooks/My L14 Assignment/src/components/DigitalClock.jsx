import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    times: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2563eb'
    }
  }

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Task 3: Digital clock with setInterval and cleanup
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 3: Digital Clock</h3>
      <p style={styles.times}>⏰ {time}</p>
    </div>
  );
}

export default DigitalClock;