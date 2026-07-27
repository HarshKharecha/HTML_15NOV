import React from 'react';

function FoodRestaurants() {
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
      border: '1px solid #e2e8f0',
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
    status: (isOpen) => ({
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '700',
      color: isOpen ? '#15803d' : '#991b1b',
      backgroundColor: isOpen ? '#dcfce7' : '#fee2e2'
    }),
    button: {
      width: '100%',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontWeight: '600',
      fontSize: '0.85rem',
      cursor: 'pointer',
      marginTop: '12px'
    }
  };

  const restaurants = [
    { id: 1, name: 'Burger Bistro', cuisine: 'American, Fast Food', rating: '4.8 ★', ordersToday: 42, isOpen: true },
    { id: 2, name: 'Pizza Palace', cuisine: 'Italian, Pizza', rating: '4.6 ★', ordersToday: 38, isOpen: true },
    { id: 3, name: 'Taco Temptations', cuisine: 'Mexican', rating: '4.4 ★', ordersToday: 19, isOpen: false }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Partner Restaurants</h2>
      <div style={styles.grid}>
        {restaurants.map((r) => (
          <div key={r.id} style={styles.card}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={styles.title}>{r.name}</h4>
                <span style={styles.status(r.isOpen)}>{r.isOpen ? 'Open' : 'Closed'}</span>
              </div>
              <p style={styles.text}>🍳 {r.cuisine}</p>
              <p style={styles.text}>Rating: <strong>{r.rating}</strong></p>
              <p style={styles.text}>Orders Today: <strong>{r.ordersToday}</strong></p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Managing menu for ${r.name}`)}
            >
              Manage Menu
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodRestaurants;