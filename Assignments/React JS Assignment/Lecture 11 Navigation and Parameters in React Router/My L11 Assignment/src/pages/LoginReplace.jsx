import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginReplace() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // replace: true replaces the current entry in the history stack so back button won't return to login
    navigate('/more/loginreplace/dashboard', { replace: true });
  };

  return (
    <div>
      <h2>Login Page (Secure)</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginReplace;