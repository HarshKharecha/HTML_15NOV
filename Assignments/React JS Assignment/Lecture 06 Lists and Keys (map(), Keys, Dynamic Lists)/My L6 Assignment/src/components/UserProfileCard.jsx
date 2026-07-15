import React from 'react'

function UserProfileCard() {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', }
    };
    const users = [
        { id: 'u_01', name: 'Liam Neeson', email: 'liam@example.com', city: 'New York' },
        { id: 'u_02', name: 'Sophia Loren', email: 'sophia@example.com', city: 'Rome' },
        { id: 'u_03', name: 'Alex Turing', email: 'alex@example.com', city: 'London' }
    ];

    return (
        <>
            <h2>User Profiles:</h2>
            <div style={styles.container}>
                {users.map(user => (
                    <div key={user.id} style={styles.card}>
                        <div style={styles.subtitle}>
                            <p>{user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>City: {user.city}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserProfileCard