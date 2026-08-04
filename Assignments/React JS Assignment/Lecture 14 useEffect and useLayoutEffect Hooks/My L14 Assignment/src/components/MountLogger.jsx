import React, { useEffect } from 'react';

function MountLogger() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    }
  }

  useEffect(() => {
    // Task 1: Execute effect once on mount
    console.log('Task 1 Component Mounted');
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 1: Mount Logger</h3>
      <p>Check your browser console to see "Component Mounted".</p>
    </div>
  );
}

export default MountLogger;