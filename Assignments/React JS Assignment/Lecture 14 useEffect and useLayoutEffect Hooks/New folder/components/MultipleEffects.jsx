import React, { useState, useEffect } from 'react';

function MultipleEffects() {
  const [data, setData] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [logText, setLogText] = useState('');

  // Effect 1: Fetches API data on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  // Effect 2: Updates Document Title based on count state
  useEffect(() => {
    document.title = `Clicked ${clickCount} times`;
  }, [clickCount]);

  // Effect 3: Logs input text changes separately
  useEffect(() => {
    if (logText) console.log("Log input updated:", logText);
  }, [logText]);

  return (
    <div style={styles.container}>
      <h2>Task 13: Multiple Independent useEffect Hooks</h2>
      <p>API Data: {data ? data.title : "Loading..."}</p>
      
      <button style={styles.button} onClick={() => setClickCount(prev => prev + 1)}>
        Title Updates: {clickCount}
      </button>

      <div style={{ marginTop: '15px' }}>
        <input
          type="text"
          placeholder="Type to trigger logger..."
          value={logText}
          onChange={(e) => setLogText(e.target.value)}
          style={styles.input}
        />
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
  button: {
    padding: '8px 16px',
    backgroundColor: '#17a2b8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default MultipleEffects;