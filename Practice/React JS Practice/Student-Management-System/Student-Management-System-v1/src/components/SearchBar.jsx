import React from 'react'

function SearchBar({ searchQuery, setSearchQuery }) {
  const styles = {
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f1f5f9',
      padding: '6px 12px',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      width: '260px'
    },
    input: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      width: '100%',
      fontSize: '0.9rem',
      marginLeft: '8px',
      color: '#334155'
    }
  };

  return (
    <div style={styles.searchContainer}>
      {/* Search Icon */}
      <span style={{ fontSize: '0.95rem', color: '#64748b' }}>🔍</span>
      <input
        type="text"
        placeholder="Search students..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
    </div>
  )
}

export default SearchBar