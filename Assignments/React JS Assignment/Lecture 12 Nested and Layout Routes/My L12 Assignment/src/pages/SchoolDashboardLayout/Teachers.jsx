import React from 'react';

function Teachers() {
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
      boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
      transition: 'all 0.2s'
    },
    image: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #818cf8'
    },
    info: {
      margin: '12px 0'
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    text: {
      fontSize: '0.9rem',
      color: '#64748b',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#4338ca',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'background-color 0.2s'
    }
  };

  const teachers = [
    { id: 'T-01', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80', name: 'Mrs. Sunita Rao', subject: 'Mathematics', qualification: 'M.Sc. Mathematics', status: 'Active' },
    { id: 'T-02', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80', name: 'Mr. Rajesh Kulkarni', subject: 'Physics', qualification: 'Ph.D. Physics', status: 'Active' },
    { id: 'T-03', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80', name: 'Ms. Pooja Mehta', subject: 'English Literature', qualification: 'M.A. English', status: 'On Leave' },
    { id: 'T-04', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Mrs. Anita Joshi', subject: 'Chemistry', qualification: 'M.Sc. Chemistry', status: 'Active' },
    { id: 'T-05', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Mr. Vikram Sen', subject: 'Computer Science', qualification: 'M.Tech CSE', status: 'Active' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Faculty Directory</h2>
      <div style={styles.grid}>
        {teachers.map((t) => (
          <div key={t.id} style={styles.card}>
            <img src={t.image} alt={t.name} style={styles.image} />
            <div style={styles.info}>
              <h4 style={styles.name}>{t.name}</h4>
              <p style={styles.text}><strong>Subject:</strong> {t.subject}</p>
              <p style={styles.text}><strong>Qualification:</strong> {t.qualification}</p>
              <p style={styles.text}>
                <strong>Status:</strong>{' '}
                <span style={{ color: t.status === 'Active' ? '#16a34a' : '#d97706', fontWeight: 'bold' }}>
                  {t.status}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Contacting ${t.name}`)}
            >
              Contact Teacher
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;