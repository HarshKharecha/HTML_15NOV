import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <input type="text" placeholder="Username" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;