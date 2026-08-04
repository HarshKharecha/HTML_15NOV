import React, { useState, useEffect } from 'react';

function FetchUserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 5: User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul style={styles.list}>
          {users.map(user => (
            <li key={user.id} style={styles.listItem}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px 0',
  },
  list: {
    listStyleType: 'square',
    paddingLeft: '20px',
  },
  listItem: {
    margin: '5px 0',
  },
};

export default FetchUserData;