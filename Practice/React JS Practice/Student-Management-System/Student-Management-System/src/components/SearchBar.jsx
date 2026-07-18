// import React, { useState } from 'react';

// function SearchBar({ searchQuery, setSearchQuery, searchType, setSearchType }) {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const styles = {
//     wrapper: { marginBottom: '24px' },
//     toggleButton: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px',
//       backgroundColor: isSearchOpen ? '#64748b' : '#2563eb',
//       color: '#ffffff',
//       border: 'none',
//       padding: '10px 16px',
//       borderRadius: '8px',
//       fontWeight: '600',
//       cursor: 'pointer',
//       fontSize: '0.95rem',
//       marginBottom: isSearchOpen ? '12px' : '0px'
//     },
//     barContainer: {
//       display: 'flex',
//       gap: '12px',
//       backgroundColor: '#ffffff',
//       padding: '16px',
//       borderRadius: '12px',
//       border: '1px solid #e2e8f0',
//       boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
//       alignItems: 'center',
//       flexWrap: 'wrap',
//     },
//     input: {
//       flex: 1,
//       minWidth: '200px',
//       padding: '10px 14px',
//       borderRadius: '8px',
//       border: '1px solid #cbd5e1',
//       fontSize: '0.95rem',
//       outline: 'none',
//     },
//     select: {
//       padding: '10px 14px',
//       borderRadius: '8px',
//       border: '1px solid #cbd5e1',
//       fontSize: '0.95rem',
//       backgroundColor: '#ffffff',
//       outline: 'none',
//       cursor: 'pointer',
//       color: '#334155'
//     },
//     label: { fontSize: '0.9rem', fontWeight: '600', color: '#475569' }
//   };

//   return (
//     <div style={styles.wrapper}>
//       <button
//         type="button"
//         onClick={() => setIsSearchOpen(!isSearchOpen)}
//         style={styles.toggleButton}
//       >
//         {isSearchOpen ? '✖ Close Search Panel' : '🔍 Open Search Panel'}
//       </button>

//       {isSearchOpen && (
//         <div style={styles.barContainer}>
//           <span style={styles.label}>🎯 Filter By:</span>
//           <select
//             value={searchType}
//             onChange={(e) => setSearchType(e.target.value)}
//             style={styles.select}
//           >
//             <option value="name">Name</option>
//             <option value="course">Course</option>
//             <option value="city">City</option>
//             <option value="status">Status</option>
//           </select>

//           <input
//             type="text"
//             placeholder={`Search records by ${searchType}...`}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             style={styles.input}
//             autoFocus
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;

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