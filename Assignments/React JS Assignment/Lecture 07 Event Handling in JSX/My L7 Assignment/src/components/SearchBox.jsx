import React, { useState } from 'react';

function SearchBox() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            maxWidth: '500px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
        },
        inputWrapper: {
            position: 'relative',
            width: '100%'
        },
        input: {
            padding: '12px 16px',
            paddingLeft: '40px', // Leave space for a clean layout look
            fontSize: '1rem',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            outline: 'none',
            color: '#334155',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            width: '100%',
            boxSizing: 'border-box'
        },
        searchIcon: {
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#94a3b8',
            fontSize: '1.1rem',
            pointerEvents: 'none'
        },
        resultBadge: {
            marginTop: '16px',
            padding: '10px 14px',
            backgroundColor: '#f0fdf4',
            borderLeft: '4px solid #22c55e',
            borderRadius: '4px',
            fontSize: '0.95rem',
            color: '#166534',
            fontWeight: '500',
            wordBreak: 'break-word'
        },
        queryText: {
            color: '#15803d',
            fontStyle: 'normal',
            fontWeight: '600'
        }
    };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = '#2563eb';
        e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#cbd5e1';
        e.target.style.boxShadow = 'none';
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 8: Search Box</h3>

            <div style={styles.inputWrapper}>
                <span style={styles.searchIcon}>🔍</span>
                <input
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>

            {searchQuery && (
                <div style={styles.resultBadge}>
                    Searching for: <span style={styles.queryText}>"{searchQuery}"</span>
                </div>
            )}
        </div>
    );
}

export default SearchBox;