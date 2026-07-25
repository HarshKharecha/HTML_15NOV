import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Library Books</h2>
      <button onClick={() => navigate('/book/B001')}>View Book B001</button>
    </div>
  );
}

export default BookList;