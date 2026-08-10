import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { ThemeContext } from '../context/ThemeContext';

function Stats() {
    const { students, selectedStudent, searchQuery, submissionCount } = useContext(StudentContext);
    const { colors } = useContext(ThemeContext);

    const filteredStudents = students.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalCourses = new Set(students.map((s) => s.course)).size;

    const selectedStudentColor = selectedStudent ? '#16a34a' : '#ef4444';
    const submissionColor = submissionCount > 0 ? '#16a34a' : '#3b82f6';

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem',
        },
        card: {
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            color: colors.textPrimary,
        },
        title: {
            fontSize: '0.75rem',
            color: colors.textSecondary,
            textTransform: 'uppercase',
        },
        value: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginTop: '0.25rem',
        },
        statusColors: [
            colors.accent,              // 0: Total Students
            '#16a34a',              // 1: Total Courses & Search Results
            selectedStudentColor,   // 2: Selected Student
            submissionColor         // 3: Form Submissions
        ]
    };

    return (
        <div style={styles.grid}>
            <div style={styles.card}>
                <div style={styles.title}>Total Students</div>
                <div style={{ ...styles.value, color: styles.statusColors[0] }}>{students.length}</div>
            </div>
            <div style={styles.card}>
                <div style={styles.title}>Total Courses</div>
                <div style={{ ...styles.value, color: styles.statusColors[1] }}>{totalCourses}</div>
            </div>
            <div style={styles.card}>
                <div style={styles.title}>Search Results</div>
                <div style={{ ...styles.value, color: styles.statusColors[1] }}>{filteredStudents.length}</div>
            </div>
            <div style={styles.card}>
                <div style={styles.title}>Selected Student</div>
                <div style={{ ...styles.value, fontSize: '1rem', color: styles.statusColors[2], marginTop: '0.5rem' }}>
                    {selectedStudent ? selectedStudent.name : 'None'}
                </div>
            </div>
            <div style={styles.card}>
                <div style={styles.title}>Form Submissions</div>
                <div style={{ ...styles.value, color: styles.statusColors[3] }}>{submissionCount}</div>
            </div>
        </div>
    );
}

export default Stats;