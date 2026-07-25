import React from 'react';
import { useParams } from 'react-router-dom';

function PatientDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Patient Information</h2>
      <p>Patient ID: {id}</p>
      <p>Condition: Stable</p>
    </div>
  );
}

export default PatientDetails;