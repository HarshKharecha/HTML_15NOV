import React from 'react';

function Members() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
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
      boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)'
    },
    image: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #38bdf8',
      marginBottom: '12px'
    },
    info: {
      margin: '8px 0'
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: '0 0 4px 0'
    },
    text: {
      fontSize: '0.9rem',
      color: '#64748b',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '12px'
    }
  };

  const membersList = [
    { id: 'MEM-301', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Deshmukh', type: 'Premium', activeBorrows: 2, status: 'Active' },
    { id: 'MEM-302', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Sharma', type: 'Standard', activeBorrows: 1, status: 'Active' },
    { id: 'MEM-303', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Kapoor', type: 'Student', activeBorrows: 4, status: 'Overdue Warning' },
    { id: 'MEM-304', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80', name: 'Kavita Chawla', type: 'Premium', activeBorrows: 0, status: 'Active' },
    { id: 'MEM-305', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Amitabh Sen', type: 'Standard', activeBorrows: 1, status: 'Active' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Library Members</h2>
      <div style={styles.grid}>
        {membersList.map((m) => (
          <div key={m.id} style={styles.card}>
            <img src={m.image} alt={m.name} style={styles.image} />
            <div style={styles.info}>
              <h4 style={styles.name}>{m.name}</h4>
              <p style={styles.text}><strong>Tier:</strong> {m.type}</p>
              <p style={styles.text}><strong>Books Checked Out:</strong> {m.activeBorrows}</p>
              <p style={styles.text}>
                <strong>Status:</strong>{' '}
                <span style={{ color: m.status === 'Active' ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
                  {m.status}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Opening borrower profile for ${m.name}`)}
            >
              Borrower Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;