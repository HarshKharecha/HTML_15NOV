import React from 'react';

function Categories() {
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
    icon: {
      fontSize: '2rem',
      marginBottom: '8px'
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

  const categoriesList = [
    { id: 'CAT-01', icon: '🧪', name: 'Science & Tech', count: '1,420 Titles', location: 'Wing A - Floor 2' },
    { id: 'CAT-02', icon: '🏛️', name: 'History & Politics', count: '890 Titles', location: 'Wing B - Floor 1' },
    { id: 'CAT-03', icon: '🎨', name: 'Arts & Literature', count: '2,150 Titles', location: 'Wing C - Floor 1' },
    { id: 'CAT-04', icon: '🔮', name: 'Sci-Fi & Fantasy', count: '1,100 Titles', location: 'Wing A - Floor 3' },
    { id: 'CAT-05', icon: '💼', name: 'Business & Finance', count: '650 Titles', location: 'Wing B - Floor 2' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Genre & Classification Categories</h2>
      <div style={styles.grid}>
        {categoriesList.map((c) => (
          <div key={c.id} style={styles.card}>
            <div style={styles.icon}>{c.icon}</div>
            <div style={styles.info}>
              <h4 style={styles.name}>{c.name}</h4>
              <p style={styles.text}><strong>Total Collection:</strong> {c.count}</p>
              <p style={styles.text}><strong>Location:</strong> {c.location}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Browsing section: ${c.name}`)}
            >
              Browse Category
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;