import React from 'react';
import { useNavigate } from 'react-router-dom';

function PatientList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Patient List</h2>
      <button onClick={() => navigate('/patient/500')}>View Patient 500</button>
    </div>
  );
}

export default PatientList;