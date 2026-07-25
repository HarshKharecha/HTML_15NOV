import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      {success && <p style={{ color: 'green' }}>Login Successful! Redirecting...</p>}
    </div>
  );
}

export default Login;