import React, { useState, useEffect } from 'react';

function SearchLogger() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    searchs: {
      padding: '8px',
      borderRadius: '6px',
      border: '1px solid #007bff',
      width: '80%'
    }
  };

  const [search, setSearch] = useState('');

  // Task 12: Log search input state updates
  useEffect(() => {
    if (search.trim() !== '') {
      console.log(`Search Query: ${search}`);
    }
  }, [search]);

  return (
    <div style={styles.container}>
      <h3>Task 12: Search Filter Logger</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to log output..."
        style={styles.searchs}
      />
    </div>
  );
}

export default SearchLogger;