import React, { useState, useEffect } from 'react';

function UserList() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    userli: {
      fontSize: '1.15rem',
      color: '#475569'
    }
  }

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Task 5: Fetch users once on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 5: User List (API Fetch)</h3>
      {loading ? <p>Loading users...</p> : (
        <ul>
          {users.slice(0, 5).map(user => (
            <li key={user.id} style={styles.userli}>{user.name} ({user.email})</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;