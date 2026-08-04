import React, { useState, useLayoutEffect } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    // Ensures width sync occurs synchronously prior to display paint
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 10, 100));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div style={styles.container}>
      <h2>Task 18: Flickering-Free Progress Bar</h2>
      <div style={styles.track}>
        <div style={{ ...styles.fill, width: `${progress}%` }} />
      </div>
      <p style={styles.label}>{progress}% Completed</p>
      <button style={styles.button} onClick={() => setProgress(0)}>Reset Progress</button>
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
  track: {
    width: '100%',
    height: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: '#28a745',
    transition: 'width 0.2s ease-in-out',
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: '6px 12px',
    cursor: 'pointer',
  },
};

export default ProgressBar;