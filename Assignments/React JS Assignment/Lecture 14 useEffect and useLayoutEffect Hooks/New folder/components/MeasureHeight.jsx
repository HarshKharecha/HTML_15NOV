import React, { useState, useRef, useLayoutEffect } from 'react';

function MeasureHeight() {
  const [height, setHeight] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    // Reads DOM dimensions synchronously before browser repaint to prevent visual jump
    if (boxRef.current) {
      setHeight(boxRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 15: Measure Box Height</h2>
      <div ref={boxRef} style={styles.box}>
        <p>Dynamic Content Line 1</p>
        <p>Dynamic Content Line 2</p>
        <p>Dynamic Content Line 3</p>
      </div>
      <p style={styles.result}>Measured Height: <strong>{height}px</strong></p>
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
  box: {
    padding: '15px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
  },
  result: {
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default MeasureHeight;