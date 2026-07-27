import React from 'react';

function Bookings() {
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
    badge: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#166534',
      backgroundColor: '#dcfce7'
    },
    cancelBtn: {
      backgroundColor: '#991b1b',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '6px 12px',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  const bookingData = [
    { id: 'RES-881', customer: 'Carlos Santana', service: 'Flight + Hotel Bali', date: 'Aug 10 - Aug 18, 2026', total: '$1,850' },
    { id: 'RES-882', customer: 'Anna Kendrick', service: 'Hotel Kyoto 4 Nights', date: 'Sep 02 - Sep 06, 2026', total: '$720' },
    { id: 'RES-883', customer: 'David Beckham', service: 'Flight London - NYC', date: 'Aug 15, 2026', total: '$950' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Customer Travel Bookings</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Res ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Reserved Service</th>
            <th style={styles.th}>Travel Dates</th>
            <th style={styles.th}>Total Amount</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((b) => (
            <tr key={b.id}>
              <td style={styles.td}>{b.id}</td>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{b.customer}</td>
              <td style={styles.td}>{b.service}</td>
              <td style={styles.td}>{b.date}</td>
              <td style={{ ...styles.td, color: '#0284c7', fontWeight: '600' }}>{b.total}</td>
              <td style={styles.td}>
                <span style={styles.badge}>Active</span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.cancelBtn}
                  onClick={() => alert(`Cancelling booking ${b.id}`)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;