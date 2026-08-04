import React, { useState, useEffect } from 'react';

function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    x: {
      fontWeight: '600',
      color: '#16a34a'
    },
    y: {
      fontWeight: '600',
      color: '#dc2626'
    }
  }

  // Task 8: Mousemove tracker with listener cleanup
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 8: Mouse Tracker</h3>
      <p><span style={styles.x}>X: <strong>{coords.x}</strong></span> | <span style={styles.y}>Y: <strong>{coords.y}</strong></span></p>
    </div>
  );
}

export default MouseTracker;