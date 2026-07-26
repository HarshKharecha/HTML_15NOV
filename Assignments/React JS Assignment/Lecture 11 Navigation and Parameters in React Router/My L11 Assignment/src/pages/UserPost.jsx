import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserPost() {
  const { userId, postId } = useParams();
  const navigate = useNavigate();

  const styles = {
    pageWrapper: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      padding: '32px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    backButton: {
      marginBottom: '24px',
      padding: '8px 16px',
      backgroundColor: '#f1f5f9',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#334155',
      transition: 'background-color 0.2s ease'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    metaText: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#2563eb',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: 0
    },
    heading: {
      color: '#0f172a',
      fontSize: '2rem',
      fontWeight: '800',
      margin: 0,
      lineHeight: '1.3'
    },
    divider: {
      border: 'none',
      borderTop: '1px solid #e2e8f0',
      margin: '8px 0 16px 0'
    },
    infoRow: {
      fontSize: '1.05rem',
      color: '#334155',
      lineHeight: '1.7',
      margin: 0
    },
    highlightBadge: {
      color: '#2563eb',
      fontWeight: 'bold',
      backgroundColor: '#eff6ff',
      padding: '2px 8px',
      borderRadius: '6px'
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <button 
        style={styles.backButton} 
        onClick={() => navigate(-1)}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
      >
        ← Back to Dashboard
      </button>

      <div style={styles.contentContainer}>
        <p style={styles.metaText}>Post Details & Metadata</p>
        <h2 style={styles.heading}>User Post Details</h2>
        <hr style={styles.divider} />
        <p style={styles.infoRow}><strong>User ID:</strong> <span style={styles.highlightBadge}>{userId}</span></p>
        <p style={styles.infoRow}><strong>Post ID:</strong> <span style={styles.highlightBadge}>{postId}</span></p>
        <p style={styles.infoRow}><strong>Combined Information:</strong> Showing Post {postId} written by User {userId}.</p>
      </div>
    </div>
  );
}

export default UserPost;