import React from 'react';

function EmployeeList({ employees, onDelete, theme }) {
    const isDark = theme === 'dark';

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
        },
        card: {
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: isDark ? '#374151' : '#ffffff',
            color: isDark ? '#f9fafb' : '#111827',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        btn: {
            marginTop: '1rem',
            padding: '0.4rem',
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

    if (employees.length === 0) {
        return <p>No employees found.</p>;
    }

    return (
        <div style={styles.grid}>
            {employees.map((emp) => (
                <div key={emp.id} style={styles.card}>
                    <div>
                        <h3 style={{ margin: '0 0 0.5rem 0' }}>{emp.name}</h3>
                        <p style={{ margin: '0 0 0.25rem 0' }}>🏢 {emp.department}</p>
                        <p style={{ margin: 0 }}>💰 ₹{emp.salary?.toLocaleString()}</p>
                    </div>
                    {onDelete && (
                        <button style={styles.btn} onClick={() => onDelete(emp.id)}>
                            Remove
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default EmployeeList;