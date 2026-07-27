import React from 'react';

function Books() {
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
      width: '80px',
      height: '110px',
      borderRadius: '6px',
      objectFit: 'cover',
      border: '1px solid #cbd5e1',
      marginBottom: '12px'
    },
    info: {
      margin: '8px 0'
    },
    title: {
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

  const booksList = [
    { id: 'BK-101', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=150&h=200&q=80', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0743273565', status: 'Available' },
    { id: 'BK-102', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=150&h=200&q=80', title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0061120084', status: 'Borrowed' },
    { id: 'BK-103', cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=150&h=200&q=80', title: '1984', author: 'George Orwell', isbn: '978-0451524935', status: 'Available' },
    { id: 'BK-104', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=150&h=200&q=80', title: 'Pride & Prejudice', author: 'Jane Austen', isbn: '978-0141439518', status: 'Reserved' },
    { id: 'BK-105', cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=150&h=200&q=80', title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-0316769480', status: 'Available' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Book Inventory</h2>
      <div style={styles.grid}>
        {booksList.map((b) => (
          <div key={b.id} style={styles.card}>
            <img src={b.cover} alt={b.title} style={styles.image} />
            <div style={styles.info}>
              <h4 style={styles.title}>{b.title}</h4>
              <p style={styles.text}><strong>Author:</strong> {b.author}</p>
              <p style={styles.text}><strong>ISBN:</strong> {b.isbn}</p>
              <p style={styles.text}>
                <strong>Status:</strong>{' '}
                <span style={{ color: b.status === 'Available' ? '#16a34a' : b.status === 'Borrowed' ? '#dc2626' : '#d97706', fontWeight: 'bold' }}>
                  {b.status}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Issue request created for ${b.title}`)}
            >
              Issue Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;