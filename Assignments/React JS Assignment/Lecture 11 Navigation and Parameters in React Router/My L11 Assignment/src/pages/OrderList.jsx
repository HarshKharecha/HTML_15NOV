import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderList() {
  const navigate = useNavigate();
  
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '30px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    },
    header: {
      marginBottom: '24px',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '15px'
    },
    listContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '600px'
    },
    orderCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
    },
    orderInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    orderIdText: {
      margin: '0',
      color: '#1e293b',
      fontSize: '1.05rem',
      fontWeight: '600'
    },
    orderSubText: {
      margin: '0',
      color: '#64748b',
      fontSize: '0.85rem'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.9rem',
      transition: 'background-color 0.2s ease'
    }
  };

  const orders = [
    { id: 'ORD-2026-98745', date: 'July 15, 2026', itemsCount: 10 }
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h2 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Orders</h2>
        <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Manage and track your recent purchase history.</p>
      </div>
      
      <div style={styles.listContainer}>
        {orders.map((order) => (
          <div key={order.id} style={styles.orderCard}>
            <div style={styles.orderInfo}>
              <p style={styles.orderIdText}>#{order.id}</p>
              <p style={styles.orderSubText}>Placed on {order.date}</p>
            </div>
            <button 
              style={styles.button} 
              onClick={() => navigate(`/order/${order.id}`)}
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;