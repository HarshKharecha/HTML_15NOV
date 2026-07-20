import React, { useState } from 'react';

function EmployeeRegistration() {
  const [empName, setEmpName] = useState('');
  const [dept, setDept] = useState('');
  const [salary, setSalary] = useState('');
  const [error, setError] = useState('');
  const [employee, setEmployee] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '14px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff' },
    errorText: { color: '#dc2626', fontSize: '0.85rem', margin: '10px 0 0 0', fontWeight: '600' },
    displayPanel: { marginTop: '20px', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!empName || !dept || !salary) {
      setError('⚡ Action Blocked: All registration fields are completely mandatory.');
      setEmployee(null);
      return;
    }
    setError('');
    setEmployee({ empName, dept, salary });
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 5: Employee Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Employee Name</label>
          <input type="text" style={styles.input} value={empName} onChange={e => setEmpName(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Department</label>
          <input type="text" style={styles.input} value={dept} onChange={e => setDept(e.target.value)} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Monthly Salary</label>
          <input type="number" style={styles.input} value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Register Employee
        </button>
      </form>
      {error && <p style={styles.errorText}>{error}</p>}
      {employee && (
        <div style={styles.displayPanel}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#475569' }}>Registered Profile</h4>
          <p style={{ margin: '4px 0' }}><strong>Name:</strong> {employee.empName} | <strong>Dept:</strong> {employee.dept} | <strong>Salary:</strong> ₹{employee.salary}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeRegistration;