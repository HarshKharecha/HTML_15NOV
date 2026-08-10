import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { StudentContext } from '../context/StudentContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Stats from '../components/Stats';
import SearchBar from '../components/SearchBar';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import StudentDetails from '../components/StudentDetails';
import Footer from '../components/Footer';

function Dashboard() {
  const { colors, theme } = useContext(ThemeContext);
  const { selectedStudent } = useContext(StudentContext);

  // Task 19: Optimize Dashboard using useRef for values that bypass re-renders
  const timerIdRef = useRef(null);
  const prevStudentRef = useRef(null);
  const prevThemeRef = useRef(theme);

  useEffect(() => {
    // Storing Previous Student
    prevStudentRef.current = selectedStudent;
  }, [selectedStudent]);

  useEffect(() => {
    // Storing Previous Theme
    prevThemeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    // Storing Timer ID without state re-renders
    timerIdRef.current = setInterval(() => {
      // Background heartbeat or polling simulation
    }, 30000);

    return () => clearInterval(timerIdRef.current);
  }, []);

  const styles = {
    layout: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: colors.bgPrimary,
    },
    body: {
      display: 'flex',
      flex: 1,
    },
    main: {
      flex: 1,
      padding: '2rem',
      overflowY: 'auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
    },
  };

  return (
    <div style={styles.layout}>
      <Header />
      <div style={styles.body}>
        <Sidebar />
        <main style={styles.main}>
          <Stats />
          <SearchBar />
          <div style={styles.grid}>
            <div>
              <StudentForm />
              <StudentList />
            </div>
            <div>
              <StudentDetails />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;