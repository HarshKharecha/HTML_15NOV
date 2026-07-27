import React from 'react';

function Patients() {
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

  const patients = [
    { id: 'P01', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80', name: 'Ananya Mehta', age: '32', gender: 'Female', condition: 'Hypertension', status: 'Admitted' },
    { id: 'P02', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Vikram Joshi', age: '45', gender: 'Male', condition: 'Type 2 Diabetes', status: 'Outpatient' },
    { id: 'P03', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', name: 'Kavita Singh', age: '28', gender: 'Female', condition: 'Migraine', status: 'Discharged' },
    { id: 'P04', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rahul Sen', age: '54', gender: 'Male', condition: 'Post-Op Care', status: 'Admitted' },
    { id: 'P05', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Meera Rao', age: '39', gender: 'Female', condition: 'Asthma', status: 'Outpatient' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Patient Directory</h2>
      <div style={styles.grid}>
        {patients.map((p) => (
          <div key={p.id} style={styles.card}>
            <div>
              <img src={p.image} alt={p.name} style={styles.image} />
              <div style={styles.info}>
                <h4 style={styles.name}>{p.name}</h4>
                <p style={styles.text}><strong>Age / Gender:</strong> {p.age} / {p.gender}</p>
                <p style={styles.text}><strong>Condition:</strong> {p.condition}</p>
                <p style={styles.text}>
                  <strong>Status:</strong>{' '}
                  <span style={{ color: p.status === 'Admitted' ? '#dc2626' : p.status === 'Outpatient' ? '#0284c7' : '#16a34a', fontWeight: 'bold' }}>
                    {p.status}
                  </span>
                </p>
              </div>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Opening medical chart for ${p.name}`)}
            >
              View Records
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patients;