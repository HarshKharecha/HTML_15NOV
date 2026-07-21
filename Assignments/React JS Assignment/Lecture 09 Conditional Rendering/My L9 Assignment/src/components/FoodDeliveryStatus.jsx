import React from 'react';

function FoodDeliveryStatus() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            maxWidth: '500px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
        },
        statusBox: (delivered) => ({
            backgroundColor: delivered ? '#dcfce7' : '#e0f2fe',
            color: delivered ? '#15803d' : '#0369a1',
            border: `1px solid ${delivered ? '#86efac' : '#bae6fd'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '700'
        })
    };

    const orderDelivered = false;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 16: Food Delivery Status</h3>
            <div style={styles.statusBox(orderDelivered)}>
                {orderDelivered ? "Delivered" : "On the Way"}
            </div>
        </div>
    );
}

export default FoodDeliveryStatus;