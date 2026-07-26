import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const styles = {
    pageWrapper: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '600px',
      margin: '30px auto',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    backButton: {
      marginBottom: '20px',
      padding: '8px 16px',
      backgroundColor: '#e2e8f0',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#334155'
    },
    heading: {
      color: '#0f172a',
      marginBottom: '20px',
      fontSize: '1.5rem'
    },
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      textAlign: 'center'
    },
    image: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #2563eb'
    },
    detailsCard: {
      width: '100%',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'left',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    name: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#1e293b',
      margin: '0 0 5px 0',
      textAlign: 'center'
    },
    rowText: {
      fontSize: '0.95rem',
      color: '#334155',
      margin: 0
    },
    errorBox: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '400px',
      margin: '50px auto',
      padding: '24px',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0'
    }
  };

  const students = {
    S01: { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', price: '₹1,50,000', status: 'Active' },
    S02: { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', price: '₹95,000', status: 'Active' },
    S03: { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', price: '₹2,10,000', status: 'Completed' },
    S04: { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', price: '₹75,000', status: 'Active' },
    S05: { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', price: '₹1,20,000', status: 'Completed' }
  };

  const student = students[id];

  if (!student) {
    return (
      <div style={styles.errorBox}>
        <h2 style={{ color: '#dc2626' }}>Student Not Found</h2>
        <button style={styles.backButton} onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>← Back</button>

      <div style={styles.profileContainer}>
        <img src={student.image} alt={student.name} style={styles.image} />

        <div style={styles.detailsCard}>
          <h2 style={styles.name}>{student.name}</h2>
          <p style={styles.rowText}><strong>Student ID:</strong> {id}</p>
          <p style={styles.rowText}><strong>Email:</strong> {student.email}</p>
          <p style={styles.rowText}><strong>Mobile:</strong> {student.mobile}</p>
          <p style={styles.rowText}><strong>Role:</strong> {student.course}</p>
          <p style={styles.rowText}><strong>City:</strong> {student.city}</p>
          <p style={styles.rowText}><strong>Price:</strong> {student.price}</p>
          <p style={styles.rowText}><strong>Status:</strong> <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{student.status}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Profile;