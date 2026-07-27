import React from 'react';

function Sales() {
    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            padding: '24px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        },
        heading: {
            color: '#0f172a',
            marginBottom: '20px',
            fontSize: '1.5rem',
            fontWeight: '700'
        },
        statsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
        },
        statCard: {
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center'
        },
        statNumber: {
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#2563eb',
            margin: '4px 0'
        },
        statLabel: {
            fontSize: '0.875rem',
            color: '#64748b'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9rem'
        },
        th: {
            backgroundColor: '#f1f5f9',
            color: '#334155',
            textAlign: 'left',
            padding: '12px',
            borderBottom: '2px solid #e2e8f0'
        },
        td: {
            padding: '12px',
            borderBottom: '1px solid #e2e8f0',
            color: '#475569'
        }
    };

    const salesDeals = [
        { id: 'DEAL-901', account: 'Reliance Industries', amount: '₹21,00,000', closeDate: '24 Jul 2026', owner: 'Aarav Sharma' },
        { id: 'DEAL-902', account: 'Tata Consultancy Services', amount: '₹50,00,000', closeDate: '18 Jul 2026', owner: 'Ananya Iyer' },
        { id: 'DEAL-903', account: 'Tech Mahindra', amount: '₹38,00,000', closeDate: '10 Jul 2026', owner: 'Aarav Sharma' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Sales Performance</h2>

            <div style={styles.statsContainer}>
                <div style={styles.statCard}>
                    <div style={styles.statLabel}>Closed Revenue (Q3)</div>
                    <div style={styles.statNumber}>₹1,08,00,000</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statLabel}>Pipeline Value</div>
                    <div style={styles.statNumber}>₹1,62,00,000</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statLabel}>Win Rate</div>
                    <div style={styles.statNumber}>68%</div>
                </div>
            </div>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Deal ID</th>
                        <th style={styles.th}>Account Name</th>
                        <th style={styles.th}>Amount</th>
                        <th style={styles.th}>Closed Date</th>
                        <th style={styles.th}>Sales Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {salesDeals.map((deal) => (
                        <tr key={deal.id}>
                            <td style={styles.td}>{deal.id}</td>
                            <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{deal.account}</td>
                            <td style={{ ...styles.td, color: '#166534', fontWeight: '600' }}>{deal.amount}</td>
                            <td style={styles.td}>{deal.closeDate}</td>
                            <td style={styles.td}>{deal.owner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Sales;