import React from 'react';

function FoodOrders() {
    const styles = {
        heading: {
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '20px'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9rem'
        },
        th: {
            backgroundColor: '#f1f5f9',
            color: '#334155',
            textAlign: 'left',
            padding: '12px',
            borderBottom: '2px solid #e2e8f0'
        },
        td: {
            padding: '12px',
            borderBottom: '1px solid #e2e8f0',
            color: '#475569'
        },
        badge: (status) => {
            const colors = {
                'Preparing': { color: '#c2410c', bg: '#ffedd5' },
                'On The Way': { color: '#0369a1', bg: '#e0f2fe' },
                'Delivered': { color: '#15803d', bg: '#dcfce7' }
            };
            const style = colors[status] || { color: '#334155', bg: '#f1f5f9' };
            return {
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: style.color,
                backgroundColor: style.bg
            };
        },
        button: {
            backgroundColor: '#f97316',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer'
        }
    };

    const ordersList = [
        { id: '#ORD-8821', customer: 'Aarav Sharma', restaurant: 'Burger Singh', items: '2x Cheeseburger, 1x Fries', total: '₹450.00', status: 'Preparing' },
        { id: '#ORD-8822', customer: 'Priya Patel', restaurant: 'Pizza Hut', items: '1x Large Pepperoni, 2x Soda', total: '₹750.00', status: 'On The Way' },
        { id: '#ORD-8823', customer: 'Rohan Verma', restaurant: 'Sushi and More', items: '1x Dragon Roll, 1x Miso Soup', total: '₹950.00', status: 'Delivered' }
    ];

    return (
        <div>
            <h2 style={styles.heading}>Live Orders Monitor</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Order ID</th>
                        <th style={styles.th}>Customer</th>
                        <th style={styles.th}>Restaurant</th>
                        <th style={styles.th}>Items</th>
                        <th style={styles.th}>Total</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersList.map((o) => (
                        <tr key={o.id}>
                            <td style={{ ...styles.td, fontWeight: '700', color: '#0f172a' }}>{o.id}</td>
                            <td style={{ ...styles.td, fontWeight: '600' }}>{o.customer}</td>
                            <td style={styles.td}>{o.restaurant}</td>
                            <td style={styles.td}>{o.items}</td>
                            <td style={{ ...styles.td, color: '#f97316', fontWeight: '700' }}>{o.total}</td>
                            <td style={styles.td}>
                                <span style={styles.badge(o.status)}>{o.status}</span>
                            </td>
                            <td style={styles.td}>
                                <button
                                    style={styles.button}
                                    onClick={() => alert(`Viewing details for order ${o.id}`)}
                                >
                                    Track Order
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FoodOrders;