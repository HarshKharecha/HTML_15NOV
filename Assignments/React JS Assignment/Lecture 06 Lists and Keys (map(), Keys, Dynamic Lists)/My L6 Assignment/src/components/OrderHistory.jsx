import React from 'react'

function OrderHistory() {
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
        orderMetaCard: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px 24px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
        },
        metaText: {
            margin: '4px 0',
            color: '#64748b',
            fontSize: '0.9rem'
        },
        metaValue: {
            fontWeight: '600',
            color: '#1e293b'
        },
        statusBadge: {
            backgroundColor: '#dcfce7',
            color: '#15803d',
            padding: '4px 12px',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '0.85rem',
            alignSelf: 'center'
        },
        itemsContainer: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            padding: '10px 0'
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
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
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
        qty: {
            fontSize: '0.85rem',
            color: '#64748b',
            margin: '0',
            fontWeight: '500'
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
        invoiceSummary: {
            marginTop: '30px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '400px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        summaryRow: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px 0',
            fontSize: '0.95rem',
            color: '#475569'
        }
    };

    // The order history list with fixed order purchase values
    const orderItems = [
        { id: 'P01', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', name: 'The Frostfire Titan Intel pc', quantity: 1, price: '₹4,20,000' },
        { id: 'P02', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', name: 'Galaxy S25 Ultra', quantity: 1, price: '₹1,09,999' },
        { id: 'P03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', name: 'BTG Thunder Gaming Headphone', quantity: 4, price: '₹999' },
        { id: 'P04', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', name: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', quantity: 2, price: '₹59,999' },
        { id: 'P05', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', name: 'GOVO GOLOUD 1000', quantity: 2, price: '₹8,415' }
    ];

    // Helper math calculations
    const totalQty = orderItems.reduce((acc, item) => acc + item.quantity, 0);

    const subTotal = orderItems.reduce((acc, item) => {
        const numericPrice = Number(item.price.replace(/[₹,]/g, ''));
        return acc + (numericPrice * item.quantity);
    }, 0);

    const shippingFee = 150; // Mock standard delivery fee
    const taxAmount = Math.round(subTotal * 0.18); // Mock GST tax calculation (18%)
    const grandTotalVal = subTotal + shippingFee + taxAmount;

    // Currency Formatting Functions
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.header}>
                <h2 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Order Details</h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>View the status and transaction overview of your purchase history.</p>
            </div>

            {/* Order Meta Header Card */}
            <div style={styles.orderMetaCard}>
                <div>
                    <p style={styles.metaText}>Order ID: <span style={styles.metaValue}>#ORD-2026-98745</span></p>
                    <p style={styles.metaText}>Placed On: <span style={styles.metaValue}>July 15, 2026</span></p>
                </div>
                <div>
                    <p style={styles.metaText}>Payment Mode: <span style={styles.metaValue}>Net Banking</span></p>
                    <p style={styles.metaText}>Total Shipment Weight: <span style={styles.metaValue}>14.5 kg</span></p>
                </div>
                <div style={styles.statusBadge}>
                    ✓ Delivered
                </div>
            </div>

            {/* Purchased Items List Grid */}
            <h3 style={{ color: '#334155', margin: '25px 0 15px 0' }}>Items Ordered ({totalQty})</h3>
            <div style={styles.itemsContainer}>
                {orderItems.map(item => {
                    const itemPriceNum = Number(item.price.replace(/[₹,]/g, ''));
                    const itemTotalVal = itemPriceNum * item.quantity;

                    return (
                        <div key={item.id} style={styles.card}>
                            <div style={styles.imageWrapper}>
                                <img src={item.image} alt={item.name} style={styles.image} />
                            </div>

                            <div style={styles.contentWrapper}>
                                <h4 style={styles.title} title={item.name}>{item.name}</h4>
                                <p style={styles.qty}>Purchased Qty: <b>{item.quantity}</b></p>
                                <p style={styles.price}>{item.price}</p>
                            </div>

                            <div style={styles.totalSection}>
                                <p style={{ margin: '4px 0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Item Total:</span>
                                    <b>{formatCurrency(itemTotalVal)}</b>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Structured Invoice Total Section */}
            <div style={styles.invoiceSummary}>
                <h3 style={{ margin: '0 0 15px 0', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>Payment Summary</h3>

                <div style={styles.summaryRow}>
                    <span>Subtotal ({totalQty} items)</span>
                    <span>{formatCurrency(subTotal)}</span>
                </div>
                <div style={styles.summaryRow}>
                    <span>Shipping & Handling</span>
                    <span style={{ color: '#15803d' }}>{shippingFee === 0 ? "FREE" : formatCurrency(shippingFee)}</span>
                </div>
                <div style={styles.summaryRow}>
                    <span>Estimated Tax (GST 18%)</span>
                    <span>{formatCurrency(taxAmount)}</span>
                </div>

                <div style={{ ...styles.summaryRow, borderTop: '2px solid #e2e8f0', marginTop: '15px', paddingTop: '15px', fontWeight: '700', fontSize: '1.2rem', color: '#0f172a' }}>
                    <span>Grand Total</span>
                    <span style={{ color: '#2563eb' }}>{formatCurrency(grandTotalVal)}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory