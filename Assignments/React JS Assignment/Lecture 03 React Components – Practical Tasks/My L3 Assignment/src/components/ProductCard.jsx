import React from 'react';

function ProductCard() {
  const styles = {
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '20px',
      width: '220px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
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
    title: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: '0 0 8px 0',
    },
    price: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#2563eb',
      margin: 0,
    }
  };

  return (
    <div style={styles.card} className="product-card-hover">
      <div style={styles.imageWrapper}>
        <img 
          src="https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$" 
          alt="Galaxy S25 Ultra" 
          style={styles.image}
        />
      </div>
      <div>
        <h4 style={styles.title}>Galaxy S25 Ultra</h4>
        <p style={styles.price}>₹1,09,999</p>
      </div>
    </div>
  );
}

export default ProductCard;