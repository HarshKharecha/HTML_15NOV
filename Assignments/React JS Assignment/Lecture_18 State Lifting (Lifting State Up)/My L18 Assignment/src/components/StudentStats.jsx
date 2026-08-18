import React from 'react';

const styles = {
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' },
    card: {
        backgroundColor: '#ffffff',
        padding: '1rem',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    icon: { fontSize: '2rem' },
    label: { margin: 0, fontSize: '0.85rem', color: '#64748b' },
    value: { margin: 0, fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' },
};

function StudentStats({ totalStudents, uniqueCoursesCount, selectedStudent }) {
    return (
        <div style={styles.grid}>
            <div style={styles.card}>
                <span style={styles.icon}>👨‍🎓</span>
                <div>
                    <h4 style={styles.label}>Total Students</h4>
                    <p style={styles.value}>{totalStudents}</p>
                </div>
            </div>
            <div style={styles.card}>
                <span style={styles.icon}>📚</span>
                <div>
                    <h4 style={styles.label}>Active Courses</h4>
                    <p style={styles.value}>{uniqueCoursesCount}</p>
                </div>
            </div>
            <div style={styles.card}>
                <span style={styles.icon}>📌</span>
                <div>
                    <h4 style={styles.label}>Selected Student</h4>
                    <p style={styles.value}>{selectedStudent ? selectedStudent.name : 'None'}</p>
                </div>
            </div>
        </div>
    );
}

export default StudentStats;