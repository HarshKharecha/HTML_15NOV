import React from 'react';

function Transactions() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0'
    },
    heading: {
      color: '#0f172a',
      marginBottom: '20px',
      fontSize: '1.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
      transition: 'all 0.2s'
    },
    info: {
      margin: '9px auto'
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    text: {
      fontSize: '0.9rem',
      color: '#64748b',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#059669',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      margin: '9px auto',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'background-color 0.2s'
    }
  };

  const transactions = [
    { id: 'TXN-901', title: 'Salary Credit', category: 'Income', amount: '+₹1,25,000', date: '25 Jul 2026', type: 'Credit' },
    { id: 'TXN-902', title: 'Amazon Shopping', category: 'E-Commerce', amount: '-₹4,299', date: '24 Jul 2026', type: 'Debit' },
    { id: 'TXN-903', title: 'Electricity Bill', category: 'Utilities', amount: '-₹2,150', date: '21 Jul 2026', type: 'Debit' },
    { id: 'TXN-904', title: 'Mutual Fund SIP', category: 'Investment', amount: '-₹15,000', date: '15 Jul 2026', type: 'Debit' },
    { id: 'TXN-905', title: 'Cashback Reward', category: 'Bonus', amount: '+₹500', date: '10 Jul 2026', type: 'Credit' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Recent Transactions</h2>
      <div style={styles.grid}>
        {transactions.map((t) => (
          <div key={t.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.name}>{t.title}</h4>
              <p style={styles.text}><strong>Category:</strong> {t.category}</p>
              <p style={styles.text}><strong>Date:</strong> {t.date}</p>
              <p style={styles.text}>
                <strong>Amount:</strong>{' '}
                <span style={{ color: t.type === 'Credit' ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
                  {t.amount}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Downloading receipt for ${t.id}`)}
            >
              Get Receipt
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;