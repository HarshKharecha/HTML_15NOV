import React from 'react';

function FoodDeliveryPartners() {
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
    badge: (status) => ({
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: status === 'On Trip' ? '#0369a1' : status === 'Available' ? '#15803d' : '#64748b',
      backgroundColor: status === 'On Trip' ? '#e0f2fe' : status === 'Available' ? '#dcfce7' : '#f1f5f9'
    }),
    button: {
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '6px 12px',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  const partners = [
    { id: 'DVR-301', name: 'Carlos Mendez', vehicle: 'E-Bike', rating: '4.9 ★', completed: 320, status: 'On Trip' },
    { id: 'DVR-302', name: 'Aisha Omar', vehicle: 'Scooter', rating: '4.8 ★', completed: 410, status: 'Available' },
    { id: 'DVR-303', name: 'David Miller', vehicle: 'Car', rating: '4.7 ★', completed: 185, status: 'Offline' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Delivery Fleets</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Partner ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Vehicle</th>
            <th style={styles.th}>Rating</th>
            <th style={styles.th}>Completed Trips</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((p) => (
            <tr key={p.id}>
              <td style={styles.td}>{p.id}</td>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{p.name}</td>
              <td style={styles.td}>{p.vehicle}</td>
              <td style={styles.td}>{p.rating}</td>
              <td style={styles.td}>{p.completed}</td>
              <td style={styles.td}>
                <span style={styles.badge(p.status)}>{p.status}</span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Assigning task to ${p.name}`)}
                >
                  View Activity
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodDeliveryPartners;