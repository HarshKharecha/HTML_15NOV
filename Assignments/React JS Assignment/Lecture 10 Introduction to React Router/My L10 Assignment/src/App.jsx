import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavbarLink from './components/NavbarLink'
import NavbarNavLink from './components/NavbarNavLink'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import StudentPortal from './components/StudentPortal'
import RestaurantWebsite from './components/RestaurantWebsite'
import CompanyWebsite from './components/CompanyWebsite'
import HospitalWebsite from './components/HospitalWebsite'
import CollegeSystem from './components/CollegeSystem'
import BankingDashboard from './components/BankingDashboard'
import EmployeeSystem from './components/EmployeeSystem'
import ShoppingWebsite from './components/ShoppingWebsite'
import More from './components/More'

function App() {

  return (
    <>
      <NavbarLink />
      <NavbarNavLink/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studentportal" element={<StudentPortal />} />
        <Route path="/companywebsite/*" element={<CompanyWebsite />} />
        <Route path="/restaurantwebsite" element={<RestaurantWebsite />} />
        <Route path="/hospitalwebsite/*" element={<HospitalWebsite />} />
        <Route path="/collegesystem/*" element={<CollegeSystem />} />
        <Route path="/bankingdashboard/*" element={<BankingDashboard />} />
        <Route path="/employeesystem/*" element={<EmployeeSystem />} />
        <Route path="/shoppingwebsite/*" element={<ShoppingWebsite />} />
        <Route path="/more/*" element={<More />} />
      </Routes>
    </>
  )
}

export default App
