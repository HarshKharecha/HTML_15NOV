import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  const styles = {
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: '10px 14px',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      width: '280px',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
    },
    icon: {
      fontSize: '0.95rem',
      color: '#64748b',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      width: '100%',
      fontSize: '0.95rem',
      marginLeft: '8px',
      color: '#1e293b',
      fontFamily: 'inherit'
    }
  };

  const handleFocus = (e) => {
    e.currentTarget.style.borderColor = '#2563eb';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
  };

  const handleBlur = (e) => {
    e.currentTarget.style.borderColor = '#cbd5e1';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div
      style={styles.searchContainer}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <span style={styles.icon}>🔍</span>
      <input
        type="text"
        placeholder="Search students..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

export default SearchBar;