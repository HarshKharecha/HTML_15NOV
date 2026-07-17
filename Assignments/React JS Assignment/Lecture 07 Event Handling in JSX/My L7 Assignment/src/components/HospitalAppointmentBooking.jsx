import React, { useState } from 'react';

function HospitalAppointmentBooking() {
    const [appointment, setAppointment] = useState({
        patientName: '',
        doctorName: '',
        appointmentDate: ''
    });

    const [bookedAppointments, setBookedAppointments] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const styles = {
        mainContainer: { 
            padding: '24px', 
            border: '1px solid #e2e8f0', 
            borderRadius: '12px', 
            margin: '20px', 
            backgroundColor: '#f8fafc', 
            fontFamily: 'sans-serif',
            maxWidth: '500px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: { 
            color: '#0f172a', 
            borderBottom: '2px solid #e2e8f0', 
            paddingBottom: '12px', 
            margin: '0 0 20px 0', 
            fontSize: '1.5rem' 
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '20px'
        },
        input: {
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            boxSizing: 'border-box',
            fontSize: '0.95rem',
            color: '#1e293b',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
        },
        submitBtn: {
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 16px',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        },
        alertBanner: {
            padding: '10px 12px',
            backgroundColor: '#fef2f2',
            borderLeft: '4px solid #ef4444',
            color: '#991b1b',
            fontSize: '0.85rem',
            borderRadius: '4px',
            fontWeight: '500',
            marginBottom: '12px'
        },
        previewBox: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '14px',
            marginTop: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        },
        previewHeading: {
            margin: '0 0 10px 0',
            color: '#64748b',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        },
        previewLine: {
            margin: '0 0 6px 0',
            fontSize: '0.9rem',
            color: '#334155'
        },
        ticketContainer: {
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            borderTop: '1px dashed #cbd5e1',
            paddingTop: '20px'
        },
        sectionTitle: {
            margin: '0 0 4px 0',
            color: '#0f172a',
            fontSize: '1.1rem',
            fontWeight: '700'
        },
        ticketCard: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px',
            borderLeft: '4px solid #2563eb',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        },
        ticketBadge: {
            fontSize: '0.7rem',
            fontWeight: '700',
            color: '#1d4ed8',
            backgroundColor: '#dbeafe',
            padding: '2px 6px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'inline-block',
            marginBottom: '8px'
        },
        patientName: {
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#0f172a',
            margin: '0 0 10px 0'
        },
        ticketDetail: {
            margin: '0 0 6px 0',
            fontSize: '0.9rem',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (errorMsg) setErrorMsg('');
        setAppointment((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBookAppointment = () => {
        if (!appointment.patientName.trim() || !appointment.doctorName.trim() || !appointment.appointmentDate) {
            setErrorMsg('All fields are required to secure an appointment booking.');
            return;
        }

        const confirmedBooking = {
            ...appointment,
            id: Date.now()
        };

        setBookedAppointments([confirmedBooking, ...bookedAppointments]);
        setAppointment({ patientName: '', doctorName: '', appointmentDate: '' });
        setErrorMsg('');
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = '#2563eb';
        e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#cbd5e1';
        e.target.style.boxShadow = 'none';
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 19: Appointment Booking</h3>

            {errorMsg && <div style={styles.alertBanner}>⚠️ {errorMsg}</div>}

            <div style={styles.formGroup}>
                <input
                    name="patientName"
                    type="text"
                    placeholder="Patient Name"
                    value={appointment.patientName}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <input
                    name="doctorName"
                    type="text"
                    placeholder="Doctor Name"
                    value={appointment.doctorName}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <input
                    name="appointmentDate"
                    type="date"
                    value={appointment.appointmentDate}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />

                <button 
                    onClick={handleBookAppointment}
                    style={styles.submitBtn}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#1d4ed8';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563eb';
                        e.currentTarget.style.transform = 'none';
                    }}
                >
                    Book Appointment
                </button>
            </div>

            {/* Live State Tracking Preview Box */}
            <div style={styles.previewBox}>
                <h5 style={styles.previewHeading}>Live Schedule Preview</h5>
                <p style={styles.previewLine}><strong>Patient:</strong> {appointment.patientName || '—'}</p>
                <p style={styles.previewLine}><strong>Doctor:</strong> {appointment.doctorName || '—'}</p>
                <p style={{ ...styles.previewLine, margin: 0 }}><strong>Date:</strong> {appointment.appointmentDate || '—'}</p>
            </div>

            {/* Generated Appointment Schedule Listing */}
            {bookedAppointments.length > 0 && (
                <div style={styles.ticketContainer}>
                    <h4 style={styles.sectionTitle}>Confirmed Bookings ({bookedAppointments.length})</h4>
                    {bookedAppointments.map((ticket) => (
                        <div key={ticket.id} style={styles.ticketCard}>
                            <span style={styles.ticketBadge}>✓ Confirmed Appointment</span>
                            <h4 style={styles.patientName}>{ticket.patientName}</h4>
                            <p style={styles.ticketDetail}>
                                <span>👨‍⚕️</span> <span><strong>Assigned Doctor:</strong> {ticket.doctorName}</span>
                            </p>
                            <p style={{ ...styles.ticketDetail, margin: 0 }}>
                                <span>📅</span> <span><strong>Scheduled Date:</strong> {ticket.appointmentDate}</span>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HospitalAppointmentBooking;