import React from 'react';

const styles = {
    panel: {
        backgroundColor: '#ffffff',
        padding: '1.25rem',
        borderRadius: '0.5rem',
        border: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
    },
    heading: {
        margin: '0 0 1rem 0',
        fontSize: '1rem',
        color: '#0f172a',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '1rem',
    },
    statBox: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f8fafc',
        padding: '0.75rem',
        borderRadius: '0.375rem',
    },
    label: {
        fontSize: '0.75rem',
        color: '#64748b',
    },
    value: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#0f172a',
    },
    statscolor:{
        color: '#059669',
    }
};

function StatisticsPanel({ stats }) {
    return (
        <div style={styles.panel}>
            <h3 style={styles.heading}>Memoized Product Analytics</h3>
            <div style={styles.grid}>
                <div style={styles.statBox}>
                    <span style={styles.label}>Total Filtered</span>
                    <span style={{...styles.value, ...styles.statscolor}}>{stats.total}</span>
                </div>
                <div style={styles.statBox}>
                    <span style={styles.label}>Avg Price</span>
                    <span style={{...styles.value, ...styles.statscolor}}>₹{stats.avgPrice}</span>
                </div>
                <div style={styles.statBox}>
                    <span style={styles.label}>Highest Price</span>
                    <span style={{...styles.value, ...styles.statscolor}}>₹{stats.highestPrice}</span>
                </div>
                <div style={styles.statBox}>
                    <span style={styles.label}>Lowest Price</span>
                    <span style={{...styles.value, ...styles.statscolor}}>₹{stats.lowestPrice}</span>
                </div>
            </div>
        </div>
    );
}

export default StatisticsPanel;