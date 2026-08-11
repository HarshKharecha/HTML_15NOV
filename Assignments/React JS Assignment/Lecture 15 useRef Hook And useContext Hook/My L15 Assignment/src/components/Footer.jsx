import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  const { colors } = useContext(ThemeContext);

  const styles = {
    footer: {
      textAlign: 'center',
      padding: '1rem',
      backgroundColor: colors.bgSecondary,
      borderTop: `1px solid ${colors.border}`,
      color: colors.textSecondary,
      fontSize: '0.85rem',
    },
  };

  return (
    <footer style={styles.footer}>
      &copy; {new Date().getFullYear()} Student Management System - by Harsh S Kharecha
    </footer>
  );
}

export default Footer;