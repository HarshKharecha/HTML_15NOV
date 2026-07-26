import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavbarNavLink from './components/NavbarNavLink'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Success from './pages/Success'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import EmployeeDetails from './pages/EmployeeDetails'
import EmployeesList from './pages/EmployeesList'
import StudentProfile from './pages/StudentProfile'
import StudentList from './pages/StudentList'
import BlogList from './pages/BlogList'
import BlogDetails from './pages/BlogDetails'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import PatientList from './pages/PatientList'
import PatientDetails from './pages/PatientDetails'
import CourseList from './pages/CourseList'
import CourseDetails from './pages/CourseDetails'
import ProductGallery from './pages/ProductGallery'
import ItemDetails from './pages/ItemDetails'
import Directory from './pages/Directory'
import EmployeeProfile from './pages/EmployeeProfile'
import AccountList from './pages/AccountList'
import AccountDetails from './pages/AccountDetails'
import BookList from './pages/BookList'
import BookDetails from './pages/BookDetails'
import OrderList from './pages/OrderList'
import OrderDetails from './pages/OrderDetails'
import FoodMenu from './pages/FoodMenu'
import FoodDetails from './pages/FoodDetails'
import More from './components/More'

function App() {

  return (
    <>
      <NavbarNavLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/employeeslist" element={<EmployeesList />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/patientlist" element={<PatientList />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/productgallery" element={<ProductGallery />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/demployee/:id" element={<EmployeeProfile />} />
        <Route path="/accountlist" element={<AccountList />} />
        <Route path="/account/:id" element={<AccountDetails />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/foodlist" element={<FoodMenu />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/more/*" element={<More />} />
      </Routes>
    </>
  )
}

export default App