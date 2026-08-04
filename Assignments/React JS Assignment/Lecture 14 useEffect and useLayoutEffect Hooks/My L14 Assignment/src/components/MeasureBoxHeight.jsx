import React, { useState, useRef, useLayoutEffect } from 'react';

function MeasureBoxHeight() {
  const [height, setHeight] = useState(0);
  const boxRef = useRef(null);

  // Task 15: Measure height before browser paints to prevent flickering
  useLayoutEffect(() => {
    if (boxRef.current) {
      setHeight(boxRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
      <h3>Task 15: Measure Box Height</h3>
      <div ref={boxRef} style={{ padding: '30px', backgroundColor: '#e2e8f0', borderRadius: '8px' }}>
        Dynamic Content Box
      </div>
      <p style={{ marginTop: '10px' }}>Measured Box Height: <strong>{height}px</strong></p>
    </div>
  );
}

export default MeasureBoxHeight;