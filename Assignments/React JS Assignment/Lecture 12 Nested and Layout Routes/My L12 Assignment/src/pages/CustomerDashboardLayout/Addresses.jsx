import React from 'react';

function Addresses() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #d5d9d9',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    },
    heading: {
      color: '#0f1111',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '700'
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
      backgroundColor: '#ffffff',
      border: '1px solid #d5d9d9',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    info: {
      margin: '8px 0',
      width: '100%'
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f1111',
      margin: '0 0 6px 0'
    },
    text: {
      fontSize: '0.875rem',
      color: '#565959',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#f7ffa8',
      color: '#0f1111',
      border: '1px solid #d5d9d9',
      borderRadius: '20px',
      padding: '8px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '12px'
    }
  };

  const addressList = [
    { id: 'ADDR-01', label: 'Home Address', name: 'Alex Johnson', details: 'Flat 402, Sunshine Apartments, MG Road', city: 'Bengaluru, KA 560001', isDefault: true },
    { id: 'ADDR-02', label: 'Office Address', name: 'Alex Johnson', details: 'Tech Park Tower B, 5th Floor, Whitefield', city: 'Bengaluru, KA 560066', isDefault: false }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Your Shipping Addresses</h2>
      <div style={styles.grid}>
        {addressList.map((a) => (
          <div key={a.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.title}>{a.label} {a.isDefault && <span style={{ color: '#c45500', fontSize: '0.8rem' }}>(Default)</span>}</h4>
              <p style={styles.text}><strong>Recipient:</strong> {a.name}</p>
              <p style={styles.text}>{a.details}</p>
              <p style={styles.text}>{a.city}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Editing address: ${a.label}`)}
            >
              Edit Address
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addresses;