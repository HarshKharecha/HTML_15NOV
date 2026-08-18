import React from 'react';

const styles = {
    card: {
        backgroundColor: '#ffffff',
        padding: '1.25rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginTop: '1.5rem',
    },
    heading: { margin: '0 0 1rem 0', fontSize: '1.1rem', color: '#1e293b' },
    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' },
    th: { backgroundColor: '#f8fafc' },
    td: { padding: '0.75rem', borderBottom: '1px solid #e2e8f0' },
};

function StudentContextComparison() {
    return (
        <div style={styles.card}>
            <h3 style={styles.heading}>State Lifting vs. Context API</h3>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.th}>
                        <th style={styles.td}>Feature</th>
                        <th style={styles.td}>State Lifting</th>
                        <th style={styles.td}>Context API</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}><strong>Data Flow</strong></td>
                        <td style={styles.td}>Explicit parent-to-child via props</td>
                        <td style={styles.td}>Implicit global provider broadcasting</td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>Prop Drilling</strong></td>
                        <td style={styles.td}>Occurs in deep component trees</td>
                        <td style={styles.td}>Eliminated; direct access via custom hooks</td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>Best Use Case</strong></td>
                        <td style={styles.td}>Close siblings or shallow trees (1-2 levels)</td>
                        <td style={styles.td}>Global state (e.g., Theme, Auth, Multi-page states)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StudentContextComparison;