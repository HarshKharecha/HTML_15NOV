import React from 'react';

function Subjects() {
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

  const subjects = [
    { id: 'SUB-01', title: 'Mathematics', code: 'MATH-101', department: 'Science & Math', totalModules: '12 Modules' },
    { id: 'SUB-02', title: 'Physics', code: 'PHY-201', department: 'Science & Math', totalModules: '10 Modules' },
    { id: 'SUB-03', title: 'English Literature', code: 'ENG-102', department: 'Humanities', totalModules: '8 Modules' },
    { id: 'SUB-04', title: 'Computer Science', code: 'CS-301', department: 'Technology', totalModules: '14 Modules' },
    { id: 'SUB-05', title: 'Chemistry', code: 'CHEM-202', department: 'Science & Math', totalModules: '11 Modules' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Course Curriculum</h2>
      <div style={styles.grid}>
        {subjects.map((sub) => (
          <div key={sub.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.name}>{sub.title}</h4>
              <p style={styles.text}><strong>Code:</strong> {sub.code}</p>
              <p style={styles.text}><strong>Department:</strong> {sub.department}</p>
              <p style={styles.text}><strong>Syllabus:</strong> {sub.totalModules}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Downloading syllabus for ${sub.title}`)}
            >
              View Syllabus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;