import React from 'react'

function StudentInfo(props) {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '9px' }
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.title}>StudentInfo</div>
                    <div style={styles.subtitle}>
                        <div>Student Name: {props.name}</div>
                        <div>Student Age: {props.age}</div>
                        <div>Student Course: {props.course}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentInfo