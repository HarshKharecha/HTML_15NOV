import React from 'react';

function Cards() {
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

  const cardsList = [
    { id: 'CRD-01', cardName: 'Apex Black Credit', cardNum: '•••• •••• •••• 9812', expiry: '08/29', status: 'Active', limit: '₹5,00,000' },
    { id: 'CRD-02', cardName: 'Platinum Debit Card', cardNum: '•••• •••• •••• 3341', expiry: '11/27', status: 'Active', limit: '₹1,00,000' },
    { id: 'CRD-03', cardName: 'Virtual Shopping Card', cardNum: '•••• •••• •••• 1002', expiry: '04/28', status: 'Locked', limit: '₹50,000' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Your Cards</h2>
      <div style={styles.grid}>
        {cardsList.map((c) => (
          <div key={c.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.name}>{c.cardName}</h4>
              <p style={styles.text}><strong>Number:</strong> {c.cardNum}</p>
              <p style={styles.text}><strong>Expires:</strong> {c.expiry}</p>
              <p style={styles.text}><strong>Monthly Limit:</strong> {c.limit}</p>
              <p style={styles.text}>
                <strong>Status:</strong>{' '}
                <span style={{ color: c.status === 'Active' ? '#16a34a' : '#d97706', fontWeight: 'bold' }}>
                  {c.status}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Managing settings for ${c.cardName}`)}
            >
              Card Settings
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;