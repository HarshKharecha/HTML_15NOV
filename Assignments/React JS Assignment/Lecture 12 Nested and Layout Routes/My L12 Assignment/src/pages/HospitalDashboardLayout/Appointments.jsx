import React from 'react';

function Appointments() {
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
      backgroundColor: '#0284c7',
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

  const appointments = [
    { id: 'APT01', patientName: 'Ananya Mehta', doctorName: 'Dr. Rajesh Kapoor', date: '28 Jul 2026', time: '10:00 AM', status: 'Confirmed' },
    { id: 'APT02', patientName: 'Vikram Joshi', doctorName: 'Dr. Sunita Deshmukh', date: '28 Jul 2026', time: '11:30 AM', status: 'In Progress' },
    { id: 'APT03', patientName: 'Kavita Singh', doctorName: 'Dr. Amitav Roy', date: '29 Jul 2026', time: '02:00 PM', status: 'Confirmed' },
    { id: 'APT04', patientName: 'Rahul Sen', doctorName: 'Dr. Shalini Gupta', date: '29 Jul 2026', time: '04:15 PM', status: 'Pending' },
    { id: 'APT05', patientName: 'Meera Rao', doctorName: 'Dr. Kabir Malik', date: '30 Jul 2026', time: '09:30 AM', status: 'Cancelled' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Scheduled Appointments</h2>
      <div style={styles.grid}>
        {appointments.map((a) => (
          <div key={a.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.name}>{a.patientName}</h4>
              <p style={styles.text}><strong>Doctor:</strong> {a.doctorName}</p>
              <p style={styles.text}><strong>Date & Time:</strong> {a.date} | {a.time}</p>
              <p style={styles.text}>
                <strong>Status:</strong>{' '}
                <span style={{ 
                  color: a.status === 'Confirmed' ? '#16a34a' : a.status === 'In Progress' ? '#0284c7' : a.status === 'Pending' ? '#d97706' : '#dc2626', 
                  fontWeight: 'bold' 
                }}>
                  {a.status}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Managing appointment ${a.id} for ${a.patientName}`)}
            >
              Update Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;