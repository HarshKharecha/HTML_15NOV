import React from 'react';

function Assignments() {
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
      gap: '16px'
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
    statusBadge: (status) => ({
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: status === 'Submitted' ? '#166534' : status === 'Pending' ? '#9a3412' : '#1e40af',
      backgroundColor: status === 'Submitted' ? '#dcfce7' : status === 'Pending' ? '#ffedd5' : '#dbeafe',
      marginTop: '6px'
    }),
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

  const assignmentsList = [
    {
      id: 'ASN-01',
      title: 'Build a REST API with Node.js',
      course: 'Full-Stack Web Development',
      dueDate: '30 Jul 2026',
      status: 'Pending'
    },
    {
      id: 'ASN-02',
      title: 'Exploratory Data Analysis Report',
      course: 'Data Science & Machine Learning',
      dueDate: '25 Jul 2026',
      status: 'Submitted'
    },
    {
      id: 'ASN-03',
      title: 'Figma Wireframe & Prototype',
      course: 'UI/UX Design Masterclass',
      dueDate: '02 Aug 2026',
      status: 'In Review'
    }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Course Assignments</h2>
      <div style={styles.grid}>
        {assignmentsList.map((a) => (
          <div key={a.id} style={styles.card}>
            <div>
              <h4 style={styles.title}>{a.title}</h4>
              <p style={styles.text}><strong>Course:</strong> {a.course}</p>
              <p style={styles.text}><strong>Due Date:</strong> {a.dueDate}</p>
              <span style={styles.statusBadge(a.status)}>{a.status}</span>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Opening assignment: ${a.title}`)}
            >
              {a.status === 'Submitted' ? 'View Submission' : 'Submit Assignment'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;