import { useState } from 'react'
import './App.css'
import WelcomeButton from './components/WelcomeButton'
import CounterApp from './components/CounterApp'
import LikeButton from './components/LikeButton'
import LightToggle from './components/LightToggle'
import ChangeBgColor from './components/ChangeBgColor'
import LiveNamePreview from './components/LiveNamePreview'
import EmailInput from './components/EmailInput'
import SearchBox from './components/SearchBox'
import LoginForm from './components/LoginForm'
import StudentRegistration from './components/StudentRegistration'
import ProductDetailsButton from './components/ProductDetailsButton'
import DeleteEmployee from './components/DeleteEmployee'
import MovieSelection from './components/MovieSelection'
import RestaurantMenu from './components/RestaurantMenu'
import ShoppingCart from './components/ShoppingCart'
import FeedbackForm from './components/FeedbackForm'
import UserProfileUpdate from './components/UserProfileUpdate'
import ProductQtySelector from './components/ProductQtySelector'
import HospitalAppointmentBooking from './components/HospitalAppointmentBooking'
import ECommerceDashboard from './components/ECommerceDashboard'

function App() {

  return (
    <>
      <WelcomeButton />
      <CounterApp />
      <LikeButton />
      <LightToggle />
      <ChangeBgColor />
      <LiveNamePreview />
      <EmailInput />
      <SearchBox />
      <LoginForm />
      <StudentRegistration />
      <ProductDetailsButton />
      <DeleteEmployee />
      <MovieSelection />
      <RestaurantMenu />
      <ShoppingCart />
      <FeedbackForm />
      <UserProfileUpdate />
      <ProductQtySelector />
      <HospitalAppointmentBooking />
      <ECommerceDashboard />
    </>
  )
}

export default App
