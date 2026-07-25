import React from 'react';
import { useNavigate } from 'react-router-dom';

function CourseList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Course List</h2>
      <button onClick={() => navigate('/course/react-101')}>View React Course</button>
    </div>
  );
}

export default CourseList;