import React, { useState } from 'react';

function RestaurantWebsite() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 24px 0',
            fontSize: '1.5rem'
        },
        container: {
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            width: '260px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        },
        imageWrapper: {
            width: '100%',
            height: '160px',
            backgroundColor: '#f1f5f9',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginBottom: '16px'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        category: {
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#2563eb',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            backgroundColor: '#eff6ff',
            padding: '4px 8px',
            borderRadius: '4px',
            display: 'inline-block',
            marginBottom: '8px'
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 8px 0'
        },
        details: {
            fontSize: '0.85rem',
            color: '#64748b',
            lineHeight: '1.4',
            margin: '0 0 16px 0',
            minHeight: '60px' // Keeps content aligned across different thali lengths
        },
        priceRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            borderTop: '1px dashed #e2e8f0',
            paddingTop: '12px'
        },
        priceLabel: {
            fontSize: '0.85rem',
            color: '#94a3b8',
            fontWeight: '500'
        },
        price: {
            fontSize: '1.3rem',
            fontWeight: '800',
            color: '#0f172a',
            margin: 0
        },
        button: (isOrdered) => ({
            backgroundColor: isOrdered ? '#ef4444' : '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            width: '100%',
            transition: 'background-color 0.2s ease, transform 0.1s ease',
            boxShadow: isOrdered ? '0 2px 4px rgba(239, 68, 68, 0.1)' : '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        }),
        successMessage: {
            marginTop: '14px',
            padding: '10px 12px',
            backgroundColor: '#f0fdf4',
            borderLeft: '4px solid #22c55e',
            borderRadius: '4px',
            color: '#166534',
            fontWeight: '500',
            fontSize: '0.85rem',
            lineHeight: '1.4'
        }
    };

    const menuItems = [
        { id: 'f-1', image: 'https://b.zmtcdn.com/data/collections/1541bcd444e2623a01fbc751465fd23a_1675252064.jpg?output-format=webp', name: 'Punjabi Thali', details: 'Paneer Butter Masala + Dal Fry + Jira Rice + 3 Butter Roti + Salad + Papad + Butter Milk', price: '₹130', category: 'Thali' },
        { id: 'f-2', image: 'https://b.zmtcdn.com/data/collections/1541bcd444e2623a01fbc751465fd23a_1675252064.jpg?output-format=webp', name: 'Special Punjabi Thali', details: 'Paneer Butter Masala + Mix Veg + Dal Fry + Jira Rice + 4 Butter Roti + Gulab Jamun + Salad + Papad + Butter Milk', price: '₹170', category: 'Thali' }
    ];

    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleOrder = (id) => {
        setSelectedItemId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div style={styles.mainContainer}>
            <h2 style={styles.heading}>Task 9: Restaurant Menu</h2>

            <div style={styles.container}>
                {menuItems.map((item) => {
                    const isOrdered = selectedItemId === item.id;
                    return (
                        <div
                            key={item.id}
                            style={styles.card}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                            }}
                        >
                            <div style={styles.imageWrapper}>
                                <img src={item.image} alt={item.name} style={styles.image} />
                            </div>

                            <div>
                                <span style={styles.category}>{item.category}</span>
                                <h4 style={styles.title}>{item.name}</h4>
                                <div style={styles.details}>{item.details}</div>
                            </div>

                            <div>
                                <div style={styles.priceRow}>
                                    <span style={styles.priceLabel}>Price</span>
                                    <span style={styles.price}>{item.price}</span>
                                </div>

                                <button
                                    style={styles.button(isOrdered)}
                                    onClick={() => handleOrder(item.id)}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = isOrdered ? '#dc2626' : '#1d4ed8';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = isOrdered ? '#ef4444' : '#2563eb';
                                    }}
                                >
                                    {isOrdered ? 'Cancel Order' : 'Order Now'}
                                </button>

                                {isOrdered && (
                                    <div style={styles.successMessage}>
                                        🎉 <strong>Confirmed!</strong> Your item is being freshly prepared in our kitchen.
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RestaurantWebsite;