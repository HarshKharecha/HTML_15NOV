import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import StudentResult from './components/StudentResult'
import AgeVerification from './components/AgeVerification'
import ProductAvailability from './components/ProductAvailability'
import NotificationBadge from './components/NotificationBadge'
import LoginLogoutUI from './components/LoginLogoutUI'
import DarkModeToggle from './components/DarkModeToggle'
import LoadingScreen from './components/LoadingScreen'
import ShoppingCartStatus from './components/ShoppingCartStatus'
import MovieTicketBooking from './components/MovieTicketBooking'
import EmployeeDashboard from './components/EmployeeDashboard'
import AdminPanel from './components/AdminPanel'
import BankAccountStatus from './components/BankAccountStatus'
import CourseEnrollment from './components/CourseEnrollment'
import HospitalAppointment from './components/HospitalAppointment'
import FoodDeliveryStatus from './components/FoodDeliveryStatus'
import ECommerceDiscount from './components/ECommerceDiscount'
import StudentAttendance from './components/StudentAttendance'
import CricketScoreboard from './components/CricketScoreboard'
import UserAuthDashboard from './components/UserAuthDashboard'

function App() {

  return (
    <>
      <WelcomeMessage />
      <StudentResult />
      <AgeVerification />
      <ProductAvailability />
      <NotificationBadge />
      <LoginLogoutUI />
      <DarkModeToggle />
      <LoadingScreen />
      <ShoppingCartStatus />
      <MovieTicketBooking />
      <EmployeeDashboard />
      <AdminPanel />
      <BankAccountStatus />
      <CourseEnrollment />
      <HospitalAppointment />
      <FoodDeliveryStatus />
      <ECommerceDiscount />
      <StudentAttendance />
      <CricketScoreboard />
      <UserAuthDashboard />
    </>
  )
}

export default App
