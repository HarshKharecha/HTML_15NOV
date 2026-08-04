import React, { useState, useEffect } from 'react';

function DocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Runs on initial mount and whenever `count` changes

  return (
    <div style={styles.container}>
      <h2>Task 2: Browser Title Counter</h2>
      <p style={styles.text}>Current Count: {count}</p>
      <button style={styles.button} onClick={() => setCount(prev => prev + 1)}>
        Increment Count
      </button>
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
    fontWeight: 'bold',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default DocumentTitle;