import React from 'react';
import { useParams } from 'react-router-dom';

function StudentProfile() {
  const { id } = useParams();
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Student ID: {id}</p>
      <p>Student Name: Student #{id}</p>
    </div>
  );
}

export default StudentProfile;