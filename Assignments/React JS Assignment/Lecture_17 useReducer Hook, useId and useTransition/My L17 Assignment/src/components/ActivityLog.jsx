import React from 'react';

function ActivityLog({ logs }) {
    const styles = {
        container: {
            backgroundColor: '#ffffff',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
        },
        title: { margin: '0 0 8px 0', fontSize: '14px', color: '#475569' },
        logList: { display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '150px', overflowY: 'auto' },
        logItem: { fontSize: '11px', color: '#334155' },
        time: { color: '#94a3b8', fontWeight: 'bold' },
        empty: { fontSize: '11px', color: '#cbd5e1' },
    };

    return (
        <div style={styles.container}>
            <h4 style={styles.title}>Activity Log</h4>
            <div style={styles.logList}>
                {logs.length === 0 && <span style={styles.empty}>No recent activity</span>}
                {logs.slice(0, 20).map((log) => (
                    <div key={log.id} style={styles.logItem}>
                        <span style={styles.time}>[{log.time}]</span> {log.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityLog;