import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const styles = {
    pageWrapper: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '20px',
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
    description: {
      fontSize: '1.05rem',
      color: '#334155',
      lineHeight: '1.7',
      margin: 0
    }
  };

  // Mock data lookup synchronized with dynamic route ID
  const blogsData = {
    '1': {
      title: 'Understanding React Router',
      description: 'This is a detailed description of the blog post regarding dynamic routing. React Router enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.'
    }
  };

  const blog = blogsData[id];

  if (!blog) {
    return (
      <div style={{ ...styles.pageWrapper, textAlign: 'center' }}>
        <h2 style={{ color: '#dc2626' }}>Blog Post Not Found</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>The article you are looking for does not exist or has been removed.</p>
        <button style={styles.backButton} onClick={() => navigate(-1)}>← Back to Blog List</button>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
      >
        ← Back to List
      </button>

      <div style={styles.contentContainer}>
        <p style={styles.metaText}>Article ID: {id}</p>
        <h2 style={styles.heading}>{blog.title}</h2>
        <hr style={styles.divider} />
        <p style={styles.description}>{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogDetails;