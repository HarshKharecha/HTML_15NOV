import React from 'react';

function ProductCard(props) {
  const styles = {
    container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
    card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    imageWrapper: { width: '100%', height: '160px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' },
    image: { maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' },
    title: { fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
    price: { fontSize: '1.2rem', fontWeight: '700', color: '#2563eb', margin: 0 }
  };

  return (
    <>
      {/* Array */}
      <h2>Product Card Array:</h2>
      <div style={styles.container}>
        {/* We map through one array, and use the "index" to pull data from the other arrays */}
        {props.names.map((name, index) => {
          const image = props.images[index];
          const price = props.prices[index];

          return (
            <div key={index} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img src={image} alt={name} style={styles.image} />
              </div>
              <div>
                <h4 style={styles.title}>{name}</h4>
                <p style={styles.price}>{price}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Object */}
      <h2>Product Card Object:</h2>
      <div style={styles.container}>
        {/* Cleaner looping syntax because the values live together inside each object */}
        {props.products.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={item.image} alt={item.name} style={styles.image} />
            </div>
            <div>
              <h4 style={styles.title}>{item.name}</h4>
              <p style={styles.price}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;