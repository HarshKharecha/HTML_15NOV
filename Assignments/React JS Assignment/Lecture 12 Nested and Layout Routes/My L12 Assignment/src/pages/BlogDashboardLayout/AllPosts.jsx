import React from 'react';

function AllPosts() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    heading: {
      color: '#0f172a',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '700'
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
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: status === 'Published' ? '#166534' : '#854d0e',
      backgroundColor: status === 'Published' ? '#dcfce7' : '#fef9c3'
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

  const postsList = [
    { id: 'P-101', title: 'Mastering CSS Grid and Flexbox', author: 'Jane Doe', category: 'Web Dev', status: 'Published', date: '24 Jul 2026' },
    { id: 'P-102', title: 'Introduction to AI-Driven UX', author: 'Mark Smith', category: 'Design', status: 'Draft', date: '21 Jul 2026' },
    { id: 'P-103', title: 'Optimizing Node.js Microservices', author: 'Aarav Sharma', category: 'Backend', status: 'Published', date: '15 Jul 2026' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Manage Articles & Posts</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Author</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((p) => (
            <tr key={p.id}>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{p.title}</td>
              <td style={styles.td}>{p.author}</td>
              <td style={styles.td}>{p.category}</td>
              <td style={styles.td}>
                <span style={styles.badge(p.status)}>{p.status}</span>
              </td>
              <td style={styles.td}>{p.date}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Editing article: ${p.title}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllPosts;