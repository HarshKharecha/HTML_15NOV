import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function clears interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 3: Digital Clock</h2>
      <div style={styles.clockDisplay}>{time}</div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px 0',
    textAlign: 'center',
  },
  clockDisplay: {
    fontSize: '32px',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default DigitalClock;