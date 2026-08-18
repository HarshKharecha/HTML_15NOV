import React from 'react';

const styles = {
    container: {
        flex: 1,
        minWidth: '250px',
    },
    input: {
        width: '100%',
        padding: '0.625rem 1rem',
        borderRadius: '0.375rem',
        border: '1px solid #cbd5e1',
        fontSize: '0.875rem',
        outline: 'none',
        boxSizing: 'border-box',
    },
};

function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Search 10,000 products by name..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                style={styles.input}
            />
        </div>
    );
}

export default SearchBar;