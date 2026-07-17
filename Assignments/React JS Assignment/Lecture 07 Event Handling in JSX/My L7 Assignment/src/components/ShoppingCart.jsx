import React, { useEffect, useState } from 'react';

function ShoppingCart() {
    const styles = {
        pageWrapper: {
            fontFamily: 'sans-serif',
            padding: '24px',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            margin: '20px',
            border: '1px solid #e2e8f0',
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
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
            fontSize: '1.15rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 8px 0',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center'
        },
        price: {
            fontSize: '1.3rem',
            fontWeight: '800',
            color: '#0f172a',
            margin: '0 0 16px 0'
        },
        statusRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
            borderTop: '1px dashed #e2e8f0',
            paddingTop: '12px'
        },
        stockStatus: (inStock) => ({
            fontSize: '0.85rem',
            fontWeight: '600',
            color: inStock ? '#16a34a' : '#dc2626',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
        }),
        button: (inStock, isAdded) => ({
            backgroundColor: !inStock ? '#cbd5e1' : isAdded ? '#ef4444' : '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            cursor: inStock ? 'pointer' : 'not-allowed',
            fontWeight: '600',
            fontSize: '0.95rem',
            width: '100%',
            transition: 'background-color 0.2s ease, transform 0.1s ease',
            boxShadow: !inStock ? 'none' : isAdded ? '0 2px 4px rgba(239, 68, 68, 0.1)' : '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        }),
        message: (isAdded) => ({
            marginTop: '12px',
            padding: '8px 10px',
            backgroundColor: isAdded ? '#f0fdf4' : '#fef2f2',
            borderLeft: isAdded ? '4px solid #22c55e' : '4px solid #ef4444',
            borderRadius: '4px',
            color: isAdded ? '#166534' : '#991b1b',
            fontWeight: '500',
            fontSize: '0.8rem',
            lineHeight: '1.4',
            textAlign: 'left'
        })
    };

    const mobiles = [
        { id: 'mob-01', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzbbins-thumb-544702615?$216_216_PNG$', name: 'Galaxy S25 Ultra', brand: 'Samsung', price: '₹1,09,999', inStock: true },
        { id: 'mob-02', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/s2602/gallery/in-galaxy-s26-ultra-s948-sm-s948bzvbins-thumb-550793679?$216_216_PNG$', name: 'Galaxy S26 Ultra', brand: 'Samsung', price: '₹1,18,999', inStock: false },
        { id: 'mob-03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTku6ccQ10IJpG71AI2V8f3CV3e66Hu4UGqZutxqtWSgX7RtHxtXLrZghqmYE4G1sIUcKQkBWVv6iLwTgZ_MvrxgSBDOEpRe28V-MjF1sNNruoE8yvymyEdmh0', name: 'iPhone 17 Pro Max', brand: 'Apple', price: '₹1,49,900', inStock: true },
        { id: 'mob-04', image: 'https://m.media-amazon.com/images/I/51TvUow3bKL._SX569_.jpg', name: 'Pixel 10 Pro XL', brand: 'Google', price: '₹1,24,999', inStock: true },
        { id: 'mob-05', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8l2qFCynw8VFWvlibudzD1SndhC3mOsMN-SCsBdCEA&s', name: 'OnePlus 15', brand: 'OnePlus', price: '₹72,999', inStock: false },
        { id: 'mob-06', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2L0s6_0lGy3M7a1Y3KMGYLBYMPlBbnAgxCzIB6_TQlQ&s=10', name: 'Xiaomi 17 Ultra', brand: 'Xiaomi', price: '₹1,39,999', inStock: true }
    ];

    const [cartItems, setCartItems] = useState([]);
    const [cartMessage, setCartMessage] = useState('');
    const [activeProductId, setActiveProductId] = useState(null);

    useEffect(() => {
        if (!cartMessage) return;
        const timer = setTimeout(() => {
            setCartMessage('');
            setActiveProductId(null);
        }, 5000);

        return () => clearTimeout(timer);
    }, [cartMessage, activeProductId]);

    const handleCartToggle = (product) => {
        if (!product.inStock) return;

        const isAlreadyAdded = cartItems.includes(product.id);
        setActiveProductId(product.id);

        if (isAlreadyAdded) {
            setCartItems(cartItems.filter(id => id !== product.id));
            setCartMessage(`Removed "${product.name}" from your shopping cart.`);
        } else {
            setCartItems([...cartItems, product.id]);
            setCartMessage(`Successfully added "${product.name}" to your shopping cart!`);
        }
    };

    return (
        <div style={styles.pageWrapper}>
            <h2 style={styles.heading}>Task 15: Shopping Cart</h2>

            <div style={styles.container}>
                {mobiles.map(mobile => {
                    const isAdded = cartItems.includes(mobile.id);

                    return (
                        <div
                            key={mobile.id}
                            style={styles.card}
                            onMouseOver={(e) => {
                                if (mobile.inStock) {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
                                }
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                            }}
                        >
                            <div>
                                <div style={styles.imageWrapper}>
                                    <img src={mobile.image} alt={mobile.name} style={styles.image} />
                                </div>

                                <div>
                                    <span style={styles.brandBadge}>{mobile.brand}</span>
                                    <h4 style={styles.title}>{mobile.name}</h4>
                                    <p style={styles.price}>{mobile.price}</p>
                                </div>
                            </div>

                            <div>
                                <div style={styles.statusRow}>
                                    <span style={styles.stockStatus(mobile.inStock)}>
                                        {mobile.inStock ? '● In Stock' : '● Out of Stock'}
                                    </span>
                                </div>

                                <button
                                    disabled={!mobile.inStock}
                                    style={styles.button(mobile.inStock, isAdded)}
                                    onClick={() => handleCartToggle(mobile)}
                                    onMouseOver={(e) => {
                                        if (mobile.inStock) {
                                            e.currentTarget.style.backgroundColor = isAdded ? '#dc2626' : '#1d4ed8';
                                        }
                                    }}
                                    onMouseOut={(e) => {
                                        if (mobile.inStock) {
                                            e.currentTarget.style.backgroundColor = isAdded ? '#ef4444' : '#2563eb';
                                        }
                                    }}
                                >
                                    {!mobile.inStock ? 'Out of Stock' : isAdded ? 'Remove from Cart' : 'Add to Cart'}
                                </button>

                                {activeProductId === mobile.id && cartMessage && (
                                    <div style={styles.message(isAdded)}>
                                        {isAdded ? '🛒 ' : '🗑️ '}
                                        {cartMessage}
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

export default ShoppingCart;