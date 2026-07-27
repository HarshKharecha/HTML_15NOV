import React from 'react';

function CustomerSupport() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f172a',
      margin: '0 0 6px 0'
    },
    text: {
      fontSize: '0.85rem',
      color: '#64748b',
      margin: '3px 0'
    },
    priority: (p) => ({
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '700',
      color: p === 'High' ? '#991b1b' : '#854d0e',
      backgroundColor: p === 'High' ? '#fee2e2' : '#fef9c3'
    }),
    button: {
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 12px',
      fontWeight: '600',
      fontSize: '0.8rem',
      cursor: 'pointer',
      marginTop: '12px'
    }
  };

  const tickets = [
    { id: 'TKT-101', customer: 'David Beckham', issue: 'Flight reschedule inquiry due to weather', priority: 'High', date: 'Jul 27, 2026' },
    { id: 'TKT-102', customer: 'Anna Kendrick', issue: 'Hotel room upgrade request', priority: 'Medium', date: 'Jul 26, 2026' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Support Desk & Tickets</h2>
      <div style={styles.grid}>
        {tickets.map((t) => (
          <div key={t.id} style={styles.card}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={styles.title}>{t.id}</h4>
                <span style={styles.priority(t.priority)}>{t.priority} Priority</span>
              </div>
              <p style={styles.text}><strong>Customer:</strong> {t.customer}</p>
              <p style={styles.text}><strong>Issue:</strong> {t.issue}</p>
              <p style={styles.text}><strong>Date:</strong> {t.date}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Replying to ticket ${t.id}`)}
            >
              Resolve Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerSupport;