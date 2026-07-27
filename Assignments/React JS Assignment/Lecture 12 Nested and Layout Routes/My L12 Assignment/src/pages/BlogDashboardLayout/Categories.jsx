import React from 'react';

function Categories() {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f8fafc',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f172a',
      margin: '0 0 6px 0'
    },
    text: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: '4px 0'
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
      marginTop: '14px'
    }
  };

  const categoriesList = [
    { id: 'CAT-01', name: 'Web Development', totalPosts: 45, slug: '/web-dev' },
    { id: 'CAT-02', name: 'UI/UX Design', totalPosts: 28, slug: '/design' },
    { id: 'CAT-03', name: 'DevOps & Cloud', totalPosts: 19, slug: '/devops' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Post Categories</h2>
      <div style={styles.grid}>
        {categoriesList.map((cat) => (
          <div key={cat.id} style={styles.card}>
            <div>
              <h4 style={styles.title}>📁 {cat.name}</h4>
              <p style={styles.text}><strong>Articles:</strong> {cat.totalPosts}</p>
              <p style={styles.text}><strong>Slug:</strong> {cat.slug}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Managing category: ${cat.name}`)}
            >
              Edit Category
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;