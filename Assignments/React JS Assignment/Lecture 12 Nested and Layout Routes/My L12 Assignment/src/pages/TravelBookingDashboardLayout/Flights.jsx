import React from 'react';

function Flights() {
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
      color: status === 'On Time' ? '#166534' : '#991b1b',
      backgroundColor: status === 'On Time' ? '#dcfce7' : '#fee2e2'
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

  const flightList = [
    { code: 'AA-102', airline: 'American Airlines', route: 'JFK ➔ LHR', departure: '10:30 AM', price: '$620', status: 'On Time' },
    { code: 'SQ-024', airline: 'Singapore Airlines', route: 'SIN ➔ JFK', departure: '02:15 PM', price: '$1,250', status: 'On Time' },
    { code: 'LH-401', airline: 'Lufthansa', route: 'JFK ➔ FRA', departure: '06:00 PM', price: '$780', status: 'Delayed' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Available Flight Schedules</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Flight</th>
            <th style={styles.th}>Airline</th>
            <th style={styles.th}>Route</th>
            <th style={styles.th}>Departure</th>
            <th style={styles.th}>Base Price</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {flightList.map((f) => (
            <tr key={f.code}>
              <td style={{ ...styles.td, fontWeight: '700', color: '#0f172a' }}>{f.code}</td>
              <td style={styles.td}>{f.airline}</td>
              <td style={styles.td}>{f.route}</td>
              <td style={styles.td}>{f.departure}</td>
              <td style={{ ...styles.td, color: '#0284c7', fontWeight: '600' }}>{f.price}</td>
              <td style={styles.td}>
                <span style={styles.badge(f.status)}>{f.status}</span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Reserving seat on flight ${f.code}`)}
                >
                  Book Seat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Flights;