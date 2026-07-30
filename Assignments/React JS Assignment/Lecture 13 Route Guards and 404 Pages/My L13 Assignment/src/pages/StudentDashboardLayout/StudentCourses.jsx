import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentCourses() {
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

  const coursesList = [
    { id: 'C01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', course: 'B.Tech CSE', price: '₹1,50,000', duration: '4 Years' },
    { id: 'C02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', course: 'Data Science', price: '₹95,000', duration: '1 Year' },
    { id: 'C03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', course: 'MBA', price: '₹2,10,000', duration: '2 Years' },
    { id: 'C04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', course: 'UI/UX Design', price: '₹75,000', duration: '6 Months' },
    { id: 'C05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', course: 'Cyber Security', price: '₹1,20,000', duration: '1 Year' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Student Courses</h2>
      <div style={styles.grid}>
        {coursesList.map((c) => (
          <div key={c.id} style={styles.card}>
            <div>
              <img src={c.image} alt={c.name} style={styles.image} />
              <div style={styles.info}>
                <h4 style={styles.name}>{c.name}</h4>
                <p style={styles.text}><strong>Course:</strong> {c.course}</p>
                <p style={styles.text}><strong>Price:</strong> {c.price}</p>
                <p style={styles.text}><strong>Duration:</strong> {c.duration}</p>
              </div>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Viewing courses details for ${c.name} is coming soon!`)}
            >
              View Course Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCourses;