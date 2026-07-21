import React, { useState } from 'react';

function ProductAvailability() {
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
        checkboxContainer: {
            display: 'inline-block',
            marginBottom: '16px',
            color: '#2563eb',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            padding: '10px 20px',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(37, 99, 235, 0.05)'
        },
        statusBadge: (inStock) => ({
            backgroundColor: inStock ? '#e0f2fe' : '#f3f4f6',
            color: inStock ? '#0369a1' : '#4b5563',
            border: `1px solid ${inStock ? '#bae6fd' : '#e5e7eb'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '700'
        })
    };

    const [inStock, setStock] = useState(true);

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 4: Product Availability</h3>
            <label style={styles.checkboxContainer}><input type="checkbox" checked={inStock} onChange={(e)=>setStock(e.target.checked)} /> In Stock</label>
            <div style={styles.statusBadge(inStock)}>
                {inStock ? "In Stock" : "Out of Stock"}
            </div>
        </div>
    );
}

export default ProductAvailability;