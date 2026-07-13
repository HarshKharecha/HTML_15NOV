import React from 'react'

function UserProfileCard(props) {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '9px' }
    };

    return (
        <>
            <h2>UserProfileCard:</h2>
            <div style={styles.container}>
                {props.names.map((name, index) => {
                    const userprofession = props.userprofessions[index];
                    const usercity = props.usercitys[index];

                    return (
                        <div key={index} style={styles.card}>
                            <div style={styles.subtitle}>
                                <div>User Name: {name}</div>
                                <div>Profession: {userprofession}</div>
                                <div>Location: {usercity}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default UserProfileCard