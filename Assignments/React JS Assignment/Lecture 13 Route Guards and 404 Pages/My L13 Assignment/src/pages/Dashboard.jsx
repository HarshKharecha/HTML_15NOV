import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Task 14: Logout Functionality
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const styles = {
    mainContainer: { fontFamily: 'system-ui, sans-serif', margin: '20px', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' },
    subContainer: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' },
    button: { backgroundColor: '#ef4444', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '10px 16px', cursor: 'pointer', marginTop: '12px' }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.subContainer}>
        <h2>User Dashboard</h2>
        <p>Welcome to your protected portal!</p>
        <button style={styles.button} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;