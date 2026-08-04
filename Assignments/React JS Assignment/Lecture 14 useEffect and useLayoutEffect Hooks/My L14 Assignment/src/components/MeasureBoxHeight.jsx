import React, { useState, useRef, useLayoutEffect } from 'react';

function MeasureBoxHeight() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    contain: {
      padding: '30px',
      backgroundColor: '#e2e8f0',
      borderRadius: '8px'
    },
    starus: {
      fontWeight: '600',
      color: '#16a34a',
      marginTop: '10px'
    }
  };

  const [height, setHeight] = useState(0);
  const boxRef = useRef(null);

  // Task 15: Measure height before browser paints to prevent flickering
  useLayoutEffect(() => {
    if (boxRef.current) {
      setHeight(boxRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 15: Measure Box Height</h3>
      <div ref={boxRef} style={styles.contain}>
        Dynamic Content Box
      </div>
      <p style={styles.starus}>Measured Box Height: <strong>{height}px</strong></p>
    </div>
  );
}

export default MeasureBoxHeight;