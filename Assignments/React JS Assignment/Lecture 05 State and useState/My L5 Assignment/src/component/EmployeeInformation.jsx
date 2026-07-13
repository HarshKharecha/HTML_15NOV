import React, { useState } from 'react'

function EmployeeInformation() {
    const [empName, setEmpName] = useState('Genius');
    const [department, setDepartment] = useState('HR');
    const [salary, setSalary] = useState(50000);

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingdepartment, setIsEditingdepartment] = useState(false);
    const [isEditingsalary, setIsEditingsalary] = useState(false);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 19: Employee Details</h3>
            <p><strong>Name:</strong> {isEditingName ? (
                    <input type="text" value={empName} onChange={(e) => setEmpName(e.target.value)} />
                ) : (empName)
                }</p>
            <p><strong>Department:</strong> {isEditingdepartment ? (
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                ) : (department)
                }</p>
            <p><strong>Salary:</strong> ₹{isEditingsalary ? (
                    <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
                ) : (salary)
                }</p>

            <button onClick={() => setIsEditingName(!isEditingName)}>{isEditingName ? 'Save Name' : 'Update Name'}</button>
            <button onClick={() => setIsEditingdepartment(!isEditingdepartment)} style={{ marginLeft: '10px' }}>{isEditingdepartment ? 'Save Department' : 'Update Department'}</button>
            <button onClick={() => setIsEditingsalary(!isEditingsalary)} style={{ marginLeft: '10px' }}>{isEditingsalary ? 'Save Salary' : 'Update Salary'}</button>
        </div>
    )
}

export default EmployeeInformation