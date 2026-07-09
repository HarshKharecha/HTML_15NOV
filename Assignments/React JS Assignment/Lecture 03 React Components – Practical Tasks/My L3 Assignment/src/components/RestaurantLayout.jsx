import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function RestaurantLayout() {
  return (
    <div>
      <Navbar />
      <section style={{ padding: '20px' }}>
        <h2>Our Scrumptious Menu</h2>
        <ul>
          <li>Truffle Pasta — $24</li>
          <li>Artisanal Margherita Pizza — $18</li>
        </ul>
      </section>
      <section style={{ padding: '20px', backgroundColor: '#fff3cd' }}>
        <h2>Special Weekend Offers!</h2>
        <p>Get 20% off on all online orders using code <strong>EATREACT</strong></p>
      </section>
      <Footer />
    </div>
  );
}
export default RestaurantLayout;