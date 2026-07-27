import React from 'react';

function Customers() {
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
        },
        badge: (status) => ({
            display: 'inline-block',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: '600',
            color: status === 'Active' ? '#166534' : '#991b1b',
            backgroundColor: status === 'Active' ? '#dcfce7' : '#fee2e2'
        }),
        button: {
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer'
        }
    };

    const customersList = [
        { id: 'CUST-101', name: 'Reliance Industries', contact: 'Aakash Ambani', email: 'aakash.ambani@ril.com', totalSpent: '₹38,25,000', status: 'Active' },
        { id: 'CUST-102', name: 'Tata Consultancy Services', contact: 'K Krithivasan', email: 'k.krithivasan@tcs.com', totalSpent: '₹1,02,00,000', status: 'Active' },
        { id: 'CUST-103', name: 'Infosys Limited', contact: 'Salil Parekh', email: 'salil.parekh@infosys.com', totalSpent: '₹72,25,000', status: 'Inactive' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Customer Accounts</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Company</th>
                        <th style={styles.th}>Contact Person</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Lifetime Value</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customersList.map((c) => (
                        <tr key={c.id}>
                            <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{c.name}</td>
                            <td style={styles.td}>{c.contact}</td>
                            <td style={styles.td}>{c.email}</td>
                            <td style={styles.td}>{c.totalSpent}</td>
                            <td style={styles.td}>
                                <span style={styles.badge(c.status)}>{c.status}</span>
                            </td>
                            <td style={styles.td}>
                                <button
                                    style={styles.button}
                                    onClick={() => alert(`Opening account details for ${c.name}`)}
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Customers;