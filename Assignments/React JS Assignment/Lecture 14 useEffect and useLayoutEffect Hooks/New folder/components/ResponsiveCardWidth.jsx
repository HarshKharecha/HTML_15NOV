import React, { useState, useRef, useLayoutEffect } from 'react';

function ResponsiveCardWidth() {
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 16: Responsive Card Width</h2>
      <div ref={cardRef} style={styles.card}>
        <h3>Card Container</h3>
        <p>Width calculated before rendering: <strong>{cardWidth}px</strong></p>
      </div>
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
  card: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#6c757d',
    color: '#fff',
    borderRadius: '6px',
    boxSizing: 'border-box',
  },
};

export default ResponsiveCardWidth;