import React from 'react';
import Header from './Header';
import Footer from './Footer';

function NewsLayout() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div style={{ flex: 3 }}>
          <h2>Latest News</h2>
          <article style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h3>React 19 Adoption Skyrockets globally</h3>
            <p>Developers praise the new compiler optimizations and simplified asset loading pipelines...</p>
          </article>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '10px' }}>
          <h3>Trending Sidebar</h3>
          <p>#TechTrends2026</p>
          <p>#ReactComponents</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NewsLayout;