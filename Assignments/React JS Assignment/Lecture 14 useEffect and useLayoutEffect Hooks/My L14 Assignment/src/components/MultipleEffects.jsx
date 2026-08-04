import React, { useState, useEffect } from 'react';

function MultipleEffects() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    button: {
      padding: '8px 12px',
      backgroundColor: '#2563eb',
      color: '#fff',
      border: 'none',
      borderRadius: '6px'
    }
  };

  const [data, setData] = useState(null);
  const [titleCount, setTitleCount] = useState(0);

  // Effect 1: API fetch
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  // Effect 2: Document title update
  useEffect(() => {
    document.title = `Task 13 Clicks: ${titleCount}`;
  }, [titleCount]);

  // Effect 3: Independent logging
  useEffect(() => {
    console.log('Task 13 Component State Updated');
  });

  return (
    <div style={styles.container}>
      <h3>Task 13: Multiple useEffect Hooks</h3>
      <p>Fetched Todo: {data ? data.title : 'Loading...'}</p>
      <button style={styles.button} onClick={() => setTitleCount(c => c + 1)}>
        Update Title ({titleCount})
      </button>
    </div>
  );
}

export default MultipleEffects;