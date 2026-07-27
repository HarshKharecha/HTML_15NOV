import React from 'react';

function MyCourses() {
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
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    image: {
      width: '100%',
      height: '140px',
      objectFit: 'cover',
      borderRadius: '6px',
      marginBottom: '12px'
    },
    title: {
      fontSize: '1.05rem',
      fontWeight: '600',
      color: '#0f172a',
      margin: '0 0 6px 0'
    },
    instructor: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: '0 0 12px 0'
    },
    progressContainer: {
      backgroundColor: '#f1f5f9',
      borderRadius: '8px',
      height: '8px',
      overflow: 'hidden',
      marginBottom: '8px'
    },
    progressBar: (progress) => ({
      width: `${progress}%`,
      height: '100%',
      backgroundColor: '#0284c7',
      borderRadius: '8px'
    }),
    progressText: {
      fontSize: '0.8rem',
      color: '#475569',
      fontWeight: '600',
      display: 'flex',
      justifyContent: 'space-between'
    },
    button: {
      width: '100%',
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '16px'
    }
  };

  const coursesList = [
    {
      id: 'CRS-101',
      title: 'Full-Stack Web Development',
      instructor: 'Dr. Sarah Jenkins',
      progress: 75,
      modules: '18 / 24 Modules Complete',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&h=180&q=80'
    },
    {
      id: 'CRS-102',
      title: 'Data Science & Machine Learning',
      instructor: 'Prof. Alan Turing',
      progress: 40,
      modules: '8 / 20 Modules Complete',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&h=180&q=80'
    },
    {
      id: 'CRS-103',
      title: 'UI/UX Design Masterclass',
      instructor: 'Elena Rostova',
      progress: 90,
      modules: '18 / 20 Modules Complete',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&h=180&q=80'
    }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Enrolled Courses</h2>
      <div style={styles.grid}>
        {coursesList.map((c) => (
          <div key={c.id} style={styles.card}>
            <div>
              <img src={c.image} alt={c.title} style={styles.image} />
              <h4 style={styles.title}>{c.title}</h4>
              <p style={styles.instructor}>Instructor: {c.instructor}</p>
              <div style={styles.progressContainer}>
                <div style={styles.progressBar(c.progress)} />
              </div>
              <div style={styles.progressText}>
                <span>{c.modules}</span>
                <span>{c.progress}%</span>
              </div>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Resuming ${c.title}`)}
            >
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;