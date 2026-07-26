import React from 'react';
import { useNavigate } from 'react-router-dom';

function FoodMenu() {
  const navigate = useNavigate();
  const styles = {
    mainContainer: { fontFamily: 'system-ui, sans-serif', margin: '20px', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' },
    container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
    card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    imageWrapper: { width: '100%', height: '160px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' },
    image: { maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' },
    title: { fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
    price: { fontSize: '1.2rem', fontWeight: '700', color: '#2563eb', margin: 0 },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      marginTop: '9px',
      padding: '12px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.95rem',
      width: '100%',
      transition: 'background-color 0.2s ease, transform 0.1s ease',
      boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
    }
  };

  const menuItems = [
    { id: 'f-1', image: 'https://b.zmtcdn.com/data/collections/1541bcd444e2623a01fbc751465fd23a_1675252064.jpg?output-format=webp', name: 'Punjabi Thali', details: 'Paneer Butter Masala + Dal Fry + Jira Rice + 3 Butter Roti + Salad + Papad + Butter Milk', price: '₹130', category: 'Thali' },
    { id: 'f-2', image: 'https://b.zmtcdn.com/data/collections/1541bcd444e2623a01fbc751465fd23a_1675252064.jpg?output-format=webp', name: 'Special Punjabi Thali', details: 'Paneer Butter Masala + Mix Veg + Dal Fry + Jira Rice + 4 Butter Roti + Gulab Jamun + Salad + Papad + Butter Milk', price: '₹170', category: 'Thali' }
  ];

  return (
    <>
      <div style={styles.mainContainer}>
        <h2>Food Menu</h2>
        <div style={styles.container}>
          {menuItems.map(item => (
            <div key={item.id} style={styles.card}>
              <div style={styles.subtitle}>
                <div style={styles.imageWrapper}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                </div>
                <div>
                  <h4 style={styles.title}>{item.name}</h4>
                  <p style={styles.price}>{item.price}</p>
                </div>
                <button style={styles.button} onClick={() => navigate(`/food/${item.id}`)}>View Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FoodMenu;