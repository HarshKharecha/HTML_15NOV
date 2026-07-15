import React from 'react'

function EmployeeList() {
    const employees = [
        { id: 'E101', name: 'Genius', department: 'Engineering' },
        { id: 'E102', name: 'Charlie', department: 'Design' },
        { id: 'E103', name: 'David', department: 'Marketing' },
        { id: 'E104', name: 'Jackson', department: 'Computer Science' }
    ];

    return (
        <div>
            <h2>Employee Directory</h2>
            {employees.map(emp => (
                <div key={emp.id} style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>
                    <p><strong>ID:</strong> {emp.id}</p>
                    <p><strong>Name:</strong> {emp.name}</p>
                    <p><strong>Department:</strong> {emp.department}</p>
                </div>
            ))}
        </div>
    )
}

export default EmployeeList