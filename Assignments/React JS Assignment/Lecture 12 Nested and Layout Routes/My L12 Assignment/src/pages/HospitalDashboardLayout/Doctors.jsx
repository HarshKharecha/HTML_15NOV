import React from 'react';

function Doctors() {
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

  const doctors = [
    { id: 'D01', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Dr. Rajesh Kapoor', specialty: 'Cardiology', experience: '12 Years', status: 'Available' },
    { id: 'D02', image: 'https://images.unsplash.com/photo-1594824813566-88855ce78347?auto=format&fit=crop&w=150&h=150&q=80', name: 'Dr. Sunita Deshmukh', specialty: 'Pediatrics', experience: '9 Years', status: 'In Surgery' },
    { id: 'D03', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&h=150&q=80', name: 'Dr. Amitav Roy', specialty: 'Neurology', experience: '15 Years', status: 'Available' },
    { id: 'D04', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&h=150&q=80', name: 'Dr. Shalini Gupta', specialty: 'Orthopedics', experience: '8 Years', status: 'On Leave' },
    { id: 'D05', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Dr. Kabir Malik', specialty: 'Dermatology', experience: '6 Years', status: 'Available' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Doctors Directory</h2>
      <div style={styles.grid}>
        {doctors.map((d) => (
          <div key={d.id} style={styles.card}>
            <div>
              <img src={d.image} alt={d.name} style={styles.image} />
              <div style={styles.info}>
                <h4 style={styles.name}>{d.name}</h4>
                <p style={styles.text}><strong>Specialty:</strong> {d.specialty}</p>
                <p style={styles.text}><strong>Experience:</strong> {d.experience}</p>
                <p style={styles.text}>
                  <strong>Status:</strong>{' '}
                  <span style={{ color: d.status === 'Available' ? '#16a34a' : d.status === 'In Surgery' ? '#d97706' : '#64748b', fontWeight: 'bold' }}>
                    {d.status}
                  </span>
                </p>
              </div>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Scheduling appointment with ${d.name}`)}
            >
              Book Consultation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;