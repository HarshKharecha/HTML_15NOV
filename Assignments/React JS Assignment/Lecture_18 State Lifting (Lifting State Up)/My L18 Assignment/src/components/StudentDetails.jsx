import React from 'react';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: '1.25rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    heading: { margin: '0 0 1rem 0', fontSize: '1.1rem', color: '#1e293b' },
    card: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    avatar: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    detail: { margin: 0, color: '#334155', fontSize: '0.9rem' },
    placeholder: { color: '#64748b', fontSize: '0.9rem' },
};

function StudentDetails({ student }) {
    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Student Details</h3>
            {student ? (
                <div style={styles.card}>
                    <div style={styles.avatar}>{student.name.charAt(0)}</div>
                    <p style={styles.detail}><strong>ID:</strong> {student.id}</p>
                    <p style={styles.detail}><strong>Name:</strong> {student.name}</p>
                    <p style={styles.detail}><strong>Enrolled Course:</strong> {student.course}</p>
                    <p style={styles.detail}><strong>Status:</strong> Active</p>
                </div>
            ) : (
                <p style={styles.placeholder}>Select a student from the list to view full details.</p>
            )}
        </div>
    );
}

export default StudentDetails;