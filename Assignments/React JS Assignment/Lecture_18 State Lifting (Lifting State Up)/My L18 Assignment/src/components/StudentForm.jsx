import React from 'react';

const styles = {
    form: {
        backgroundColor: '#ffffff',
        padding: '1.25rem',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '1.5rem',
    },
    heading: { margin: '0 0 1rem 0', fontSize: '1.1rem', color: '#1e293b' },
    inputGroup: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
    input: {
        flex: 1,
        minWidth: '200px',
        padding: '0.5rem 0.75rem',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
    },
    button: {
        backgroundColor: '#10b981',
        color: '#ffffff',
        border: 'none',
        padding: '0.5rem 1.25rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
    },
};

function StudentForm({ formData, onFormChange, onAddStudent }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.course.trim()) {
            alert('Please fill out all fields.');
            return;
        }
        onAddStudent();
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={styles.heading}>➕ Add New Student</h3>
            <div style={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={formData.name}
                    onChange={(e) => onFormChange('name', e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Course Name"
                    value={formData.course}
                    onChange={(e) => onFormChange('course', e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Add Student</button>
            </div>
        </form>
    );
}

export default StudentForm;