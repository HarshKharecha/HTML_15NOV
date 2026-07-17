import React from 'react';

function DeleteEmployee() {
    const styles = {
        cardContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 20px 0',
            fontSize: '1.4rem'
        },
        profileBox: {
            width: '290px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '20px'
        },
        dataRow: {
            margin: '0 0 10px 0',
            fontSize: '0.95rem',
            color: '#334155',
            display: 'flex',
            alignItems: 'center'
        },
        label: {
            fontWeight: '600',
            color: '#64748b',
            width: '70px',
            display: 'inline-block'
        },
        button: {
            // width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            backgroundColor: '#dc2626', // Modern red color
            color: '#ffffff',
            transition: 'background-color 0.2s ease',
            boxShadow: '0 2px 4px rgba(220, 38, 38, 0.2)'
        }
    };

    const employee = {
        id: 'EMP-404',
        name: 'John Doe',
        department: 'Engineering'
    };

    const handleDelete = (empId) => {
        alert(`Employee with ID: ${empId} has been successfully deleted.`);
        console.log(`Deleted Employee ID: ${empId}`);
    };

    return (
        <div style={styles.cardContainer}>
            <h3 style={styles.heading}>Task 12: Delete Employee</h3>

            <div style={styles.profileBox}>
                <p style={styles.dataRow}>
                    <span style={styles.label}>ID:</span>
                    <code>{employee.id}</code>
                </p>
                <p style={styles.dataRow}>
                    <span style={styles.label}>Name:</span>
                    <strong>{employee.name}</strong>
                </p>
                <p style={{ ...styles.dataRow, margin: 0 }}>
                    <span style={styles.label}>Dept:</span>
                    {employee.department}
                </p>
            </div>

            <button
                style={styles.button}
                onClick={() => handleDelete(employee.id)}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
            >
                Delete Employee
            </button>
        </div>
    );
}

export default DeleteEmployee;