import React from 'react';

function Account() {
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

  const accounts = [
    { id: 'ACC-01', type: 'Primary Checking', accNo: '•••• 4821', balance: '₹3,45,210', status: 'Active' },
    { id: 'ACC-02', type: 'High Yield Savings', accNo: '•••• 8910', balance: '₹12,80,500', status: 'Active' },
    { id: 'ACC-03', type: 'Fixed Deposit', accNo: '•••• 3312', balance: '₹5,00,000', status: 'Locked' },
    { id: 'ACC-04', type: 'Wealth Investment', accNo: '•••• 7741', balance: '₹8,15,400', status: 'Active' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Accounts Overview</h2>
      <div style={styles.grid}>
        {accounts.map((acc) => (
          <div key={acc.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.name}>{acc.type}</h4>
              <p style={styles.text}><strong>Acc No:</strong> {acc.accNo}</p>
              <p style={styles.text}><strong>Available Balance:</strong> <span style={{ color: '#059669', fontWeight: 'bold' }}>{acc.balance}</span></p>
              <p style={styles.text}><strong>Status:</strong> {acc.status}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Viewing statement for ${acc.type}`)}
            >
              View Statement
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;