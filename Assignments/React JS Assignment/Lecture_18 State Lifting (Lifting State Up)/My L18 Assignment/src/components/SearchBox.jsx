import React from 'react';

const styles = {
    container: { display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 },
    label: { fontSize: '0.875rem', fontWeight: '600', color: '#334155' },
    input: {
        padding: '0.5rem 0.75rem',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        fontSize: '0.9rem',
    },
};

function SearchBox({ searchTerm, onSearchChange }) {
    return (
        <div style={styles.container}>
            <label style={styles.label}>🔍 Search Student</label>
            <input
                type="text"
                placeholder="Search by student name..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                style={styles.input}
            />
        </div>
    );
}

export default SearchBox;