import React, { useState, useEffect } from 'react';

function SearchLogger() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log("Search query updated:", searchTerm);
  }, [searchTerm]);

  return (
    <div style={styles.container}>
      <h2>Task 12: Search Filter Logger</h2>
      <input
        type="text"
        placeholder="Type here to log search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <p>Current input: <i>{searchTerm}</i></p>
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
  input: {
    padding: '8px',
    width: '100%',
    maxWidth: '300px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default SearchLogger;