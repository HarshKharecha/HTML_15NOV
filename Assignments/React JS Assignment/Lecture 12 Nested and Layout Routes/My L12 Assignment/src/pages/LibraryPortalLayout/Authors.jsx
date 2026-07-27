import React from 'react';

function Authors() {
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

  const authorsList = [
    { id: 'AUT-01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Harper Lee', genre: 'Fiction', booksPublished: 2, status: 'Historical' },
    { id: 'AUT-02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'George Orwell', genre: 'Dystopian', booksPublished: 12, status: 'Historical' },
    { id: 'AUT-03', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80', name: 'J.K. Rowling', genre: 'Fantasy', booksPublished: 21, status: 'Active' },
    { id: 'AUT-04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Stephen King', genre: 'Horror', booksPublished: 65, status: 'Active' },
    { id: 'AUT-05', image: 'https://images.unsplash.com/photo-1580894732468-ad24f60e330e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Agatha Christie', genre: 'Mystery', booksPublished: 85, status: 'Historical' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Registered Authors</h2>
      <div style={styles.grid}>
        {authorsList.map((a) => (
          <div key={a.id} style={styles.card}>
            <img src={a.image} alt={a.name} style={styles.image} />
            <div style={styles.info}>
              <h4 style={styles.name}>{a.name}</h4>
              <p style={styles.text}><strong>Primary Genre:</strong> {a.genre}</p>
              <p style={styles.text}><strong>Books in Library:</strong> {a.booksPublished}</p>
              <p style={styles.text}><strong>Status:</strong> {a.status}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Showing bibliography for ${a.name}`)}
            >
              View Bibliography
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Authors;