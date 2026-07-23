import React, { useState } from 'react'
import SearchBar from './SearchBar'

function Navbar({ searchQuery, setSearchQuery }) {
  const [showSearch, setShowSearch] = useState(false);

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      fontFamily: 'sans-serif',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#2563eb',
      margin: 0
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    searchToggleBtn: {
      background: 'none',
      border: 'none',
      fontSize: '1.2rem',
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: '6px',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>🎓 EduDashboard</h1>
      
      <div style={styles.rightSection}>
        {showSearch && (
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        )}
        <button 
          onClick={() => setShowSearch(!showSearch)} 
          style={{
            ...styles.searchToggleBtn,
            backgroundColor: showSearch ? '#e2e8f0' : 'transparent'
          }}
          title="Toggle Search"
        >
          {showSearch ? '❌' : '🔍'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar