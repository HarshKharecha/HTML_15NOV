import React, { useState } from 'react';

function SearchBar({ onSearch, onCurrentLocation }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const styles = {
    form: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      marginBottom: '35px',
      flexWrap: 'wrap'
    },
    input: {
      padding: '14px 22px',
      borderRadius: '30px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#fff',
      fontSize: '16px',
      outline: 'none',
      width: '320px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    },
    button: {
      padding: '14px 24px',
      borderRadius: '30px',
      border: 'none',
      background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
      transition: 'all 0.3s ease'
    },
    locButton: {
      padding: '14px 20px',
      borderRadius: '30px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      background: 'rgba(255, 255, 255, 0.15)',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)'
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Search city, country, or village..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Search</button>
      <button type="button" onClick={onCurrentLocation} style={styles.locButton}>📍 My Location</button>
    </form>
  );
}

export default SearchBar;