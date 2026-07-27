import React from 'react';

function Payments() {
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
    status: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#15803d',
      backgroundColor: '#dcfce7'
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

  const transactions = [
    { txn: 'TXN-5501', user: 'Emma Watson', method: 'Visa ending 4242', amount: '$1,420.00', date: 'Jul 26, 2026' },
    { txn: 'TXN-5502', user: 'Liam Neeson', method: 'MasterCard ending 8812', amount: '$620.00', date: 'Jul 25, 2026' },
    { txn: 'TXN-5503', user: 'Sophia Loren', method: 'PayPal', amount: '$360.00', date: 'Jul 24, 2026' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Payment Ledger & Transactions</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Transaction ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Payment Method</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.txn}>
              <td style={styles.td}>{t.txn}</td>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{t.user}</td>
              <td style={styles.td}>{t.method}</td>
              <td style={{ ...styles.td, color: '#0284c7', fontWeight: '600' }}>{t.amount}</td>
              <td style={styles.td}>
                <span style={styles.status}>Paid</span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Exporting receipt for ${t.txn}`)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;