import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Navbar({ searchQuery, setSearchQuery }) {
  const [showSearch, setShowSearch] = useState(false);

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      fontFamily: 'sans-serif',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',

      // Sticky stacking layout logic
      position: 'sticky',
      top: '70px',     // Sits right below the 70px main Header
      zIndex: 1000,     // Sits perfectly below the header (1010) but above the page content
      height: '60px',   // Explicit height for nested tracking structures
      boxSizing: 'border-box'
    },
    logo: {
      fontSize: '1.15rem',
      fontWeight: '700',
      color: 'rgb(37, 99, 235)',
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
      fontSize: '1.1rem',
      cursor: 'pointer',
      padding: '6px 10px',
      borderRadius: '6px',
      transition: 'background-color 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    // Overrides standard SearchBar sticky positioning inside a row layout
    searchWrapper: {
      position: 'relative',
      top: '0px'
    }
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>🎓 EduDashboard</h1>

      <div style={styles.rightSection}>
        {showSearch && (
          <div style={styles.searchWrapper}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        )}
        <button
          onClick={() => setShowSearch(!showSearch)}
          style={{
            ...styles.searchToggleBtn,
            backgroundColor: showSearch ? '#f1f5f9' : 'transparent'
          }}
          title="Toggle Search"
        >
          {showSearch ? '❌' : '🔍'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;