import React from 'react';

function MovieTicketBooking() {
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
        statusBox: (available) => ({
            backgroundColor: available ? '#dcfce7' : '#fee2e2',
            color: available ? '#15803d' : '#b91c1c',
            border: `1px solid ${available ? '#86efac' : '#fca5a5'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '700'
        })
    };

    const ticketsAvailable = false;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 10: Movie Ticket Booking</h3>
            <div style={styles.statusBox(ticketsAvailable)}>
                {ticketsAvailable ? "Tickets Available" : "House Full"}
            </div>
        </div>
    );
}

export default MovieTicketBooking;