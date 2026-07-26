import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
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
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out'
    },
    image: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '1px solid #cbd5e1',
    },
    info: {
      margin: '9px auto',
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
      margin: 0
    }
  };

  const students = [
    { id: 'S01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', price: '₹1,50,000', status: 'Active' },
    { id: 'S02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', price: '₹95,000', status: 'Active' },
    { id: 'S03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', price: '₹2,10,000', status: 'Completed' },
    { id: 'S04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', price: '₹75,000', status: 'Active' },
    { id: 'S05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', price: '₹1,20,000', status: 'Completed' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Student Dashboard</h2>
      <div style={styles.grid}>
        {students.map((s) => (
          <div
            key={s.id}
            style={styles.card}
            onClick={() => navigate(`/profile/${s.id}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.boxShadow = '0px 10px 15px -3px rgba(37, 99, 235, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              const texts = e.currentTarget.querySelectorAll('h4, p');
              texts.forEach(el => el.style.color = '#ffffff');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0px 4px 6px -1px rgba(0,0,0,0.02)';
              e.currentTarget.style.transform = 'translateY(0px)';
              const nameEl = e.currentTarget.querySelector('h4');
              const pEls = e.currentTarget.querySelectorAll('p');
              if (nameEl) nameEl.style.color = '#1e293b';
              pEls.forEach(el => el.style.color = '#64748b');
            }}
          >
            <img src={s.image} alt={s.name} style={styles.image} />
            <div style={styles.info}>
              <h4 style={styles.name}>{s.name}</h4>
              <p style={styles.text}><strong>Course:</strong> {s.course}</p>
              <p style={styles.text}><strong>City:</strong> {s.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;