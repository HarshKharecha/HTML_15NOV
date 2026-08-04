import React, { useState, useRef, useLayoutEffect } from 'react';

function ResponsiveCardWidth() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #2563eb',
      borderRadius: '12px',
      margin: '10px 0',
    },
    starus: {
      fontWeight: '600',
      color: '#16a34a',
      marginTop: '10px'
    }
  };

  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);

  // Task 16: Measure card width dynamically on resize using useLayoutEffect
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div ref={cardRef} style={styles.container}>
      <h3>Task 16: Responsive Card Width</h3>
      <p style={styles.starus}>Card Width: <strong>{cardWidth}px</strong></p>
    </div>
  );
}

export default ResponsiveCardWidth;