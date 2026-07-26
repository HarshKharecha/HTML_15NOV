import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '20px',
      padding: '32px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
    },
    headerSection: {
      marginBottom: '24px',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '16px'
    },
    heading: {
      color: '#0f172a',
      fontSize: '1.75rem',
      fontWeight: '700',
      margin: '0 0 8px 0'
    },
    subHeading: {
      color: '#64748b',
      fontSize: '0.95rem',
      margin: 0
    },
    bookCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer'
    },
    bookTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    bookDetailsText: {
      fontSize: '0.95rem',
      color: '#475569',
      margin: 0
    },
    viewButton: {
      alignSelf: 'flex-start',
      backgroundColor: '#7c3aed',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 18px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(124, 58, 237, 0.2)',
      transition: 'background-color 0.2s ease'
    }
  };

  const book = {
    id: 'B001',
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian Fiction'
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerSection}>
        <h2 style={styles.heading}>Library Books</h2>
        <p style={styles.subHeading}>Explore our vast collection of literature, fiction, and academic titles.</p>
      </div>

      <div 
        style={styles.bookCard}
        onClick={() => navigate(`/book/${book.id}`)}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#7c3aed';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0px 10px 15px -3px rgba(124, 58, 237, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#e2e8f0';
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.02)';
        }}
      >
        <h3 style={styles.bookTitle}>{book.title}</h3>
        <p style={styles.bookDetailsText}><strong>Book ID:</strong> {book.id} | <strong>Author:</strong> {book.author}</p>
        <button 
          style={styles.viewButton}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/book/${book.id}`);
          }}
        >
          View Book →
        </button>
      </div>
    </div>
  );
}

export default BookList;