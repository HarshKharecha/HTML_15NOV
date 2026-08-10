import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { ThemeContext } from '../context/ThemeContext';

function StudentList() {
  const { students, searchQuery, selectedStudent, setSelectedStudent } =
    useContext(StudentContext);
  const { colors } = useContext(ThemeContext);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      borderRadius: '6px',
      backgroundColor: colors.cardBg,
      border: `1px solid ${colors.border}`,
      cursor: 'pointer',
      color: colors.textPrimary,
      transition: 'background-color 0.2s ease',
    },
    selectedRow: {
      borderLeft: `4px solid ${colors.accent}`,
      backgroundColor: colors.accent + '10',
    },
  };

  return (
    <div style={styles.container}>
      {filteredStudents.length === 0 ? (
        <div style={{ color: colors.textSecondary, textAlign: 'center', padding: '1rem' }}>
          No students found matching current query.
        </div>
      ) : (
        filteredStudents.map((student) => {
          const isSelected = selectedStudent?.id === student.id;
          return (
            <div
              key={student.id}
              style={{
                ...styles.row,
                ...(isSelected ? styles.selectedRow : {}),
              }}
              onClick={() => setSelectedStudent(student)}
            >
              <div>
                <strong>{student.name}</strong>
                <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>
                  {student.email}
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', color: colors.accent }}>
                {student.course}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}

export default StudentList;