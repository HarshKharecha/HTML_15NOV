import React from 'react';

function FoodCustomers() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
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
    badge: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#c2410c',
      backgroundColor: '#ffedd5'
    },
    button: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '6px 12px',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  const customers = [
    { id: 'CUST-901', name: 'Alex Rivera', email: 'alex@example.com', orders: 24, Tier: 'Gold Member' },
    { id: 'CUST-902', name: 'Priya Patel', email: 'priya@example.com', orders: 15, Tier: 'Silver Member' },
    { id: 'CUST-903', name: 'Marcus Chen', email: 'marcus@example.com', orders: 48, Tier: 'Platinum Member' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Customer Accounts</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Customer ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Total Orders</th>
            <th style={styles.th}>Loyalty Tier</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td style={styles.td}>{c.id}</td>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{c.name}</td>
              <td style={styles.td}>{c.email}</td>
              <td style={styles.td}>{c.orders}</td>
              <td style={styles.td}>
                <span style={styles.badge}>{c.Tier}</span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Inspecting account for ${c.name}`)}
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodCustomers;