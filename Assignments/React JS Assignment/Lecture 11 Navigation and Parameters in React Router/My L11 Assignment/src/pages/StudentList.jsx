import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const navigate = useNavigate();
  const students = [
    { id: 1, name: 'Genius' },
    { id: 2, name: 'Jane' }
  ];

  return (
    <div>
      <h2>Student Cards</h2>
      {students.map((s) => (
        <div key={s.id} onClick={() => navigate(`/student/${s.id}`)} style={{ border: '1px solid black', margin: '10px', padding: '10px', cursor: 'pointer' }}>
          <h3>{s.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default StudentList;