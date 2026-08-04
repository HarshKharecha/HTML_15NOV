import React, { useEffect } from 'react';

function MountLogger() {
  useEffect(() => {
    // Task 1: Execute effect once on mount
    console.log('Task 1 Component Mounted');
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
      <h3>Task 1: Mount Logger</h3>
      <p>Check your browser console to see "Component Mounted".</p>
    </div>
  );
}

export default MountLogger;