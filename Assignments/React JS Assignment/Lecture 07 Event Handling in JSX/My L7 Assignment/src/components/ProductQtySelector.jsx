import React, { useState } from 'react';

function ProductQtySelector() {
  const [quantity, setQuantity] = useState(1);
  const basePricePerItem = 499; // Explicit mock value to demonstrate active calculated price matrices

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
      fontSize: '1.4rem'
    },
    selectorWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      padding: '16px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    btn: (disabled) => ({
      fontSize: '1.2rem',
      fontWeight: '600',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      backgroundColor: disabled ? '#f1f5f9' : '#ffffff',
      color: disabled ? '#94a3b8' : '#1e293b',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none'
    }),
    displayQty: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#0f172a',
      minWidth: '24px',
      textAlign: 'center'
    },
    summaryBox: {
      marginTop: '16px',
      padding: '14px',
      backgroundColor: '#eff6ff',
      borderRadius: '8px',
      border: '1px solid #bfdbfe'
    },
    summaryLine: {
      margin: 0,
      fontSize: '0.9rem',
      color: '#1e3a8a',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    totalPrice: {
      fontSize: '1.15rem',
      fontWeight: '800',
      color: '#1e40af'
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 18: Product Quantity</h3>

      <div style={styles.selectorWrapper}>
        <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#475569' }}>Selection Qty</span>
        <div style={styles.controls}>
          <button
            disabled={quantity <= 1}
            onClick={decreaseQuantity}
            style={styles.btn(quantity <= 1)}
            onMouseOver={(e) => {
              if (quantity > 1) {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.borderColor = '#94a3b8';
              }
            }}
            onMouseOut={(e) => {
              if (quantity > 1) {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }
            }}
          >
            −
          </button>

          <span style={styles.displayQty}>{quantity}</span>

          <button
            onClick={increaseQuantity}
            style={styles.btn(false)}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#94a3b8';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Calculated Order Summary Breakdown */}
      <div style={styles.summaryBox}>
        <p style={styles.summaryLine}>
          <span>Estimated Total ({quantity} {quantity === 1 ? 'item' : 'items'}):</span>
          <span style={styles.totalPrice}>₹{(basePricePerItem * quantity).toLocaleString('en-IN')}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductQtySelector;