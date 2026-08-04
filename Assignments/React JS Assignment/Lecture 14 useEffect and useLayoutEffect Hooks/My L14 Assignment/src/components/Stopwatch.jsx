import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    display: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      width: '190px',
      marginBottom: '15px',
    },
    controls: {
      display: 'flex',
      gap: '8px',
    },
    btnStart: { padding: '8px 12px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' },
    btnStop: { padding: '8px 12px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' },
    btnReset: { padding: '8px 12px', backgroundColor: '#2475e6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' },
    cencon: { margin: '0 auto', width: 0 }
  };

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
    <div style={styles.container}>
      <h3>Task 11: Stopwatch</h3>
      <div style={styles.display}><p style={styles.cencon}>{seconds}s</p></div>
      <div style={styles.controls}>
        <button style={styles.btnStart} onClick={() => setIsActive(true)}>Start</button>
        <button style={styles.btnStop} onClick={() => setIsActive(false)}>Stop</button>
        <button style={styles.btnReset} onClick={() => { setIsActive(false); setSeconds(0); }}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;