// import React from 'react';

// function Navbar({ searchQuery, setSearchQuery, searchType, setSearchType }) {
//     const styles = {
//         nav: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: '#1e293b',
//             padding: '12px 24px',
//             color: '#ffffff',
//             fontFamily: 'sans-serif',
//             boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
//             position: 'sticky',
//             top: 0,
//             zIndex: 100,
//             flexWrap: 'wrap',
//             gap: '12px'
//         },
//         logo: { margin: 0, fontSize: '1.3rem', fontWeight: '700', color: '#38bdf8' },
//         searchBox: { display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' },
//         select: {
//             padding: '8px 12px',
//             borderRadius: '6px',
//             border: '1px solid #475569',
//             backgroundColor: '#334155',
//             color: '#ffffff',
//             fontSize: '0.9rem',
//             outline: 'none',
//             cursor: 'pointer'
//         },
//         input: {
//             padding: '8px 14px',
//             borderRadius: '6px',
//             border: '1px solid #475569',
//             backgroundColor: '#334155',
//             color: '#ffffff',
//             fontSize: '0.9rem',
//             outline: 'none',
//             width: '240px'
//         }
//     };

//     return (
//         <nav style={styles.nav}>
//             <h1 style={styles.logo}>🎓 EduPortal</h1>
            
//             <div style={styles.searchBox}>
//                 <select 
//                     value={searchType} 
//                     onChange={(e) => setSearchType(e.target.value)} 
//                     style={styles.select}
//                 >
//                     <option value="name">Search Name</option>
//                     <option value="course">Search Course</option>
//                     <option value="city">Search City</option>
//                     <option value="status">Search Status</option>
//                 </select>

//                 <input
//                     type="text"
//                     placeholder={`Type to search...`}
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     style={styles.input}
//                 />
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

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