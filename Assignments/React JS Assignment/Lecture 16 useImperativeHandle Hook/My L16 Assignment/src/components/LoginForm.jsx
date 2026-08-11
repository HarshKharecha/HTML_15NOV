import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

const LoginForm = forwardRef(function LoginForm(props, ref) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useImperativeHandle(ref, () => ({
    resetForm() {
      setUsername('');
      setPassword('');
      if (usernameRef.current) usernameRef.current.value = '';
      if (passwordRef.current) passwordRef.current.value = '';
    },
    focusUsername() {
      usernameRef.current?.focus();
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with user: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.title}>Login Form</h3>
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Username</label>
        <input
          ref={usernameRef}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={styles.input}
        />
      </div>
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Password</label>
        <input
          ref={passwordRef}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.submitBtn}>Login</button>
    </form>
  );
});

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  title: {
    margin: '0 0 0.5rem',
    fontSize: '1.2rem',
    color: '#0f172a',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#475569',
  },
  input: {
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    outline: 'none',
  },
  submitBtn: {
    marginTop: '0.5rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default LoginForm;