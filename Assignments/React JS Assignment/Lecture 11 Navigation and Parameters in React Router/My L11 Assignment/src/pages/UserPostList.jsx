import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserPostList() {
  const navigate = useNavigate();
  const userId = 42;
  const postId = 105;

  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
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
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'all 0.2s ease-in-out'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    cardText: {
      fontSize: '0.95rem',
      color: '#475569',
      margin: 0
    },
    viewButton: {
      alignSelf: 'flex-start',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 18px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
      transition: 'background-color 0.2s ease'
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerSection}>
        <h2 style={styles.heading}>Dashboard</h2>
        <p style={styles.subHeading}>Access user posts, monitor details, and manage activity.</p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>User Activity Post</h3>
        <p style={styles.cardText}>
          <strong>User ID:</strong> {userId} | <strong>Post ID:</strong> {postId}
        </p>
        <button 
          style={styles.viewButton}
          onClick={() => navigate(`/more/userpostlist/user/${userId}/post/${postId}`)}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          View Post {postId} by User {userId} →
        </button>
      </div>
    </div>
  );
}

export default UserPostList;