import React from 'react';
import { useFormik } from 'formik';

function FormikRegistration() {
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
      fontSize: '1.5rem', 
      fontWeight: '700' 
    },
    inputGroup: { 
      marginBottom: '16px' 
    },
    label: { 
      display: 'block', 
      marginBottom: '6px', 
      fontSize: '0.85rem', 
      fontWeight: '600', 
      color: '#475569',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    input: { 
      width: '100%', 
      padding: '10px 12px', 
      borderRadius: '8px', 
      border: '1px solid #cbd5e1', 
      fontSize: '0.95rem', 
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      transition: 'all 0.2s ease',
      outline: 'none'
    },
    button: { 
      width: '100%', 
      padding: '12px 16px', 
      borderRadius: '8px', 
      border: 'none', 
      fontWeight: '600', 
      fontSize: '1rem', 
      cursor: 'pointer', 
      backgroundColor: '#2563eb', // Standardized brand blue
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
      marginTop: '8px'
    }
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', mobile: '' },
    onSubmit: (values) => {
      console.log('Formik Submission Payload Outbound:', values);
      alert('Payload output sent to system output inspector dashboard.');
    },
  });

  // Reusable active focus styles for fields
  const handleFocus = (e) => {
    e.currentTarget.style.borderColor = '#2563eb';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
  };

  const handleBlur = (e) => {
    e.currentTarget.style.borderColor = '#cbd5e1';
    e.currentTarget.style.boxShadow = 'none';
    formik.handleBlur(e);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 19: Formik Student Registration</h3>
      
      <form onSubmit={formik.handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Student Profile Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            style={styles.input} 
            onChange={formik.handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={formik.values.name} 
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            style={styles.input} 
            onChange={formik.handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={formik.values.email} 
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input 
            id="mobile" 
            name="mobile" 
            type="text" 
            style={styles.input} 
            onChange={formik.handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={formik.values.mobile} 
          />
        </div>
        
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <span>📝</span> Register Student
        </button>
      </form>
    </div>
  );
}

export default FormikRegistration;