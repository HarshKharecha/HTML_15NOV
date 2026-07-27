import React from 'react';

function Loans() {
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

  const loans = [
    { id: 'LN-101', type: 'Home Loan', principal: '₹45,00,000', emi: '₹38,200/mo', interest: '8.4%', balance: '₹32,10,000' },
    { id: 'LN-102', type: 'Auto Loan', principal: '₹8,50,000', emi: '₹14,500/mo', interest: '9.1%', balance: '₹3,20,000' },
    { id: 'LN-103', type: 'Personal Loan', principal: '₹2,00,000', emi: '₹6,100/mo', interest: '11.5%', balance: '₹48,000' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Active Loans & Mortgages</h2>
      <div style={styles.grid}>
        {loans.map((l) => (
          <div key={l.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.name}>{l.type}</h4>
              <p style={styles.text}><strong>Principal:</strong> {l.principal}</p>
              <p style={styles.text}><strong>Monthly EMI:</strong> {l.emi}</p>
              <p style={styles.text}><strong>Interest Rate:</strong> {l.interest}</p>
              <p style={styles.text}><strong>Outstanding Balance:</strong> <span style={{ color: '#dc2626', fontWeight: 'bold' }}>{l.balance}</span></p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Processing EMI payment for ${l.type}`)}
            >
              Pay EMI Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loans;