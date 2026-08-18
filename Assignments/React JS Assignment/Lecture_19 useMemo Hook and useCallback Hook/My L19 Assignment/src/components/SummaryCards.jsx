import React from 'react';

const styles = {
    row: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '0.875rem',
        color: '#64748b',
    },
    number: {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginTop: '0.25rem',
        color: '#0f172a',
    },
};

function SummaryCards({ totalCount, favoriteCount, cartCount, activeCategories }) {
    return (
        <div style={styles.row}>
            <div style={styles.card}>
                <span style={styles.title}>Total Dataset</span>
                <span style={{ ...styles.number, color: '#051b3f' }}>{totalCount}</span>
            </div>
            <div style={styles.card}>
                <span style={styles.title}>Favorites</span>
                <span style={{ ...styles.number, color: '#ef4444' }}>{favoriteCount}</span>
            </div>
            <div style={styles.card}>
                <span style={styles.title}>Cart Items</span>
                <span style={{ ...styles.number, color: '#2563eb' }}>{cartCount}</span>
            </div>
            <div style={styles.card}>
                <span style={styles.title}>Categories</span>
                <span style={{ ...styles.number, color: '#059669' }}>{activeCategories}</span>
            </div>
        </div>
    );
}

export default SummaryCards;