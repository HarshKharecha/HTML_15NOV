import React, { useState, useEffect } from 'react';

function WindowResize() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    }
  }

  const [width, setWidth] = useState(window.innerWidth);

  // Task 6: Listen to window resize and cleanup
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 6: Window Resize Detector</h3>
      <p>Current Window Width: <strong>{width}px</strong></p>
    </div>
  );
}

export default WindowResize;