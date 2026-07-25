import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={() => navigate('/movie/101')}>View Inception</button>
    </div>
  );
}

export default MovieList;