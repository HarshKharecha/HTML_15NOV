import React, { useState } from 'react'

function ShoppingCart() {
    const styles = {
        container: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            padding: '20px 0'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            width: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
            marginBottom: '15px'
        },
        image: {
            maxWidth: '85%',
            maxHeight: '85%',
            objectFit: 'contain'
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            flexGrow: 1
        },
        title: {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: '0',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '2.8em'
        },
        qtyContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '10px 0 5px 0'
        },
        qtyBtn: {
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px solid #cbd5e1',
            backgroundColor: '#ffffff',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
        },
        qtyText: {
            fontSize: '0.9rem',
            color: '#1e293b',
            margin: '0',
            fontWeight: '600'
        },
        price: {
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#2563eb',
            margin: '5px 0 0 0'
        },
        totalSection: {
            borderTop: '1px dashed #e2e8f0',
            marginTop: '12px',
            paddingTop: '8px',
            fontSize: '0.85rem',
            color: '#475569'
        },
        summaryBadge: {
            backgroundColor: "#f2f2f2",
            border: "none",
            padding: "8px 16px",
            margin: "0px 5px",
            borderRadius: "18px",
            fontWeight: "bold",
            fontSize: "large",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px"
        },
        /* Styled Payment Summary Card */
        paymentSummaryCard: {
            margin: '30px 0 20px 0',
            padding: '24px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            maxWidth: '380px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            fontFamily: 'system-ui, sans-serif'
        },
        summaryHeading: {
            margin: '0 0 16px 0',
            color: '#0f172a',
            fontSize: '1.2rem',
            fontWeight: '700',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '12px'
        },
        summaryRow: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px 0',
            fontSize: '0.95rem',
            color: '#475569'
        },
        summaryRowTotal: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '16px 0 0 0',
            paddingTop: '16px',
            borderTop: '2px solid #e2e8f0',
            fontSize: '1.15rem',
            fontWeight: '700',
            color: '#0f172a'
        }
    };

    const [items, setItems] = useState([
        { id: 'P01', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', name: 'The Frostfire Titan Intel pc', quantity: 1, price: '₹4,20,000' },
        { id: 'P02', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', name: 'Galaxy S25 Ultra', quantity: 1, price: '₹1,09,999' },
        { id: 'P03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', name: 'BTG Thunder Gaming Headphone', quantity: 4, price: '₹999' },
        { id: 'P04', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', name: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', quantity: 2, price: '₹59,999' },
        { id: 'P05', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', name: 'GOVO GOLOUD 1000', quantity: 2, price: '₹8,415' }
    ]);

    const handleIncrement = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Global counts and financial values computed in real-time
    const totalQty = items.reduce((acc, item) => acc + item.quantity, 0);

    const subTotalVal = items.reduce((acc, item) => {
        const numericPrice = Number(item.price.replace(/[₹,]/g, ''));
        return acc + (numericPrice * item.quantity);
    }, 0);

    const shippingFee = 150;
    const estimatedTax = Math.round(subTotalVal * 0.18); // Dynamic 18% GST calculation
    const grandTotalVal = subTotalVal + shippingFee + estimatedTax;

    // Currency Formatting Utility
    const formatINR = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif' }}>
            <h2>Shopping Cart:</h2>

            <details>
                <summary style={{ listStyle: 'none', cursor: 'pointer', width: '145px' }}>
                    <span style={styles.summaryBadge}>🛒 {totalQty} Items</span>
                </summary>

                <div style={styles.container}>
                    {items.map(item => {
                        const itemPriceNum = Number(item.price.replace(/[₹,]/g, ''));
                        const itemTotalVal = itemPriceNum * item.quantity;

                        return (
                            <div key={item.id} style={styles.card}>
                                <div style={styles.imageWrapper}>
                                    <img src={item.image} alt={item.name} style={styles.image} />
                                </div>

                                <div style={styles.contentWrapper}>
                                    <h4 style={styles.title} title={item.name}>{item.name}</h4>

                                    <div style={styles.qtyContainer}>
                                        <button
                                            style={{
                                                ...styles.qtyBtn,
                                                opacity: item.quantity <= 1 ? 0.5 : 1,
                                                cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer'
                                            }}
                                            onClick={() => handleDecrement(item.id)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span style={styles.qtyText}>Qty: {item.quantity}</span>
                                        <button
                                            style={styles.qtyBtn}
                                            onClick={() => handleIncrement(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p style={styles.price}>{item.price}</p>
                                </div>

                                <div style={styles.totalSection}>
                                    <p style={{ margin: '4px 0' }}>Total Qty: <b>{item.quantity}</b></p>
                                    <p style={{ margin: '4px 0' }}>Total Amount: <b>{formatINR(itemTotalVal)}</b></p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Structured Dynamic Payment Summary Card */}
                <div style={styles.paymentSummaryCard}>
                    <h3 style={styles.summaryHeading}>Payment Summary</h3>

                    <div style={styles.summaryRow}>
                        <span>Subtotal ({totalQty} items)</span>
                        <span style={{ fontWeight: '600' }}>{formatINR(subTotalVal)}</span>
                    </div>

                    <div style={styles.summaryRow}>
                        <span>Shipping & Handling</span>
                        <span style={{ color: '#15803d', fontWeight: '600' }}>{formatINR(shippingFee)}</span>
                    </div>

                    <div style={styles.summaryRow}>
                        <span>Estimated Tax (GST 18%)</span>
                        <span style={{ fontWeight: '600' }}>{formatINR(estimatedTax)}</span>
                    </div>

                    <div style={styles.summaryRowTotal}>
                        <span>Grand Total</span>
                        <span style={{ color: '#2563eb' }}>{formatINR(grandTotalVal)}</span>
                    </div>
                </div>
            </details>
        </div>
    )
}

export default ShoppingCart