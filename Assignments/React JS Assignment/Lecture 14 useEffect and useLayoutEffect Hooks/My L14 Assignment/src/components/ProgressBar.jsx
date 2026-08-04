import React, { useState, useLayoutEffect } from 'react';

function ProgressBar() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
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
      backgroundColor: '#3892f8',
      transition: 'width 0.5s ease-in-out',
    },
    label: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#019637',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#2563eb',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }
  };

  const [progress, setProgress] = useState(0);

  // Task 18: Dynamic width adjustment prior to paint
  useLayoutEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 10, 100));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div style={styles.container}>
      <h3>Task 18: Animated Progress Bar</h3>
      <div style={styles.track}>
        <div style={{ ...styles.fill, width: `${progress}%` }} />
      </div>
      <p style={styles.label}>Progress: {progress}% Completed</p>
      <button style={styles.button} onClick={() => setProgress(0)}>Reset Progress</button>
    </div>
  );
}

export default ProgressBar;