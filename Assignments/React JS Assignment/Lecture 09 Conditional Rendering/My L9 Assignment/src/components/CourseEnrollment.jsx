import React, { useState } from 'react';

function CourseEnrollment() {
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
        button: (isEnrolled) => ({
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: isEnrolled ? '#16a34a' : '#2563eb',
            color: '#ffffff'
        })
    };

    const [isEnrolled, setIsEnrolled] = useState(false);
    const handleToggleEnrollment = () => {
        setIsEnrolled((prev) => !prev);
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 14: Course Enrollment</h3>
            <button style={styles.button(isEnrolled)} onClick={handleToggleEnrollment}>
                {isEnrolled ? "Continue Learning" : "Enroll Now"}
            </button>
        </div>
    );
}

export default CourseEnrollment;