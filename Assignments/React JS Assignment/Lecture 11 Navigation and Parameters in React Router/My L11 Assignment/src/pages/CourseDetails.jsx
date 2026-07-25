import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Course ID: {id}</h2>
      <p>Instructor: John Doe</p>
      <p>Duration: 6 Weeks</p>
    </div>
  );
}

export default CourseDetails;