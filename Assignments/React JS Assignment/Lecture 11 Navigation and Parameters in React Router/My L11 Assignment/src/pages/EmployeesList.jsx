import React from 'react'
import { useNavigate } from 'react-router-dom';

function EmployeesList() {
    const navigate = useNavigate();
    const employees = [{ id: 1, name: 'Genius' }, { id: 2, name: 'Bob' }];
    
    return (
        <div>
            <h2>Employee List</h2>
            {employees.map((emp) => (
                <button key={emp.id} onClick={() => navigate(`/employee/${emp.id}`)}>
                    View {emp.name}
                </button>
            ))}
        </div>
    )
}

export default EmployeesList