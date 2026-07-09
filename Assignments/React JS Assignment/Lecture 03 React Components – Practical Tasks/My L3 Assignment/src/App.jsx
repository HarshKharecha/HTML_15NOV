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

import React from 'react';

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
  return (
    <div>
      {/* --- TASK 15: Named Export Output --- */}
      <div style={{ background: '#ffeef0', padding: '10px', textAlign: 'right', fontSize: '12px' }}>
        <span><strong>Application:</strong> {getAppName()} | </span>
        <span><strong>Date:</strong> {formatDate()} | </span>
        <span><strong>Tax Calculation Preview ($100 base):</strong> ${calculateTax(100)}</span>
      </div>

      {/* --- TASK 20: Simple E-Commerce Homepage Ecosystem --- */}
      <Header />               {/* Component 1: Header */}
      <Navbar />               {/* Component 2: Category Menu / Navigation */}
      
      {/* Component 3: Banner */}
      <div style={{ backgroundColor: '#ffc107', padding: '30px', textAlign: 'center', margin: '15px 0' }}>
        <h2>Mega Summer Sale! Up to 50% Off!</h2>
      </div>

      {/* Component 4: Reusable Product Cards (Rendered 5 times: Task 12 & Task 20) */}
      <div style={{ padding: '20px' }}>
        <h3>Featured Products (Task 12: Identical Reusability 5x)</h3>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <hr />

      {/* --- SHOWCASING OTHER INDIVIDUAL TASKS (1 - 10) --- */}
      <div style={{ padding: '20px' }}>
        <h2>Individual Practice Component Suite (Tasks 1-10)</h2>
        <Welcome />
        <LoginMessage />
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '20px 0' }}>
          <StudentProfile />
          <UserCard />
          <CourseInfo />
          <EmployeeDetails />
        </div>
      </div>

      <hr />

      {/* --- TASK 11 & 16-19: Complex Component Assemblies --- */}
      <div style={{ padding: '20px' }}>
        <h2>Structural Layout Views (Tasks 11, 16, 17, 18, 19)</h2>
        
        <details style={{ margin: '10px 0', padding: '10px', border: '1px solid #aaa' }}>
          <summary><strong>Click to expand Task 11: Main Content View</strong></summary>
          <MainContent />
        </details>

        <details style={{ margin: '10px 0', padding: '10px', border: '1px solid #aaa' }}>
          <summary><strong>Click to expand Task 16: College Homepage Layout</strong></summary>
          <CollegeLayout />
        </details>

        <details style={{ margin: '10px 0', padding: '10px', border: '1px solid #aaa' }}>
          <summary><strong>Click to expand Task 17: Restaurant Homepage Layout</strong></summary>
          <RestaurantLayout />
        </details>

        <details style={{ margin: '10px 0', padding: '10px', border: '1px solid #aaa' }}>
          <summary><strong>Click to expand Task 18: Personal Portfolio Layout</strong></summary>
          <PortfolioLayout />
        </details>

        <details style={{ margin: '10px 0', padding: '10px', border: '1px solid #aaa' }}>
          <summary><strong>Click to expand Task 19: News Website Layout</strong></summary>
          <NewsLayout />
        </details>
      </div>

      <Footer /> {/* Component 5: Footer (Task 20) */}
    </div>
  );
}

export default App;