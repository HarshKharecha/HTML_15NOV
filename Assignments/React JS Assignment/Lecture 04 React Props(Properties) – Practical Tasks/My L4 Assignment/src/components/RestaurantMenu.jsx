import React from 'react'

function RestaurantMenu(props) {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        imageWrapper: { width: '100%', height: '160px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' },
        image: { maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' },
        title: { fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        price: { fontSize: '1.2rem', fontWeight: '700', color: '#2563eb', margin: 0 }
    };

    return (
        <>
            <h2>Restaurant Menu:</h2>
            <div style={styles.container}>
                {props.names.map((name, index) => {
                    const menuimage = props.menuimages[index];
                    const menudetail = props.menudetails[index];
                    const menuprice = props.menuprices[index];

                    return (
                        <div key={index} style={styles.card}>
                            <div style={styles.subtitle}>
                                <div style={styles.imageWrapper}>
                                    <img src={menuimage} alt={name} style={styles.image} />
                                </div>
                                <div>
                                    <h4 style={styles.title}>{name}</h4>
                                    <h4 style={styles.title}>{menudetail}</h4>
                                    <p style={styles.price}>{menuprice}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default RestaurantMenu