import { useState } from 'react'
import './App.css'
import StudentList from './components/StudentList'
import FruitList from './components/FruitList'
import EmployeeList from './components/EmployeeList'
import ProductCard from './components/ProductCard'
import CourseDetails from './components/CourseDetails'
import MovieCollection from './components/MovieCollection'
import MobileStore from './components/MobileStore'
import RestaurantMenu from './components/RestaurantMenu'
import ShoppingCart from './components/ShoppingCart'
import UserProfileCard from './components/UserProfileCard'
import BookInfo from './components/BookInfo'
import HospitalPatientRec from './components/HospitalPatientRec'
import TeamMembers from './components/TeamMembers'
import OrderHistory from './components/OrderHistory'
import StudentReportCard from './components/StudentReportCard'
import BlogList from './components/BlogList'
import SocialFeed from './components/SocialFeed'
import OnlineCourses from './components/OnlineCourses'
import CRMCustomerList from './components/CRMCustomerList'
import ProductCatalog from './components/ProductCatalog'

function App() {
  return (
    <>
      <StudentList />
      <FruitList/>
      <EmployeeList/>
      <ProductCard/>
      <CourseDetails/>
      <MovieCollection/>
      <MobileStore/>
      <RestaurantMenu/>
      <ShoppingCart/>
      <UserProfileCard/>
      <BookInfo/>
      <HospitalPatientRec/>
      <TeamMembers/>
      <OrderHistory/>
      <StudentReportCard/>
      <BlogList/>
      <SocialFeed/>
      <OnlineCourses/>
      <CRMCustomerList/>
      <ProductCatalog/>
    </>
  )
}

export default App
