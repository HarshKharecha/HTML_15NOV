import React from 'react';

function StatisticsPanel({ tasks }) {
    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        label: { fontSize: '12px', color: '#64748b' },
        value: { fontSize: '20px', fontWeight: 'bold', marginTop: '4px' },
    };
    
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const highPriority = tasks.filter((t) => t.priority === 'High').length;

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <span style={styles.label}>Total Tasks</span>
                <span style={styles.value}>{total.toLocaleString()}</span>
            </div>
            <div style={styles.card}>
                <span style={styles.label}>Completed</span>
                <span style={{ ...styles.value, color: '#16a34a' }}>{completed.toLocaleString()}</span>
            </div>
            <div style={styles.card}>
                <span style={styles.label}>Pending</span>
                <span style={{ ...styles.value, color: '#ea580c' }}>{pending.toLocaleString()}</span>
            </div>
            <div style={styles.card}>
                <span style={styles.label}>High Priority</span>
                <span style={{ ...styles.value, color: '#dc2626' }}>{highPriority.toLocaleString()}</span>
            </div>
        </div>
    );
}

export default StatisticsPanel;