import React from 'react';

function Wishlist() {
    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            padding: '24px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #d5d9d9',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        },
        heading: {
            color: '#0f1111',
            marginBottom: '20px',
            fontSize: '1.5rem',
            fontWeight: '700'
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
            border: '1px solid #d5d9d9',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        },
        image: {
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            marginBottom: '12px'
        },
        info: {
            margin: '8px 0',
            width: '100%'
        },
        title: {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#0f1111',
            margin: '0 0 6px 0'
        },
        text: {
            fontSize: '0.875rem',
            color: '#565959',
            margin: '4px 0'
        },
        button: {
            width: '100%',
            backgroundColor: '#ffd814',
            color: '#0f1111',
            border: '1px solid #fcd200',
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '12px',
            boxShadow: '0 2px 5px rgba(213,217,217,0.5)'
        }
    };

    const wishlistItems = [
        { id: 'WL-101', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', title: 'The Frostfire Titan Intel pc', price: '₹4,20,000', priceDrop: 'Lowest price in 30 days' },
        { id: 'WL-102', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', title: 'Galaxy S25 Ultra', price: '₹1,09,999', priceDrop: 'Dropped by 10%' },
        { id: 'WL-103', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', title: 'BTG Thunder Gaming Headphone', price: '₹999', priceDrop: 'In Stock' },
        { id: 'WL-104', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', title: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', price: '₹59,999', priceDrop: 'In Stock' },
        { id: 'WL-105', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', title: 'GOVO GOLOUD 1000', price: '₹8,415', priceDrop: 'In Stock' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Your Wishlist & Saved Items</h2>
            <div style={styles.grid}>
                {wishlistItems.map((w) => (
                    <div key={w.id} style={styles.card}>
                        <img src={w.image} alt={w.title} style={styles.image} />
                        <div style={styles.info}>
                            <h4 style={styles.title}>{w.title}</h4>
                            <p style={styles.text}><strong>Price:</strong> <span style={{ color: '#b12704', fontWeight: 'bold' }}>{w.price}</span></p>
                            <p style={styles.text}><strong>Alert:</strong> <span style={{ color: '#007600', fontWeight: '500' }}>{w.priceDrop}</span></p>
                        </div>
                        <button
                            style={styles.button}
                            onClick={() => alert(`Added ${w.title} to cart!`)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;