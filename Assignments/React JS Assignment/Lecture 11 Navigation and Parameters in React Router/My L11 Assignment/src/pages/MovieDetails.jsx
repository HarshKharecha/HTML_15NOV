import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Movie Details (ID: {id})</h2>
      <p>Title: Inception</p>
      <p>Release Year: 2010</p>
    </div>
  );
}

export default MovieDetails;