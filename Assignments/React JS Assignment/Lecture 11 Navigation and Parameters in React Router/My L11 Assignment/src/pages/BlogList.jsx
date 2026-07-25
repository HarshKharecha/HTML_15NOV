import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Blog List</h2>
      <button onClick={() => navigate('/blog/1')}>Read React Router Guide</button>
    </div>
  );
}

export default BlogList;