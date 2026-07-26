import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const navigate = useNavigate();

  const styles = {
    mainContainer: { fontFamily: 'system-ui, sans-serif', margin: '20px', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' },
    container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
    card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    imageWrapper: { width: '100%', height: '160px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' },
    image: { maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' },
    title: { fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
    price: { fontSize: '1.2rem', fontWeight: '700', color: '#2563eb', margin: '0 0 15px 0' },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 14px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'background-color 0.2s'
    },
    stockStatus: (inStock) => ({
      fontSize: '0.95rem',
      fontWeight: '700',
      color: inStock ? '#16a34a' : '#dc2626'
    })
  };

  const products = [
    { id: 'P01', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10', name: 'The Frostfire Titan Intel pc', inStock: true, price: '₹4,20,000' },
    { id: 'P02', image: 'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$', name: 'Galaxy S25 Ultra', inStock: true, price: '₹1,09,999' },
    { id: 'P03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA', name: 'BTG Thunder Gaming Headphone', inStock: true, price: '₹999' },
    { id: 'P04', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$', name: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)', inStock: true, price: '₹59,999' },
    { id: 'P05', image: 'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png', name: 'GOVO GOLOUD 1000', inStock: true, price: '₹8,415' }
  ];

  return (
    <>
      <div style={styles.mainContainer}>
        <h2>Product Card:</h2>
        <div style={styles.container}>
          {products.map(product => (
            <div key={product.id} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img src={product.image} alt={product.name} style={styles.image} />
              </div>
              <div>
                <h4 style={styles.title}>{product.name}</h4>
                <span style={styles.stockStatus(product.inStock)}>• {product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                <p style={styles.price}>{product.price}</p>
                <div>
                  <button
                    style={styles.button}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;