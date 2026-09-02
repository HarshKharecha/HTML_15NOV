import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const styles = {
  banner: {
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    border: '1px solid #334155'
  },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  select: {
    padding: '0.4rem',
    borderRadius: '4px',
    backgroundColor: '#0f172a',
    color: '#fff',
    border: '1px solid #475569',
    marginRight: '0.5rem'
  },
  btnAdmin: {
    padding: '0.5rem 1rem',
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '0.5rem'
  },
  btnUser: {
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  btnLogout: {
    padding: '0.5rem 1rem',
    backgroundColor: '#475569',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: { color: '#ef4444', fontSize: '0.875rem', fontWeight: 'bold' }
};

function LoginBanner() {
  const { user, authError, login, logout, usersList } = useAuth();
  const [selectedUserId, setSelectedUserId] = useState(1);

  if (!user) {
    return (
      <div style={styles.banner}>
        <div style={styles.row}>
          <span>Select Authentication Role to proceed:</span>
          <div>
            <button style={styles.btnAdmin} onClick={() => login('admin')}>
              Login as Admin
            </button>
            <select
              style={styles.select}
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(Number(e.target.value))}
            >
              {usersList.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} {u.isBlocked ? '(Blocked)' : ''}
                </option>
              ))}
            </select>
            <button style={styles.btnUser} onClick={() => login('user', selectedUserId)}>
              Login as User
            </button>
          </div>
        </div>
        {authError && <div style={styles.error}>{authError}</div>}
      </div>
    );
  }

  return (
    <div style={styles.banner}>
      <div style={styles.row}>
        <div>
          Logged in as: <strong>{user.name}</strong> ({user.role.toUpperCase()})
        </div>
        <button style={styles.btnLogout} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default LoginBanner;