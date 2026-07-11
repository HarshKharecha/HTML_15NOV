import React from 'react';

function Navbar() {
  const styles = {
    // Glassmorphism effect: sticky blur wrapper
    navWrapper: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
      transition: 'all 0.3s ease',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: '800',
      letterSpacing: '-0.03em',
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textDecoration: 'none',
    },
    menuList: {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      margin: 0,
      padding: 0,
    },
    link: {
      color: '#475569',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      position: 'relative',
      padding: '8px 0',
      transition: 'color 0.2s ease',
    },
    // Premium CTA Action Button
    ctaButton: {
      background: '#2563eb',
      color: '#ffffff',
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600',
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
      transition: 'all 0.2s ease',
    }
  };

  return (
    <div style={styles.navWrapper}>
      <nav style={styles.container}>
        {/* Brand Logo/Link */}
        <a href="#" style={styles.logo}>
          GENIUS<span style={{ color: '#0f172a', WebkitTextFillColor: '#0f172a' }}>.BUILD</span>
        </a>

        {/* Navigation Items */}
        <ul style={styles.menuList}>
          <li>
            <a href="#" style={styles.link} className="nav-premium-link">Home</a>
          </li>
          <li>
            <a href="#about" style={styles.link} className="nav-premium-link">About</a>
          </li>
          <li>
            <a href="#services" style={styles.link} className="nav-premium-link">Services</a>
          </li>
          <li>
            <a href="#contact" style={styles.link} className="nav-premium-link">Contact</a>
          </li>
          <li>
            <a href="#get-started" style={styles.ctaButton} className="nav-premium-cta">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;