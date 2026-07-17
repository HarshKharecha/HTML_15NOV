import React from 'react';

function ProductDetailsButton() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
        },
        gridContainer: {
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
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
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
            flexGrow: 1,
            justifyContent: 'space-between'
        },
        title: {
            fontSize: '1.05rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: '0 0 8px 0',
            lineHeight: '1.4'
        },
        price: {
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#2563eb',
            margin: '0 0 16px 0'
        },
        button: {
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 15px',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s, transform 0.1s',
            marginTop: 'auto',
            width: '100%'
        }
    };

    const products = [
        { id: 'P01', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', name: 'The Frostfire Titan Intel pc', price: '₹4,20,000' },
        { id: 'P02', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', name: 'Galaxy S25 Ultra', price: '₹1,09,999' },
        { id: 'P03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', name: 'BTG Thunder Gaming Headphone', price: '₹999' },
        { id: 'P04', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', name: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', price: '₹59,999' },
        { id: 'P05', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', name: 'GOVO GOLOUD 1000', price: '₹8,415' }
    ];

    const handleViewDetails = (productId) => {
        alert(`Viewing Details for Product ID: ${productId}`);
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 11: Product Details Button</h3>

            <div style={styles.gridContainer}>
                {products.map(product => (
                    <div
                        key={product.id}
                        style={styles.card}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                        }}
                    >
                        <div style={styles.imageWrapper}>
                            <img src={product.image} alt={product.name} style={styles.image} />
                        </div>

                        <div style={styles.contentWrapper}>
                            <div>
                                <h4 style={styles.title}>{product.name}</h4>
                                <p style={styles.price}>{product.price}</p>
                            </div>

                            <button
                                style={styles.button}
                                onClick={() => handleViewDetails(product.id)}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetailsButton;