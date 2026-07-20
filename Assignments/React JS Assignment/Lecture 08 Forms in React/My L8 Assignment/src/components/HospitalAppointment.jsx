import React, { useState } from 'react';

function HospitalAppointment() {
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '14px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#dc2626', color: '#ffffff' },
    ticket: { marginTop: '20px', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '8px', padding: '16px', color: '#991b1b' }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!patient || !doctor || !date) return alert("System Warning: Data structure must be entirely complete.");
    setDetails({ patient, doctor, date });
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 11: Hospital Appointment Form</h3>
      <form onSubmit={handleBooking}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Patient Name</label>
          <input type="text" style={styles.input} value={patient} onChange={e => setPatient(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Assigned Medical Specialist</label>
          <input type="text" style={styles.input} value={doctor} onChange={e => setDoctor(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Clinical Reservation Date</label>
          <input type="date" style={styles.input} value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <button type="submit" style={styles.button}>Allocate Medical Slot</button>
      </form>
      {details && (
        <div style={styles.ticket}>
          <h4 style={{ margin: '0 0 6px 0' }}>🏥 Medical Slot Confirmed</h4>
          <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>Patient: {details.patient} ↔ Practitioner: {details.doctor} ↔ Scheduled Window: {details.date}</p>
        </div>
      )}
    </div>
  );
}

export default HospitalAppointment;