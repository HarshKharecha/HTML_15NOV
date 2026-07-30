import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentAssignments() {
  const navigate = useNavigate();
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      margin: '20px',
      padding: '24px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      border: '1px solid #e2e8f0'
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
      backgroundColor: '#ffffff',
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
      border: '1px solid #cbd5e1'
    },
    info: {
      margin: '9px auto'
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
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      margin: '9px auto',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'background-color 0.2s'
    }
  };

  const assignmentsList = [
    { id: 'A01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', task: 'React Router Setup', deadline: 'Tomorrow', status: 'Pending' },
    { id: 'A02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', task: 'Data Pipeline Lab', deadline: 'In 3 Days', status: 'Pending' },
    { id: 'A03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', task: 'Business Case Study', deadline: 'Submitted', status: 'Completed' },
    { id: 'A04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', task: 'Wireframe Prototype', deadline: 'In 2 Days', status: 'Pending' },
    { id: 'A05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', task: 'Network Audit Lab', deadline: 'Submitted', status: 'Completed' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Student Assignments</h2>
      <div style={styles.grid}>
        {assignmentsList.map((a) => (
          <div key={a.id} style={styles.card}>
            <div>
              <img src={a.image} alt={a.name} style={styles.image} />
              <div style={styles.info}>
                <h4 style={styles.name}>{a.name}</h4>
                <p style={styles.text}><strong>Task:</strong> {a.task}</p>
                <p style={styles.text}><strong>Deadline:</strong> {a.deadline}</p>
                <p style={styles.text}><strong>Status:</strong> <span style={{ color: a.status === 'Completed' ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>{a.status}</span></p>
              </div>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Viewing assignments details for ${a.name} is coming soon!`)}
            >
              View Assignment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentAssignments;