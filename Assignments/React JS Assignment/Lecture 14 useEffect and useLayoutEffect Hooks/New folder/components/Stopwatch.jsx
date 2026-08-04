import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  return (
    <div style={styles.container}>
      <h2>Task 11: Stopwatch</h2>
      <div style={styles.display}>{seconds}s</div>
      <div style={styles.controls}>
        <button style={styles.btnStart} onClick={() => setIsActive(true)}>Start</button>
        <button style={styles.btnStop} onClick={() => setIsActive(false)}>Stop</button>
        <button style={styles.btnReset} onClick={() => { setIsActive(false); setSeconds(0); }}>Reset</button>
      </div>
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
  display: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  btnStart: { padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  btnStop: { padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  btnReset: { padding: '8px 16px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' },
};

export default Stopwatch;