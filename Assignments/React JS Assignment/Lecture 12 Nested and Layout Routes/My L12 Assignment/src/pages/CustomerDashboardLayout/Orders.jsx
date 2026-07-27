import React from 'react';

function Orders() {
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
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

    const ordersList = [
        { id: 'ORD-702-1192', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', title: 'The Frostfire Titan Intel pc', total: '₹4,20,000', date: '22 Jul 2026', status: 'Delivered' },
        { id: 'ORD-841-3301', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', title: 'Galaxy S25 Ultra', total: '₹1,09,999', date: '18 Jul 2026', status: 'Delivered' },
        { id: 'ORD-910-5542', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', title: 'BTG Thunder Gaming Headphone', total: '₹999', date: '26 Jul 2026', status: 'Out for Delivery' },
        { id: 'ORD-104-8821', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', title: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', total: '₹59,999', date: '10 Jul 2026', status: 'Delivered' },
        { id: 'ORD-402-7751', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', title: 'GOVO GOLOUD 1000', total: '₹8,415', date: '21 Jul 2026', status: 'Delivered' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Your Orders</h2>
            <div style={styles.grid}>
                {ordersList.map((o) => (
                    <div key={o.id} style={styles.card}>
                        <img src={o.image} alt={o.title} style={styles.image} />
                        <div style={styles.info}>
                            <h4 style={styles.title}>{o.title}</h4>
                            <p style={styles.text}><strong>Order ID:</strong> {o.id}</p>
                            <p style={styles.text}><strong>Date Placed:</strong> {o.date}</p>
                            <p style={styles.text}><strong>Total:</strong> {o.total}</p>
                            <p style={styles.text}>
                                <strong>Status:</strong>{' '}
                                <span style={{ color: o.status === 'Delivered' ? '#007600' : '#b12704', fontWeight: 'bold' }}>
                                    {o.status}
                                </span>
                            </p>
                        </div>
                        <button
                            style={styles.button}
                            onClick={() => alert(`Tracking package for ${o.id}`)}
                        >
                            Track Package
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;