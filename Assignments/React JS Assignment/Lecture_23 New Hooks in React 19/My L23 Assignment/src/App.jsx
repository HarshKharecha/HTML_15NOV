import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';

const styles = {
  app: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0f172a' },
  body: { display: 'flex', flex: 1 }
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div style={styles.app}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div style={styles.body}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard searchQuery={searchQuery} />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;