import React from 'react';

const styles = {
    container: { display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 },
    label: { fontSize: '0.875rem', fontWeight: '600', color: '#334155' },
    select: {
        padding: '0.5rem 0.75rem',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        fontSize: '0.9rem',
        backgroundColor: '#ffffff',
    },
};

function CourseFilter({ selectedCourse, onCourseChange, courses }) {
    return (
        <div style={styles.container}>
            <label style={styles.label}>📚 Filter by Course</label>
            <select
                value={selectedCourse}
                onChange={(e) => onCourseChange(e.target.value)}
                style={styles.select}
            >
                <option value="All">All Courses</option>
                {courses.map((course) => (
                    <option key={course} value={course}>
                        {course}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CourseFilter;