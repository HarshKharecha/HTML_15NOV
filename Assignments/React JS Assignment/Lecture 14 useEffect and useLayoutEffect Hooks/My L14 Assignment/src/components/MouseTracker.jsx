import React, { useState, useEffect } from 'react';

function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Task 8: Mousemove tracker with listener cleanup
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
      <h3>Task 8: Mouse Tracker</h3>
      <p>X: <strong>{coords.x}</strong> | Y: <strong>{coords.y}</strong></p>
    </div>
  );
}

export default MouseTracker;