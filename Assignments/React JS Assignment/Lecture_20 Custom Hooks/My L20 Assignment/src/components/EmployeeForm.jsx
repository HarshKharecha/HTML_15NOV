import React, { useState } from 'react';

function EmployeeForm({ onAdd, theme }) {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !department) return;
        onAdd({ name, department, salary: Number(salary) || 50000 });
        setName('');
        setDepartment('');
        setSalary('');
    };

    const isDark = theme === 'dark';

    const styles = {
        form: {
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
            padding: '1rem',
            backgroundColor: isDark ? '#374151' : '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box'
        },
        input: {
            padding: '0.5rem',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            fontSize: '0.95rem',
            outline: 'none',
            flex: '1 1 150px',
        },
        button: {
            padding: '0.5rem 1rem',
            backgroundColor: '#10b981',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <input
                style={styles.input}
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                style={styles.input}
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            />
            <input
                style={styles.input}
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <button style={styles.button} type="submit">
                Add Employee
            </button>
        </form>
    );
}

export default EmployeeForm;