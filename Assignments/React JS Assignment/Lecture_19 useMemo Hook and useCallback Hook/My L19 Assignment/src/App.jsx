import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import StatisticsPanel from './components/StatisticsPanel';
import SummaryCards from './components/SummaryCards';
import { generateProducts } from './utils/generateProducts';

const ALL_PRODUCTS = generateProducts(10000); // 10,000 Products
const CATEGORIES = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Sports'];

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    backgroundColor: '#f1f5f9',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: '1.5rem',
    overflowY: 'auto',
  },
  filterRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  placeholderPage: {
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
};

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard Overview'); // Added active tab state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  // const [cartcol, isCart] = useState([]);
  const [cart, setCart] = useState([]);

  // ==========================================
  // MEMOIZED COMPUTATIONS (useMemo)
  // ==========================================

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const statistics = useMemo(() => {
    if (filteredProducts.length === 0) {
      return { total: 0, avgPrice: 0, highestPrice: 0, lowestPrice: 0 };
    }

    const total = filteredProducts.length;
    const prices = filteredProducts.map((p) => p.price);
    const sumPrice = prices.reduce((acc, curr) => acc + curr, 0);
    const avgPrice = (sumPrice / total).toFixed(2);
    const highestPrice = Math.max(...prices).toFixed(2);
    const lowestPrice = Math.min(...prices).toFixed(2);

    return { total, avgPrice, highestPrice, lowestPrice };
  }, [filteredProducts]);

  // ==========================================
  // MEMOIZED CALLBACK HANDLERS (useCallback)
  // ==========================================

  const handleToggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }, []);

  const handleAddToCart = useCallback((id) => {
    setCart((prev) => prev.includes(id) ? prev.filter((cartId) => cartId !== id) : [...prev, id]);
  }, []);

  // ==========================================
  // RENDER CONTENT BASED ON ACTIVE TAB
  // ==========================================
  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard Overview':
        return (
          <>
            <SummaryCards
              totalCount={ALL_PRODUCTS.length}
              favoriteCount={favorites.length}
              cartCount={cart.length}
              activeCategories={CATEGORIES.length}
            />

            <div style={styles.filterRow}>
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
              <CategoryFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            <StatisticsPanel stats={statistics} />

            <ProductList
              products={filteredProducts}
              favorites={favorites}
              cart={cart}
              onToggleFavorite={handleToggleFavorite}
              onAddToCart={handleAddToCart}
            />
          </>
        );

      // ==========================================
      // UNDER DEVELOPMENT SO AFTER I APPLY ROUT
      // ==========================================

      case 'Product Management':
        return (
          <div style={styles.placeholderPage}>
            <h2>Product Management</h2>
            <p>Manage inventory, add new products, or update prices here. (Under development so after i apply rout)</p>
          </div>
        );

      case 'Performance Logs':
        return (
          <div style={styles.placeholderPage}>
            <h2>Performance Logs</h2>
            <p>Monitor system load, memory usage, and component render speeds. (Under development so after i apply rout)</p>
          </div>
        );

      case 'Settings':
        return (
          <div style={styles.placeholderPage}>
            <h2>Settings</h2>
            <p>Configure app preferences, themes, and user accounts here. (Under development so after i apply rout)</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={styles.app}>
      <Header />
      <div style={styles.body}>
        {/* Pass activeTab and setActiveTab down to Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main style={styles.content}>
          {renderContent()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;