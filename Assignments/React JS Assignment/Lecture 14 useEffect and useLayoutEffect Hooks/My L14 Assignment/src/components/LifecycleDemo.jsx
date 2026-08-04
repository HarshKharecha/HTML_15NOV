import React, { useState, useEffect } from 'react';

function LifecycleDemo() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
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

  const [count, setCount] = useState(0);

  // Task 19: Demonstrate mount, update, and cleanup
  useEffect(() => {
    console.log('🔵 Component Mounted');

    return () => {
      console.log('🔴 Cleanup on Unmount');
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log(`🟡 Component Updated: Count is ${count}`);
    }
  }, [count]);

  return (
    <div style={styles.container}>
      <h3>Task 19: Lifecycle Demo</h3>
      <p>Check console logs for Lifecycle messages.</p>
      <button style={styles.button} onClick={() => setCount(c => c + 1)}>
        Trigger Update ({count})
      </button>
    </div>
  );
}

export default LifecycleDemo;