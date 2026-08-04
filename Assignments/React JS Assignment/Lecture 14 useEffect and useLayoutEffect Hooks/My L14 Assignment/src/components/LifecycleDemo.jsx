import React, { useState, useEffect } from 'react';

function LifecycleDemo() {
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
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
      <h3>Task 19: Lifecycle Demo</h3>
      <p>Check console logs for Lifecycle messages.</p>
      <button style={{ padding: '8px 12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px' }} onClick={() => setCount(c => c + 1)}>
        Trigger Update ({count})
      </button>
    </div>
  );
}

export default LifecycleDemo;