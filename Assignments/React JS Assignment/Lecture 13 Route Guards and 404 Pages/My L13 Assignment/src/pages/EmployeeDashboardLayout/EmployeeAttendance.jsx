import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeAttendance() {
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

  const attendanceList = [
    { id: 'AT01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', presentDays: '22 Days', absentDays: '0 Days', status: 'Present' },
    { id: 'AT02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', presentDays: '20 Days', absentDays: '2 Days', status: 'Present' },
    { id: 'AT03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', presentDays: '21 Days', absentDays: '1 Day', status: 'Present' },
    { id: 'AT04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', presentDays: '15 Days', absentDays: '7 Days', status: 'On Leave' },
    { id: 'AT05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', presentDays: '22 Days', absentDays: '0 Days', status: 'Present' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Attendance Records</h2>
      <div style={styles.grid}>
        {attendanceList.map((a) => (
          <div key={a.id} style={styles.card}>
            <div>
              <img src={a.image} alt={a.name} style={styles.image} />
              <div style={styles.info}>
                <h4 style={styles.name}>{a.name}</h4>
                <p style={styles.text}><strong>Present:</strong> {a.presentDays}</p>
                <p style={styles.text}><strong>Absent:</strong> {a.absentDays}</p>
                <p style={styles.text}><strong>Status:</strong> <span style={{ color: a.status === 'Present' ? '#16a34a' : '#d97706', fontWeight: 'bold' }}>{a.status}</span></p>
              </div>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Viewing full log for ${a.name}`)}
            >
              View Attendance Log
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeAttendance;