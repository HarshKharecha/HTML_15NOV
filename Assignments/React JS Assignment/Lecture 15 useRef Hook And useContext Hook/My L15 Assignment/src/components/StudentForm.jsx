import React, { useState, useContext, useRef, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { ThemeContext } from '../context/ThemeContext';

function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const { colors } = useContext(ThemeContext);

  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [errorMsg, setErrorMsg] = useState('');

  // Task 11: Auto Focus Invalid Field using useRef
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);

  // Task 12: Render Counter without triggering re-renders
  const renderCounterRef = useRef(1);

  useEffect(() => {
    renderCounterRef.current += 1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Form Validation logic
    if (!formData.name.trim()) {
      setErrorMsg('Student name is required!');
      nameRef.current.focus();
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('A valid email address is required!');
      emailRef.current.focus();
      return;
    }
    if (!formData.course.trim()) {
      setErrorMsg('Course designation is required!');
      courseRef.current.focus();
      return;
    }

    addStudent(formData);
    setFormData({ name: '', email: '', course: '' });
  };

  const styles = {
    formCard: {
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: colors.cardBg,
      border: `1px solid ${colors.border}`,
      marginBottom: '1.5rem',
      color: colors.textPrimary,
    },
    title: {
      marginTop: 0,
      marginBottom: '1rem',
      fontSize: '1.1rem',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginBottom: '1rem',
    },
    input: {
      padding: '0.6rem',
      borderRadius: '6px',
      border: `1px solid ${colors.border}`,
      backgroundColor: colors.bgPrimary,
      color: colors.textPrimary,
    },
    button: {
      padding: '0.6rem 1.2rem',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: colors.accent,
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    error: {
      color: '#ef4444',
      fontSize: '0.85rem',
      marginBottom: '0.5rem',
    },
    counter: {
      fontSize: '0.75rem',
      color: colors.textSecondary,
      marginTop: '0.75rem',
    },
  };

  return (
    <div style={styles.formCard}>
      <h3 style={styles.title}>Add New Student</h3>
      {errorMsg && <div style={styles.error}>{errorMsg}</div>}
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={styles.input}
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={styles.input}
          />
          <input
            ref={courseRef}
            type="text"
            placeholder="Enrolled Course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Register Student
        </button>
      </form>
      <div style={styles.counter}>
        Form Component Render Count: {renderCounterRef.current}
      </div>
    </div>
  );
}

export default StudentForm;