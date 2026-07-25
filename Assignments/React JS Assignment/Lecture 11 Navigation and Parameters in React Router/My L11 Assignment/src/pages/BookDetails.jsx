import React from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Book ID: {id}</h2>
      <p>Author: George Orwell</p>
      <p>Category: Dystopian Fiction</p>
    </div>
  );
}

export default BookDetails;