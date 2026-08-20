import React from 'react';

function EmployeeStats({ employees, theme }) {
    const totalEmployees = employees.length;
    const departments = [...new Set(employees.map((e) => e.department))].length;
    const avgSalary =
        totalEmployees > 0
            ? Math.round(employees.reduce((acc, curr) => acc + curr.salary, 0) / totalEmployees)
            : 0;

    const isDark = theme === 'dark';

    const styles = {
        container: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' },
        card: {
            flex: '1 1 150px',
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: isDark ? '#374151' : '#ffffff',
            color: isDark ? '#f9fafb' : '#111827',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box'
        },
        value: { fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0 0 0' },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div>Total Employees</div>
                <p style={styles.value}>{totalEmployees}</p>
            </div>
            <div style={styles.card}>
                <div>Departments</div>
                <p style={styles.value}>{departments}</p>
            </div>
            <div style={styles.card}>
                <div>Avg Salary</div>
                <p style={styles.value}>₹{avgSalary.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default EmployeeStats;