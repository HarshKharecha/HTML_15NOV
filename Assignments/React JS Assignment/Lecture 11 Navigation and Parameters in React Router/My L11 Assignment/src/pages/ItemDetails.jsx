import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const styles = {
    pageWrapper: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '1200px',
      margin: '20px auto',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    backButton: {
      marginBottom: '20px',
      padding: '8px 16px',
      backgroundColor: '#e2e8f0',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600'
    },
    layoutContainer: {
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    imageSection: {
      display: 'flex',
      gap: '16px',
      flex: '1 1 500px'
    },
    thumbnailColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    thumbnail: (isSelected) => ({
      width: '70px',
      height: '70px',
      border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
      borderRadius: '8px',
      cursor: 'pointer',
      objectFit: 'contain',
      backgroundColor: '#f8fafc',
      padding: '4px',
      transition: 'all 0.2s'
    }),
    mainImageWrapper: {
      flex: 1,
      height: '450px',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative'
    },
    mainImage: {
      maxWidth: '90%',
      maxHeight: '90%',
      objectFit: 'contain',
      transition: 'transform 0.3s ease'
    },
    infoSection: {
      flex: '1 1 500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    brandBadge: {
      fontSize: '0.85rem',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: '700'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#0f172a',
      margin: 0,
      lineHeight: '1.3'
    },
    colorInfo: {
      fontSize: '1rem',
      color: '#475569',
      margin: 0
    },
    price: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#2563eb',
      margin: 0
    },
    stockStatus: (inStock) => ({
      fontSize: '0.95rem',
      fontWeight: '700',
      color: inStock ? '#16a34a' : '#dc2626'
    }),
    sectionHeading: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#0f172a',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '8px',
      marginTop: '30px',
      marginBottom: '15px'
    },
    listContainer: {
      paddingLeft: '20px',
      margin: '0',
      color: '#334155',
      lineHeight: '1.6'
    },
    specsTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px'
    },
    specsRow: {
      borderBottom: '1px solid #e2e8f0'
    },
    specsKey: {
      padding: '10px 12px',
      fontWeight: '600',
      color: '#475569',
      width: '40%',
      backgroundColor: '#f8fafc'
    },
    specsVal: {
      padding: '10px 12px',
      color: '#334155'
    }
  };

  // Full products array matching the list component
  const products = [
    {
      id: 'I01',
      brand: 'Intel / Custom Build',
      name: 'The Frostfire Titan Intel PC',
      color: 'Frost White / Matte Black',
      price: '₹4,20,000',
      inStock: true,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10',
        'https://extremepcs.com/cdn/shop/files/Titanwhite.png?v=1763258394',
        'https://www.stormforcegaming.co.uk/wp-content/uploads/2026/06/X400-Gray-Hero-Shot-770x770.webp',
        'https://m.media-amazon.com/images/I/71IsuZPe-uL._SX522_.jpg'
      ],
      aboutItems: [
        'Powered by high-tier Intel Core processors delivering unmatched multi-threaded computing speeds.',
        'Equipped with advanced liquid cooling architecture to maintain optimal thermal stability under maximum loads.',
        'Features high-performance custom graphics configuration built for immersive 4K gaming and heavy rendering tasks.',
        'Integrated high-speed RGB lighting profiles with customizable software control.'
      ],
      specifications: {
        'Processor': 'Intel Core i9 Extreme Edition',
        'Graphics': 'NVIDIA GeForce RTX Dedicated GPU',
        'Memory (RAM)': '64GB DDR5 High-Speed RGB',
        'Storage': '2TB NVMe PCIe 4.0 SSD',
        'Operating System': 'Windows 11 Pro Pre-installed',
        'Power Supply': '1000W 80+ Gold Certified'
      }
    },
    {
      id: 'I02',
      brand: 'Samsung',
      name: 'Galaxy S25 Ultra',
      color: 'Titanium Silverblue / Titanium Gray / Titanium Whitesilver / Titanium Black',
      price: '₹1,09,999',
      inStock: true,
      images: [
        'https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzbbins-thumb-544702602?$Q90_330_330_F_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzsbins-thumb-544702837?$Q90_330_330_F_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzkbins-thumb-544702763?$Q90_330_330_F_PNG$'
      ],
      aboutItems: [
        'Equipped with the cutting-edge Snapdragon processor for ultimate mobile performance and AI capabilities.',
        'Advanced quad-camera system featuring a high-resolution main sensor for crystal-clear photography in any light.',
        'Built-in S Pen functionality for precision writing, drawing, and seamless multitasking.',
        'All-day intelligent battery life paired with ultra-fast charging technology.'
      ],
      specifications: {
        'Display': '6.8-inch Dynamic AMOLED 2X, 120Hz',
        'Processor': 'Qualcomm Snapdragon 8 Elite',
        'Rear Camera': '200MP + 50MP + 50MP + 12MP',
        'Battery': '5000 mAh with Fast Charging',
        'Operating System': 'Android 15, One UI',
        'Water Resistance': 'IP68 Dust/Water Resistant'
      }
    },
    {
      id: 'I03',
      brand: 'BTG',
      name: 'BTG Thunder Gaming Headphone',
      color: 'Sky Blue / Midnight Black',
      price: '₹999',
      inStock: true,
      images: [
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA',
        'https://m.media-amazon.com/images/X/bxt1/M/vbxt1xLEaFbwNfG._SL1920_QL80_FMwebp_.png',
        'https://m.media-amazon.com/images/X/bxt1/M/Kbxt1h7JSldcwJE._SL1920_QL80_FMwebp_.png',
        'https://m.media-amazon.com/images/X/bxt1/M/Wbxt1BjT5ROXCiy._SL1920_QL80_FMwebp_.png',
        'https://m.media-amazon.com/images/X/bxt1/M/Lbxt1BHcQPjBcr7._SL1920_QL80_FMwebp_.png',
        'https://m.media-amazon.com/images/X/bxt1/M/pbxt1BU92FaeyTL._SL1920_QL80_FMwebp_.png',
        'https://m.media-amazon.com/images/X/bxt1/M/Ebxt1RV2JE$J08y._SL1920_QL80_FMwebp_.jpg'
      ],
      aboutItems: [
        'Immersive stereo surround sound tuned specifically for competitive gaming audio cues.',
        'Ergonomic over-ear design with plush memory foam ear cushions for extended comfort during long gaming sessions.',
        'Built-in high sensitivity noise-isolating microphone for crystal-clear team communication.',
        'Durable braided cable design with universal multi-platform compatibility.'
      ],
      specifications: {
        'Driver Unit': '50mm Neodymium Drivers',
        'Connectivity': '3.5mm Jack / USB',
        'Microphone': 'Flexible Noise-Isolating Boom Mic',
        'Lighting': 'LED Accent Lighting',
        'Compatibility': 'PC, Consoles, Mobile'
      }
    },
    {
      id: 'I04',
      brand: 'Samsung',
      name: 'Galaxy Watch Ultra (2025) (LTE, 4.7 cm)',
      color: 'Titanium Blue / Titanium Gray / Titanium Silver',
      price: '₹59,999',
      inStock: true,
      images: [
        'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fza1ins-thumb-547659854?$216_216_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzs1ins-thumb-547659905?$216_216_PNG$'
      ],
      aboutItems: [
        'Built tough with aerospace-grade titanium frame engineered for extreme endurance and outdoor sports.',
        'Advanced BioActive sensor suite for continuous health, heart rate, and sleep tracking.',
        'Independent LTE connectivity lets you stay connected, stream music, and take calls without your phone.',
        'Dual-frequency GPS positioning for pinpoint tracking accuracy during runs and rides.'
      ],
      specifications: {
        'Display Size': '4.7 cm Super AMOLED, Sapphire Crystal',
        'Connectivity': '4G LTE, Bluetooth, Wi-Fi, NFC',
        'Durability': '10ATM + IP68 / MIL-STD-810H',
        'Battery Life': 'Up to 100 hours in Power Saving mode',
        'Sensors': 'BioActive Sensor, Temperature, Compass, Altimeter'
      }
    },
    {
      id: 'I05',
      brand: 'GOVO',
      name: 'GOVO GOLOUD 1000',
      color: 'Signature Black',
      price: '₹8,415',
      inStock: true,
      images: [
        'https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png',
        'https://govo.life/wp-content/uploads/2025/08/Slide-1-13-1024x1024.png',
        'https://m.media-amazon.com/images/I/618r6N0PyhL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/715PwMz-9BL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71EIYCN85IL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61mxe0qTV4L._SX679_.jpg'
      ],
      aboutItems: [
        'Delivers powerful audio output with deep, booming bass designed to elevate your music experience.',
        'Multiple connectivity options including Bluetooth, AUX, and USB inputs for effortless pairing.',
        'Sleek, modern aesthetic that fits seamlessly into any room decor or party setup.',
        'Easy-to-use control panel along with a handy remote control for seamless operation.'
      ],
      specifications: {
        'Audio Output': 'High-Performance Dynamic Sound',
        'Connectivity': 'Wireless Bluetooth, AUX, USB',
        'Design': 'Compact Tower / Soundbar Profile',
        'Controls': 'Integrated Panel & Remote Control',
        'Power Source': 'AC Power Adapter'
      }
    }
  ];

  // Find the product matching the route parameter 'id'
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(product ? product.images[0] : '');
  const [isZoomed, setIsZoomed] = useState(false);

  // Update selected image if route changes
  useEffect(() => {
    if (product && product.images) {
      setSelectedImage(product.images[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div style={styles.pageWrapper}>
        <h2>Product not found!</h2>
        <button style={styles.backButton} onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>← Back to Products</button>

      <div style={styles.layoutContainer}>
        {/* Left Side: Image Gallery with Vertical Thumbnails and Hover Zoom */}
        <div style={styles.imageSection}>
          <div style={styles.thumbnailColumn}>
            {product.images.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Thumbnail ${index + 1}`}
                style={styles.thumbnail(selectedImage === imgUrl)}
                onClick={() => setSelectedImage(imgUrl)}
              />
            ))}
          </div>

          <div
            style={styles.mainImageWrapper}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={selectedImage}
              alt={product.name}
              style={{
                ...styles.mainImage,
                transform: isZoomed ? 'scale(1.25)' : 'scale(1)'
              }}
            />
          </div>
        </div>

        {/* Right Side: Product Details Header, Color, Price, and Stock */}
        <div style={styles.infoSection}>
          <span style={styles.brandBadge}>{product.brand}</span>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.colorInfo}>Color: <b>{product.color}</b></p>
          <p style={styles.price}>{product.price}</p>
          <span style={styles.stockStatus(product.inStock)}>
            • {product.inStock ? 'In Stock & Ready to Ship' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Bottom Section: About This Item & Technical Specifications */}
      <div>
        <h3 style={styles.sectionHeading}>About This Item</h3>
        <ul style={styles.listContainer}>
          {product.aboutItems.map((point, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{point}</li>
          ))}
        </ul>

        <h3 style={styles.sectionHeading}>Technical Specifications</h3>
        <table style={styles.specsTable}>
          <tbody>
            {Object.entries(product.specifications).map(([key, value], index) => (
              <tr key={index} style={styles.specsRow}>
                <td style={styles.specsKey}>{key}</td>
                <td style={styles.specsVal}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemDetails;