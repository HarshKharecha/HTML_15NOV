import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';

const SearchInput = forwardRef(function SearchInput(props, ref) {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');

  useImperativeHandle(ref, () => ({
    focusSearch() {
      searchRef.current?.focus();
    },
    clearSearch() {
      setQuery('');
      if (searchRef.current) searchRef.current.value = '';
    },
  }));

  return (
    <div style={styles.container}>
      <input
        ref={searchRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search keywords..."
        style={styles.input}
      />
      <button style={styles.btn} onClick={() => alert(`Searching: ${query}`)}>
        Search
      </button>
      <button style={styles.clearBtn} onClick={() => setQuery('')}>
        Clear
      </button>
    </div>
  );
});

const styles = {
  container: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    outline: 'none',
  },
  btn: {
    padding: '0.5rem 0.8rem',
    backgroundColor: '#0d9488',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  clearBtn: {
    padding: '0.5rem 0.8rem',
    backgroundColor: '#e2e8f0',
    color: '#475569',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default SearchInput;