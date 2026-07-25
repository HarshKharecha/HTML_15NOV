import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeProfile() {
  const { id } = useParams();
  return (
    <div>
      <h2>Employee ID: {id}</h2>
      <p>Department: Engineering</p>
      <p>Designation: Senior Software Engineer</p>
    </div>
  );
}

export default EmployeeProfile;