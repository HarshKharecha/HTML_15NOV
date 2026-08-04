import React, { useState, useEffect } from 'react';

function WindowResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 6: Window Resize Detector</h2>
      <p style={styles.text}>Current Window Width: <span>{windowWidth}px</span></p>
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
  text: {
    fontSize: '18px',
    fontWeight: '500',
  },
};

export default WindowResize;