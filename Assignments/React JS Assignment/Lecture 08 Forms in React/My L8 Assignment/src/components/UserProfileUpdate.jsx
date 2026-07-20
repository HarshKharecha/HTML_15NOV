import React, { useState } from 'react';

function UserProfileUpdate() {
  const [name, setName] = useState('Genius');
  const [city, setCity] = useState('Ahmedabad');
  const [profession, setProfession] = useState('Developer');
  const [profile, setProfile] = useState({ name, city, profession });

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '14px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#059669', color: '#ffffff' },
    card: { marginTop: '20px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ name, city, profession });
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 6: User Profile Update</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Display Name</label>
          <input type="text" style={styles.input} value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Current City</label>
          <input type="text" style={styles.input} value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Profession</label>
          <input type="text" style={styles.input} value={profession} onChange={e => setProfession(e.target.value)} />
        </div>
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#047857'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#059669'}
        >
          Save Changes
        </button>
      </form>
      <div style={styles.card}>
        <h4 style={{ margin: '0 0 8px 0', color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase' }}>Active Profile Card</h4>
        <p style={{ margin: '4px 0' }}>👤 <strong>{profile.name}</strong> ({profile.profession})</p>
        <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#64748b' }}>📍 Based in {profile.city}</p>
      </div>
    </div>
  );
}

export default UserProfileUpdate;