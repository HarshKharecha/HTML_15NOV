// import { useState } from 'react'
// import './App.css'
// import Welcome from './components/Welcome'
// import StudentProfile from './components/StudentProfile'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import ProductCard from './components/ProductCard'
// import UserCard from './components/UserCard'
// import LoginMessage from './components/LoginMessage'
// import CourseInfo from './components/CourseInfo'
// import EmployeeDetails from './components/EmployeeDetails'
// import MainContent from './components/MainContent'
// import { getAppName, calculateTax, formatDate } from './utils/helperUtils';
// import CollegeLayout from './components/CollegeLayout'
// import RestaurantLayout from './components/RestaurantLayout'
// import PortfolioLayout from './components/PortfolioLayout'
// import NewsLayout from './components/NewsLayout'

// function App() {

//   return (
//     <>
//     <Welcome/>
//     <StudentProfile/>
//     <Header/>
//     <Footer/>
//     <Navbar/>
//     <ProductCard/>
//     <UserCard/>
//     <LoginMessage/>
//     <CourseInfo/>
//     <EmployeeDetails/>
//     <MainContent/>
//     <CollegeLayout/>
//     <RestaurantLayout/>
//     <PortfolioLayout/>
//     <NewsLayout/>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'

// Default Imports from components folder (Task 13 & 14)
import Welcome from './components/Welcome';
import StudentProfile from './components/StudentProfile';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import UserCard from './components/UserCard';
import LoginMessage from './components/LoginMessage';
import CourseInfo from './components/CourseInfo';
import EmployeeDetails from './components/EmployeeDetails';

// Layout Views
import CollegeLayout from './components/CollegeLayout';
import RestaurantLayout from './components/RestaurantLayout';
import PortfolioLayout from './components/PortfolioLayout';
import NewsLayout from './components/NewsLayout';

// Named Imports (Task 15)
import { getAppName, calculateTax, formatDate } from './utils/helperUtils';

function App() {
  const layouts = {
    topBar: {
      background: '#eff6ff',
      borderBottom: '1px solid #bfdbfe',
      padding: '12px 24px',
      textAlign: 'right',
      fontSize: '13px',
      color: '#1e40af',
      fontWeight: '500'
    },
    section: {
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '0 20px'
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#1e293b',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '8px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '29px',
      marginTop: '20px'
    },
    flexGroup: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '20px'
    }
  };

  return (
    <div>
      {/* --- TASK 15: Named Export Output --- */}
      <div style={layouts.topBar}>
        <span><strong>Portal:</strong> {getAppName()} 💡 </span>
        <span style={{ margin: '0 15px' }}>|</span>
        <span><strong>Date:</strong> {formatDate()} </span>
        <span style={{ margin: '0 15px' }}>|</span>
        <span><strong>Tax (100 Base):</strong> ₹{calculateTax(100)}</span>
      </div>

      {/* --- TASK 20: Simple E-Commerce Homepage Ecosystem --- */}
      <Header />               {/* Component 1: Header */}
      <Navbar />               {/* Component 2: Category Menu / Navigation */}

      {/* Component 3: Banner */}
      <div style={{ backgroundColor: '#2563eb', color: 'white', padding: '40px 20px', textAlign: 'center', boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>Mega Summer Sale! Up to 50% Off!</h2>
        <p style={{ opacity: 0.9, margin: 0 }}>Premium builds, unparalleled performance packages.</p>
      </div>

      {/* Component 4: Reusable Product Cards (Rendered 5 times: Task 12 & Task 20) */}
      <main style={layouts.section}>
        <h3 style={layouts.sectionTitle}>Featured Products (Task 12: Identical Reusability 5x)</h3>
        <div style={layouts.grid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>

      <hr />

      {/* --- SHOWCASING OTHER INDIVIDUAL TASKS (1 - 10) --- */}
      <section style={layouts.section}>
        <h2 style={layouts.sectionTitle}>Individual Practice Component Suite (Tasks 1-10)</h2>
        <Welcome />
        <LoginMessage />

        <div style={layouts.flexGroup}>
          <StudentProfile />
          <UserCard />
          <CourseInfo />
          <EmployeeDetails />
        </div>
      </section>

      <hr />

      {/* --- TASK 11 & 16-19: Complex Component Assemblies --- */}
      <section style={layouts.section}>
        <h2 style={layouts.sectionTitle}>Structural Layout Views (Tasks 11, 16, 17, 18, 19)</h2>

        <details style={{ margin: '15px 0', padding: '15px' }}>
          <summary>View Task 11: Main Content View</summary>
          <div style={{ padding: '15px 0' }}><MainContent /></div>
        </details>

        <details style={{ margin: '15px 0', padding: '15px' }}>
          <summary>View Task 16: College Homepage Layout</summary>
          <div style={{ padding: '15px 0' }}><CollegeLayout /></div>
        </details>

        <details style={{ margin: '15px 0', padding: '15px' }}>
          <summary>View Task 17: Restaurant Homepage Layout</summary>
          <div style={{ padding: '15px 0' }}><RestaurantLayout /></div>
        </details>

        <details style={{ margin: '15px 0', padding: '15px' }}>
          <summary>View Task 18: Personal Portfolio Layout</summary>
          <div style={{ padding: '15px 0' }}><PortfolioLayout /></div>
        </details>

        <details style={{ margin: '15px 0', padding: '15px' }}>
          <summary>View Task 19: News Website Layout</summary>
          <div style={{ padding: '15px 0' }}><NewsLayout /></div>
        </details>
      </section>

      <Footer /> {/* Component 5: Footer (Task 20) */}
    </div>
  );
}

export default App;