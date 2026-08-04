import React, { useState, useEffect } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 8: Mouse Position Tracker</h2>
      <p style={styles.coords}>X: {position.x}px | Y: {position.y}px</p>
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
  coords: {
    fontSize: '20px',
    fontFamily: 'monospace',
  },
};

export default MouseTracker;