import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetails() {
  const { id } = useParams();
  const employees = {
    1: { name: 'Genius', role: 'Developer' },
    2: { name: 'Bob', role: 'Designer' }
  };

  const employee = employees[id];

  if (!employee) {
    return <h2>Invalid Employee ID / Employee Not Found</h2>;
  }

  return (
    <div>
      <h2>Employee Profile</h2>
      <p>ID: {id}</p>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
    </div>
  );
}

export default EmployeeDetails;