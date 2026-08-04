import React, { useState, useEffect } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Lifecycle: Component Mounted");

    return () => {
      console.log("Lifecycle: Component Unmounted (Cleanup)");
    };
  }, []); // Mount and Unmount only

  useEffect(() => {
    if (count > 0) {
      console.log(`Lifecycle: Component Updated. New count: ${count}`);
    }
  }, [count]); // Update lifecycle stage

  return (
    <div style={styles.container}>
      <h2>Task 19: Lifecycle Demonstration</h2>
      <p>Count: {count}</p>
      <button style={styles.button} onClick={() => setCount(prev => prev + 1)}>
        Trigger Update
      </button>
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
  button: {
    padding: '8px 16px',
    backgroundColor: '#6f42c1',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LifecycleDemo;