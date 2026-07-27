import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminProducts() {
    const navigate = useNavigate();
    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            margin: '20px',
            padding: '24px',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0'
        },
        heading: {
            color: '#0f172a',
            marginBottom: '20px',
            fontSize: '1.5rem'
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
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
            transition: 'all 0.2s'
        },
        image: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid #cbd5e1'
        },
        info: {
            margin: '9px auto'
        },
        name: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: 0
        },
        text: {
            fontSize: '0.9rem',
            color: '#64748b',
            margin: '4px 0'
        },
        button: {
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            margin: '9px auto',
            padding: '10px 16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'background-color 0.2s'
        }
    };

    const productsList = [
        { id: 'P01', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', name: 'The Frostfire Titan Intel pc', category: 'Desktops & PCs', stock: '5 in stock', price: '₹4,20,000' },
        { id: 'P02', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', name: 'Galaxy S25 Ultra', category: 'Smartphones', stock: '12 in stock', price: '₹1,09,999' },
        { id: 'P03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', name: 'BTG Thunder Gaming Headphone', category: 'Audio & Headphones', stock: '25 in stock', price: '₹999' },
        { id: 'P04', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', name: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', category: 'Smartwatches', stock: '8 in stock', price: '₹59,999' },
        { id: 'P05', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', name: 'GOVO GOLOUD 1000', category: 'Audio & Speakers', stock: '15 in stock', price: '₹8,415' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Product Management</h2>
            <div style={styles.grid}>
                {productsList.map((p) => (
                    <div key={p.id} style={styles.card}>
                        <div>
                            <img src={p.image} alt={p.name} style={styles.image} />
                            <div style={styles.info}>
                                <h4 style={styles.name}>{p.name}</h4>
                                <p style={styles.text}><strong>Category:</strong> {p.category}</p>
                                <p style={styles.text}><strong>Price:</strong> {p.price}</p>
                                <p style={styles.text}><strong>Stock:</strong> <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{p.stock}</span></p>
                            </div>
                        </div>
                        <button
                            style={styles.button}
                            onClick={() => alert(`Editing product details for ${p.name}`)}
                        >
                            Edit Product
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminProducts;