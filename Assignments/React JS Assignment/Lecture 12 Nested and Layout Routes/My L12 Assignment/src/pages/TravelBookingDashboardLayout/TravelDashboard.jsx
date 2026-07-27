import React from 'react';

function TravelDashboard() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '28px'
    },
    statCard: {
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center'
    },
    statNum: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#0284c7',
      margin: '4px 0'
    },
    statLabel: {
      fontSize: '0.85rem',
      color: '#64748b'
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
    }
  };

  const recentBookings = [
    { id: 'BK-9021', passenger: 'Emma Watson', destination: 'Tokyo, Japan', type: 'Flight + Hotel', status: 'Confirmed' },
    { id: 'BK-9022', passenger: 'Liam Neeson', destination: 'Paris, France', type: 'Flight', status: 'Pending' },
    { id: 'BK-9023', passenger: 'Sophia Loren', destination: 'Rome, Italy', type: 'Hotel', status: 'Confirmed' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Travel Operations Dashboard</h2>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Active Bookings</div>
          <div style={styles.statNum}>1,240</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Flights Operating Today</div>
          <div style={styles.statNum}>342</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Hotel Partners</div>
          <div style={styles.statNum}>850+</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Revenue (July 2026)</div>
          <div style={styles.statNum}>$284.5k</div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '12px' }}>Recent Reservations</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Booking Ref</th>
            <th style={styles.th}>Passenger</th>
            <th style={styles.th}>Destination</th>
            <th style={styles.th}>Booking Type</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentBookings.map((b) => (
            <tr key={b.id}>
              <td style={styles.td}>{b.id}</td>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{b.passenger}</td>
              <td style={styles.td}>{b.destination}</td>
              <td style={styles.td}>{b.type}</td>
              <td style={{ ...styles.td, color: b.status === 'Confirmed' ? '#166534' : '#854d0e', fontWeight: '600' }}>
                {b.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TravelDashboard;