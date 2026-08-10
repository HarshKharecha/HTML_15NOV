import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

function Login() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);
  const { colors } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
    }
  };

  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: colors.bgPrimary,
    },
    card: {
      width: '320px',
      padding: '2rem',
      borderRadius: '12px',
      backgroundColor: colors.bgSecondary,
      border: `1px solid ${colors.border}`,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      margin: '1rem 0',
      borderRadius: '6px',
      border: `1px solid ${colors.border}`,
      backgroundColor: colors.bgPrimary,
      color: colors.textPrimary,
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: colors.accent,
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={{ color: colors.textPrimary, margin: 0 }}>Portal Access</h2>
        <input
          type="text"
          placeholder="Enter Admin Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;