// import React from 'react';

// const ProductCatalog = () => {
//   // Array of 10 products matching the requirements
//   const products = [
//     { id: 101, name: 'MacBook Pro 14"', category: 'Electronics', price: 1999, brand: 'Apple', inStock: true },
//     { id: 102, name: 'Galaxy Ultra S26', category: 'Electronics', price: 1199, brand: 'Samsung', inStock: false },
//     { id: 103, name: 'Mechanical Keyboard k2', category: 'Accessories', price: 99, brand: 'Keychron', inStock: true },
//     { id: 104, name: 'Ergonomic Office Chair', category: 'Furniture', price: 349, brand: 'Steelcase', inStock: true },
//     { id: 105, name: 'Noise Cancelling Headphones', category: 'Audio', price: 299, brand: 'Sony', inStock: false },
//     { id: 106, name: 'Running Shoes Zoom', category: 'Apparel', price: 140, brand: 'Nike', inStock: true },
//     { id: 107, name: 'Smart Fitness Band', category: 'Wearables', price: 49, brand: 'Xiaomi', inStock: true },
//     { id: 108, name: '4K Ultra Short Throw Projector', category: 'Electronics', price: 1499, brand: 'Anker', inStock: true },
//     { id: 109, name: 'Coffee Dripper V60', category: 'Kitchen', price: 25, brand: 'Hario', inStock: false },
//     { id: 110, name: 'Leather Passport Wallet', category: 'Accessories', price: 65, brand: 'Bellroy', inStock: true },
//   ];

//   // Inline CSS definitions for responsive grid layouts
//   const gridContainerStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '20px',
//     padding: '20px'
//   };

//   const cardStyle = {
//     border: '1px solid #e0e0e0',
//     borderRadius: '8px',
//     padding: '16px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff'
//   };

//   const stockBadge = (inStock) => ({
//     padding: '4px 8px',
//     borderRadius: '4px',
//     fontSize: '0.85rem',
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: inStock ? '#28a745' : '#dc3545',
//     display: 'inline-block',
//     marginTop: '10px',
//     alignSelf: 'start'
//   });

//   return (
//     <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
//       <h1 style={{ textAlign: 'center', margin: '30px 0' }}>E-Commerce Product Catalog</h1>
      
//       <div style={gridContainerStyle}>
//         {products.map((product) => (
//           <div key={product.id} style={cardStyle}>
//             <div>
//               <span style={{ fontSize: '0.8rem', color: '#777', textTransform: 'uppercase' }}>
//                 {product.category}
//               </span>
//               <h3 style={{ margin: '8px 0', fontSize: '1.2rem', color: '#333' }}>{product.name}</h3>
//               <p style={{ margin: '4px 0', color: '#555' }}>Brand: <strong>{product.brand}</strong></p>
//               <h4 style={{ margin: '12px 0 0 0', color: '#007bff', fontSize: '1.4rem' }}>
//                 ${product.price}
//               </h4>
//             </div>
            
//             {/* Conditional Stock Status Output */}
//             <span style={stockBadge(product.inStock)}>
//               {product.inStock ? 'In Stock' : 'Out of Stock'}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCatalog;

import React from 'react'

function ProductCatalog() {
    const styles = {
        pageWrapper: {
            fontFamily: 'sans-serif',
            maxWidth: '1200px',
            // margin: '0 auto',
            padding: '20px'
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px',
            padding: '20px 0'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
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
        brandBadge: {
            fontSize: '0.8rem',
            color: '#777',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: '600'
        },
        title: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: '6px 0 12px 0'
        },
        price: {
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#2563eb',
            margin: '0 0 10px 0'
        },
        stockStatus: (inStock) => ({
            fontSize: '0.9rem',
            fontWeight: '700',
            color: inStock ? '#28a745' : '#dc3545', // Pure green or red text
            marginTop: 'auto',
            display: 'inline-block'
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

    return (
        <div style={styles.pageWrapper}>
            <h2 style={{ color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                E-Commerce Product Catalog
            </h2>

            <div style={styles.container}>
                {mobiles.map(mobile => (
                    <div key={mobile.id} style={styles.card}>
                        <div style={styles.imageWrapper}>
                            <img src={mobile.image} alt={mobile.name} style={styles.image} />
                        </div>

                        <div>
                            <span style={styles.brandBadge}>{mobile.brand}</span>
                            <h4 style={styles.title}>{mobile.name}</h4>
                            <p style={styles.price}>{mobile.price}</p>
                        </div>

                        {/* Text-based dynamic color indicators (No Background Fill) */}
                        <span style={styles.stockStatus(mobile.inStock)}>
                            • {mobile.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCatalog