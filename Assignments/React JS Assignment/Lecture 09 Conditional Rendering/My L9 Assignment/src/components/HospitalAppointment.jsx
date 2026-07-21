import React from 'react';

function HospitalAppointment() {
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
        statusBox: (confirmed) => ({
            backgroundColor: confirmed ? '#dcfce7' : '#fef3c7',
            color: confirmed ? '#15803d' : '#92400e',
            border: `1px solid ${confirmed ? '#86efac' : '#fde68a'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '700'
        })
    };

    const appointmentConfirmed = true;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 15: Hospital Appointment</h3>
            <div style={styles.statusBox(appointmentConfirmed)}>
                {appointmentConfirmed ? "Appointment Confirmed" : "Appointment Pending"}
            </div>
        </div>
    );
}

export default HospitalAppointment;