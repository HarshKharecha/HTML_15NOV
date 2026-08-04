import React, { useState, useEffect } from 'react';

function WindowResize() {
  const [width, setWidth] = useState(window.innerWidth);

  // Task 6: Listen to window resize and cleanup
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
      <h3>Task 6: Window Resize Detector</h3>
      <p>Current Window Width: <strong>{width}px</strong></p>
    </div>
  );
}

export default WindowResize;