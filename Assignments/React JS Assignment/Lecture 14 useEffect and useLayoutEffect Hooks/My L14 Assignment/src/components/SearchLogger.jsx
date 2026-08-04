import React, { useState, useEffect } from 'react';

function SearchLogger() {
  const [search, setSearch] = useState('');

  // Task 12: Log search input state updates
  useEffect(() => {
    if (search.trim() !== '') {
      console.log(`Search Query: ${search}`);
    }
  }, [search]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
      <h3>Task 12: Search Filter Logger</h3>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Type to log output..." 
        style={{ padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', width: '80%' }}
      />
    </div>
  );
}

export default SearchLogger;