import React from 'react'

function CompanyInfo(props) {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '9px' }
    };

    return (
        <>
            <h2>CompanyInfo:</h2>
            <div style={styles.container}>
                {props.names.map((name, index) => {
                    const description = props.descriptions[index];
                    const location = props.locations[index];
                    const totalemployee = props.totalemployees[index];

                    return (
                        <div key={index} style={styles.card}>
                            <div style={styles.subtitle}>
                                <div>Company Name: {name}</div>
                                <div>Core Tech Specialization: {description}</div>
                                <div>Primary Tech Headquarters: {location}</div>
                                <div>Total Employees (Approx.): {totalemployee}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default CompanyInfo