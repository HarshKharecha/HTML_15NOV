import React, { useContext, useEffect, useRef } from 'react';
import { StudentContext } from '../context/StudentContext';
import { ThemeContext } from '../context/ThemeContext';

function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(StudentContext);
  const { colors } = useContext(ThemeContext);

  // useRef references
  const inputRef = useRef(null);
  const prevSearchRef = useRef('');

  // Task 8: Auto Focus Search Input on Mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Task 9: Store Previous Search Keyword
  useEffect(() => {
    prevSearchRef.current = searchQuery;
  }, [searchQuery]);

  const styles = {
    container: {
      marginBottom: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '6px',
      border: `1px solid ${colors.border}`,
      backgroundColor: colors.bgSecondary,
      color: colors.textPrimary,
      fontSize: '1rem',
      boxSizing: 'border-box',
    },
    historyText: {
      fontSize: '0.8rem',
      color: colors.textSecondary,
    },
  };

  return (
    <div style={styles.container}>
      <input
        ref={inputRef}
        type="text"
        placeholder="🔍 Search students by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
      <div style={styles.historyText}>
        <strong>Current:</strong> "{searchQuery}" | <strong>Previous Query:</strong> "{prevSearchRef.current}"
      </div>
    </div>
  );
}

export default SearchBar;