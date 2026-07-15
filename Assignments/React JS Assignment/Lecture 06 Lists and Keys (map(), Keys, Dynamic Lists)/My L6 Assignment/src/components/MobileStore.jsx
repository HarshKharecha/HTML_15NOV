import React from 'react'

function MobileStore() {
  const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        imageWrapper: { width: '100%', height: '160px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' },
        image: { maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' },
        title: { fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        price: { fontSize: '1.2rem', fontWeight: '700', color: '#2563eb', margin: 0 }
    };

    const mobiles = [
        { id: 'mob-01', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzbbins-thumb-544702615?$216_216_PNG$', name: 'Galaxy S25 Ultra', brand: 'Samsung', price: '₹1,09,999' },
        { id: 'mob-02', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/s2602/gallery/in-galaxy-s26-ultra-s948-sm-s948bzvbins-thumb-550793679?$216_216_PNG$', name: 'Galaxy S26 Ultra', brand: 'Samsung', price: '₹1,18,999' },
        { id: 'mob-03', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTku6ccQ10IJpG71AI2V8f3CV3e66Hu4UGqZutxqtWSgX7RtHxtXLrZghqmYE4G1sIUcKQkBWVv6iLwTgZ_MvrxgSBDOEpRe28V-MjF1sNNruoE8yvymyEdmh0', name: 'iPhone 17 Pro Max', brand: 'Apple', price: '₹1,49,900' },
        { id: 'mob-04', image: 'https://m.media-amazon.com/images/I/51TvUow3bKL._SX569_.jpg', name: 'Pixel 10 Pro XL', brand: 'Google', price: '₹1,24,999' },
        { id: 'mob-05', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8l2qFCynw8VFWvlibudzD1SndhC3mOsMN-SCsBdCEA&s', name: 'OnePlus 15', brand: 'OnePlus', price: '₹72,999' },
        { id: 'mob-06', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2L0s6_0lGy3M7a1Y3KMGYLBYMPlBbnAgxCzIB6_TQlQ&s=10', name: 'Xiaomi 17 Ultra', brand: 'Xiaomi', price: '₹1,39,999' }
    ];

    return (
        <>
            <h2>Mobile Phone Catalog:</h2>
            <div style={styles.container}>
                {mobiles.map(mobile => (
                    <div key={mobile.id} style={styles.card}>
                        <div style={styles.imageWrapper}>
                            <img src={mobile.image} alt={mobile.name} style={styles.image} />
                        </div>
                        <div>
                            <h4 style={styles.title}>{mobile.name}</h4>
                            <h4 style={styles.title}>{mobile.brand}</h4>
                            <p style={styles.price}>{mobile.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MobileStore