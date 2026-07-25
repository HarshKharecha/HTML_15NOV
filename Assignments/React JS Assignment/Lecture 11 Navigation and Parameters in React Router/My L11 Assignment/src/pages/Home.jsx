import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate('/about')}>Go to About</button>
      <button onClick={() => navigate('/contact')}>Go to Contact</button>
    </div>
  );
}

export default Home;