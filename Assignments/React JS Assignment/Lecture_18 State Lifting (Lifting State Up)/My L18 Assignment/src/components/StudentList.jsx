import React from 'react';

const styles = {
    container: {
        flex: 2,
        backgroundColor: '#ffffff',
        padding: '1.25rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    heading: { margin: '0 0 1rem 0', fontSize: '1.1rem', color: '#1e293b' },
    empty: { color: '#64748b', fontStyle: 'italic' },
    list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        border: '1px solid #e2e8f0',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    selectedItem: { backgroundColor: '#eff6ff', borderColor: '#3b82f6' },
    courseTag: {
        marginLeft: '0.5rem',
        fontSize: '0.75rem',
        backgroundColor: '#f1f5f9',
        padding: '0.2rem 0.5rem',
        borderRadius: '4px',
        color: '#475569',
    },
    selectBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#3b82f6',
        fontWeight: '600',
        cursor: 'pointer',
    },
};

function StudentList({ students, selectedStudentId, onSelectStudent }) {
    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Student List</h3>
            {students.length === 0 ? (
                <p style={styles.empty}>No students found.</p>
            ) : (
                <ul style={styles.list}>
                    {students.map((student) => {
                        const isSelected = student.id === selectedStudentId;
                        return (
                            <li
                                key={student.id}
                                onClick={() => onSelectStudent(student)}
                                style={{
                                    ...styles.item,
                                    ...(isSelected ? styles.selectedItem : {}),
                                }}
                            >
                                <div>
                                    <strong>{student.name}</strong>
                                    <span style={styles.courseTag}>{student.course}</span>
                                </div>
                                <button style={styles.selectBtn}>
                                    {isSelected ? 'Active' : 'Select'}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default StudentList;