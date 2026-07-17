import React, { useState, useRef, useEffect } from 'react';

function ECommerceDashboard() {
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
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
            padding: '10px 0'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        },
        imageWrapper: {
            width: '100%',
            height: '180px',
            backgroundColor: '#f1f5f9',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginBottom: '16px'
        },
        image: {
            maxWidth: '85%',
            maxHeight: '85%',
            objectFit: 'contain'
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between'
        },
        brandBadge: {
            fontSize: '0.75rem',
            color: '#2563eb',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: '700',
            backgroundColor: '#eff6ff',
            padding: '4px 8px',
            borderRadius: '4px',
            display: 'inline-block',
            marginBottom: '8px'
        },
        title: {
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 8px 0',
            lineHeight: '1.4',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center'
        },
        price: {
            fontSize: '1.3rem',
            fontWeight: '800',
            color: '#0f172a',
            margin: '0 0 12px 0'
        },
        statusTag: (isOut) => ({
            margin: '0 0 16px 0',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: isOut ? '#dc2626' : '#16a34a',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            borderTop: '1px dashed #e2e8f0',
            paddingTop: '12px',
            width: '100%'
        }),
        btnGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        },
        btnSecondary: {
            backgroundColor: '#ffffff',
            color: '#475569',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '10px 12px',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: '100%'
        },
        btnPrimary: (disabled) => ({
            backgroundColor: disabled ? '#e2e8f0' : '#2563eb',
            color: disabled ? '#94a3b8' : '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 12px',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            width: '100%',
            boxShadow: disabled ? 'none' : '0 4px 6px -1px rgba(37, 99, 235, 0.15)'
        }),
        btnSuccess: (disabled) => ({
            backgroundColor: disabled ? '#f1f5f9' : '#16a34a',
            color: disabled ? '#cbd5e1' : '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 12px',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            width: '100%',
            boxShadow: disabled ? 'none' : '0 4px 6px -1px rgba(22, 163, 74, 0.15)'
        }),
        alertBox: {
            padding: '12px 16px',
            marginBottom: '24px',
            backgroundColor: '#f0fdf4',
            borderLeft: '4px solid #22c55e',
            borderRadius: '0 8px 8px 0',
            color: '#166534',
            fontSize: '0.9rem',
            fontWeight: '500',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        }
    };

    const [actionMessage, setActionMessage] = useState('');
    const timeoutRef = useRef(null);

    const products = [
        { id: 'P01', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', name: 'The Frostfire Titan PC', brand: 'Custom PC', price: '₹4,20,000', stockStatus: 'In Stock' },
        { id: 'P02', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', name: 'Galaxy S25 Ultra', brand: 'Samsung', price: '₹1,09,999', stockStatus: 'In Stock' },
        { id: 'P03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', name: 'Thunder Gaming Headphone', brand: 'Truke', price: '₹999', stockStatus: 'Out of Stock' },
        { id: 'P04', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', name: 'Galaxy Watch Ultra LTE', brand: 'Samsung', price: '₹59,999', stockStatus: 'In Stock' },
        { id: 'P05', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', name: 'GOLOUD 1000 Soundbar', brand: 'GOVO', price: '₹8,415', stockStatus: 'In Stock' },
        { id: 'P06', image: 'https://dlcdnwebimgs.asus.com/gain/80B11B38-A0FB-47B3-A5F4-4DF3BDBDEBF0/w160', name: 'ROG Strix Scar 18', brand: 'ASUS', price: '₹3,59,990', stockStatus: 'In Stock' },
        { id: 'P07', image: 'https://www.sony.co.in/image/b4476ca635d3baa551e19ade7fad2c58?fmt=png-alpha', name: 'Sony WH-1000XM5', brand: 'Sony', price: '₹29,990', stockStatus: 'In Stock' },
        { id: 'P08', image: 'https://keychron.in/wp-content/uploads/2021/03/keychronk2wirelessmechanicalkeyboard2-1646212149182-2048x1152.jpg', name: 'Keychron K2 V2', brand: 'Keychron', price: '₹7,499', stockStatus: 'Out of Stock' } //https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=300&q=80
    ];

    const handleAction = (id, productName, actionType, isOut) => {
        if (isOut && actionType !== 'View Details') return;

        const alertMessage = `⚡ ${actionType} initiated for "${productName}" (SKU: ${id})`;
        setActionMessage(alertMessage);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setActionMessage('');
        }, 5000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 20: E-Commerce Dashboard</h3>

            {actionMessage && (
                <div style={styles.alertBox}>
                    {actionMessage}
                </div>
            )}

            <div style={styles.gridContainer}>
                {products.map((product) => {
                    const isOut = product.stockStatus === 'Out of Stock';

                    return (
                        <div
                            key={product.id}
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
                            <div style={styles.contentWrapper}>
                                <div style={styles.imageWrapper}>
                                    <img src={product.image} alt={product.name} style={styles.image} />
                                </div>
                                <div>
                                    <span style={styles.brandBadge}>{product.brand}</span>
                                    <h4 style={styles.title}>{product.name}</h4>
                                    <p style={styles.price}>{product.price}</p>
                                    <p style={styles.statusTag(isOut)}>
                                        <span>●</span> {product.stockStatus}
                                    </p>
                                </div>
                            </div>

                            <div style={styles.btnGroup}>
                                <button
                                    style={styles.btnSecondary}
                                    onClick={() => handleAction(product.id, product.name, 'View Details', isOut)}
                                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
                                >
                                    View Details
                                </button>
                                <button
                                    disabled={isOut}
                                    style={styles.btnPrimary(isOut)}
                                    onClick={() => handleAction(product.id, product.name, 'Add to Cart', isOut)}
                                    onMouseOver={(e) => { if (!isOut) e.currentTarget.style.backgroundColor = '#1d4ed8'; }}
                                    onMouseOut={(e) => { if (!isOut) e.currentTarget.style.backgroundColor = '#2563eb'; }}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    disabled={isOut}
                                    style={styles.btnSuccess(isOut)}
                                    onClick={() => handleAction(product.id, product.name, 'Buy Now', isOut)}
                                    onMouseOver={(e) => { if (!isOut) e.currentTarget.style.backgroundColor = '#15803d'; }}
                                    onMouseOut={(e) => { if (!isOut) e.currentTarget.style.backgroundColor = '#16a34a'; }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ECommerceDashboard;