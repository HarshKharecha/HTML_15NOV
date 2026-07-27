import React from 'react';

function Hotels() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px'
    },
    card: {
      backgroundColor: '#f8fafc',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: '1.05rem',
      fontWeight: '700',
      color: '#0f172a',
      margin: '0 0 4px 0'
    },
    text: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: '4px 0'
    },
    price: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#0284c7',
      margin: '8px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '12px'
    }
  };

  const hotelList = [
    { id: 1, name: 'Grand Plaza Resort', location: 'Bali, Indonesia', rating: '4.9 ★', price: '$210 / night' },
    { id: 2, name: 'The Ritz Executive', location: 'London, UK', rating: '4.8 ★', price: '$450 / night' },
    { id: 3, name: 'Sakura Boutique Hotel', location: 'Kyoto, Japan', rating: '4.7 ★', price: '$180 / night' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Partner Hotels & Accommodations</h2>
      <div style={styles.grid}>
        {hotelList.map((h) => (
          <div key={h.id} style={styles.card}>
            <div>
              <h4 style={styles.title}>{h.name}</h4>
              <p style={styles.text}>📍 {h.location}</p>
              <p style={styles.text}>Rating: <strong>{h.rating}</strong></p>
              <p style={styles.price}>{h.price}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Reserving room at ${h.name}`)}
            >
              Reserve Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;