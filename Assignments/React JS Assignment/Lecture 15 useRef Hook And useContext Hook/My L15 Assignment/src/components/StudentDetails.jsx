import React, { useContext, useEffect, useRef } from 'react';
import { StudentContext } from '../context/StudentContext';
import { ThemeContext } from '../context/ThemeContext';

function StudentDetails() {
  const { selectedStudent } = useContext(StudentContext);
  const { colors } = useContext(ThemeContext);

  // Task 14: useRef for smooth scrolling
  const detailsRef = useRef(null);

  useEffect(() => {
    if (selectedStudent && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedStudent]);

  const styles = {
    card: {
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: colors.cardBg,
      border: `2px solid ${selectedStudent ? colors.accent : colors.border}`,
      color: colors.textPrimary,
      marginTop: '1.5rem',
      transition: 'border-color 0.3s ease',
    },
    detailRow: {
      margin: '0.5rem 0',
      fontSize: '0.95rem',
    },
  };

  if (!selectedStudent) {
    return (
      <div style={styles.card} ref={detailsRef}>
        <h3>Student Details</h3>
        <p style={{ color: colors.textSecondary }}>
          Select a student from the list to view detailed profile information.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.card} ref={detailsRef}>
      <h3 style={{ marginTop: 0, color: colors.accent }}>Student Profile</h3>
      <div style={styles.detailRow}>
        <strong>Student ID:</strong> {selectedStudent.id}
      </div>
      <div style={styles.detailRow}>
        <strong>Full Name:</strong> {selectedStudent.name}
      </div>
      <div style={styles.detailRow}>
        <strong>Email Address:</strong> {selectedStudent.email}
      </div>
      <div style={styles.detailRow}>
        <strong>Enrolled Course:</strong> {selectedStudent.course}
      </div>
    </div>
  );
}

export default StudentDetails;