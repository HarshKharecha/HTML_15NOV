import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminOrders() {
    const navigate = useNavigate();
    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            margin: '20px',
            padding: '24px',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0'
        },
        heading: {
            color: '#0f172a',
            marginBottom: '20px',
            fontSize: '1.5rem'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
            transition: 'all 0.2s'
        },
        image: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid #cbd5e1'
        },
        info: {
            margin: '9px auto'
        },
        name: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: 0
        },
        text: {
            fontSize: '0.9rem',
            color: '#64748b',
            margin: '4px 0'
        },
        button: {
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            margin: '9px auto',
            padding: '10px 16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'background-color 0.2s'
        }
    };

    const ordersList = [
        { id: 'O01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', customer: 'Aanya Sharma', item: 'The Frostfire Titan Intel pc', total: '₹4,20,000', status: 'Delivered' },
        { id: 'O02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', customer: 'Rohan Verma', item: 'Galaxy S25 Ultra', total: '₹1,09,999', status: 'Processing' },
        { id: 'O03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', customer: 'Priya Patel', item: 'BTG Thunder Gaming Headphone', total: '₹999', status: 'Delivered' },
        { id: 'O04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', customer: 'Arjun Nair', item: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', total: '₹59,999', status: 'Cancelled' },
        { id: 'O05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', customer: 'Sneha Reddy', item: 'GOVO GOLOUD 1000', total: '₹8,415', status: 'Processing' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Order Management</h2>
            <div style={styles.grid}>
                {ordersList.map((o) => (
                    <div key={o.id} style={styles.card}>
                        <div>
                            <img src={o.image} alt={o.customer} style={styles.image} />
                            <div style={styles.info}>
                                <h4 style={styles.name}>{o.customer}</h4>
                                <p style={styles.text}><strong>Item:</strong> {o.item}</p>
                                <p style={styles.text}><strong>Total:</strong> {o.total}</p>
                                <p style={styles.text}>
                                    <strong>Status:</strong>{' '}
                                    <span
                                        style={{
                                            color: o.status === 'Delivered' ? '#16a34a' : o.status === 'Processing' ? '#2563eb' : '#dc2626',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {o.status}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button
                            style={styles.button}
                            onClick={() => alert(`Viewing order details for ${o.id}`)}
                        >
                            View Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminOrders;