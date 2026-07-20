import React, { useState } from 'react';

function RestaurantBooking() {
  const [booking, setBooking] = useState({ name: '', mobile: '', guests: '', date: '' });
  const [confirmed, setConfirmed] = useState(false);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    gridRow: { display: 'flex', gap: '12px', marginBottom: '12px' },
    inputGroup: { flex: 1, display: 'flex', flexDirection: 'column' },
    label: { marginBottom: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#b45309', color: '#ffffff' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!booking.name || !booking.mobile || !booking.guests || !booking.date) {
      alert("Error: Complete coverage of fields is mandatory.");
      return;
    }
    setConfirmed(true);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 12: Restaurant Table Booking</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.gridRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Client Name</label>
            <input type="text" style={styles.input} onChange={e => setBooking({...booking, name: e.target.value})} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Contact Phone</label>
            <input type="text" style={styles.input} onChange={e => setBooking({...booking, mobile: e.target.value})} />
          </div>
        </div>
        <div style={styles.gridRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Headcount (Guests)</label>
            <input type="number" style={styles.input} onChange={e => setBooking({...booking, guests: e.target.value})} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Target Calendar Date</label>
            <input type="date" style={styles.input} onChange={e => setBooking({...booking, date: e.target.value})} />
          </div>
        </div>
        <button type="submit" style={styles.button}>Secure Table Reservation</button>
      </form>
      {confirmed && <p style={{ color: '#b45309', fontWeight: '600', marginTop: '14px', fontSize: '0.9rem' }}>🍽️ Confirmation Event: Plan acknowledged for {booking.guests} attendants on {booking.date}.</p>}
    </div>
  );
}

export default RestaurantBooking;