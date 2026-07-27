import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CompanyHome from './pages/CompanyHome'
import CompanyServices from './pages/CompanyServices'
import CompanyContact from './pages/CompanyContact'
import StudentDashboardLayout from './pages/StudentDashboardLayout/StudentDashboardLayout'
import StudentProfile from './pages/StudentDashboardLayout/StudentProfile'
import StudentCourses from './pages/StudentDashboardLayout/StudentCourses'
import StudentAssignments from './pages/StudentDashboardLayout/StudentAssignments'
import AdminDashboardLayout from './pages/AdminDashboardLayout/AdminDashboardLayout'
import AdminUsers from './pages/AdminDashboardLayout/AdminUsers'
import AdminProducts from './pages/AdminDashboardLayout/AdminProducts'
import AdminOrders from './pages/AdminDashboardLayout/AdminOrders'
import AdminReports from './pages/AdminDashboardLayout/AdminReports'
import EmployeeDashboardLayout from './pages/EmployeeDashboardLayout/EmployeeDashboardLayout'
import EmployeeList from './pages/EmployeeDashboardLayout/EmployeeList'
import EmployeeDetails from './pages/EmployeeDashboardLayout/EmployeeDetails'
import EmployeeAttendance from './pages/EmployeeDashboardLayout/EmployeeAttendance'
import EmployeeSalary from './pages/EmployeeDashboardLayout/EmployeeSalary'
import HospitalDashboardLayout from './pages/HospitalDashboardLayout/HospitalDashboardLayout'
import Patients from './pages/HospitalDashboardLayout/Patients'
import Doctors from './pages/HospitalDashboardLayout/Doctors'
import Appointments from './pages/HospitalDashboardLayout/Appointments'
import Billing from './pages/HospitalDashboardLayout/Billing'
import SchoolDashboardLayout from './pages/SchoolDashboardLayout/SchoolDashboardLayout'
import Students from './pages/SchoolDashboardLayout/Students'
import Teachers from './pages/SchoolDashboardLayout/Teachers'
import Subjects from './pages/SchoolDashboardLayout/Subjects'
import Attendance from './pages/SchoolDashboardLayout/Attendance'
import BankingDashboardLayout from './pages/BankingDashboardLayout/BankingDashboardLayout'
import Account from './pages/BankingDashboardLayout/Account'
import Transactions from './pages/BankingDashboardLayout/Transactions'
import Cards from './pages/BankingDashboardLayout/Cards'
import Loans from './pages/BankingDashboardLayout/Loans'
import Profile from './pages/BankingDashboardLayout/Profile'
import Books from './pages/LibraryPortalLayout/Books'
import Authors from './pages/LibraryPortalLayout/Authors'
import Categories from './pages/LibraryPortalLayout/Categories'
import Members from './pages/LibraryPortalLayout/Members'
import LibraryPortalLayout from './pages/LibraryPortalLayout/LibraryPortalLayout'
import CustomerDashboardLayout from './pages/CustomerDashboardLayout/CustomerDashboardLayout'
import Orders from './pages/CustomerDashboardLayout/Orders'
import Wishlist from './pages/CustomerDashboardLayout/Wishlist'
import Addresses from './pages/CustomerDashboardLayout/Addresses'
import Settings from './pages/CustomerDashboardLayout/Settings'
import Profilec from './pages/CustomerDashboardLayout/Profilec'
import LearningDashboardLayout from './pages/LearningDashboardLayout/LearningDashboardLayout'
import MyCourses from './pages/LearningDashboardLayout/MyCourses'
import Assignments from './pages/LearningDashboardLayout/Assignments'
import Certificates from './pages/LearningDashboardLayout/Certificates'
import Attendancel from './pages/LearningDashboardLayout/Attendancel'
import Profilel from './pages/LearningDashboardLayout/Profilel'
import More from './components/More'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="companyhome" element={<CompanyHome />} />
          <Route path="companyservices" element={<CompanyServices />} />
          <Route path="companycontact" element={<CompanyContact />} />
          <Route path="/student" element={<StudentDashboardLayout />}>
            <Route index element={<StudentProfile />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="courses" element={<StudentCourses />} />
            <Route path="assignments" element={<StudentAssignments />} />
          </Route>
          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route index element={<AdminUsers />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="reports" element={<AdminReports />} />
          </Route>
          <Route path="/employee" element={<EmployeeDashboardLayout />}>
            <Route index element={<EmployeeList />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="details" element={<EmployeeDetails />} />
            <Route path="attendance" element={<EmployeeAttendance />} />
            <Route path="salary" element={<EmployeeSalary />} />
          </Route>
          <Route path="/hospital" element={<HospitalDashboardLayout />}>
            <Route index element={<Patients />} />
            <Route path="patients" element={<Patients />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="billing" element={<Billing />} />
          </Route>
          <Route path="/school" element={<SchoolDashboardLayout />}>
            <Route index element={<Students />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>
          <Route path="/banking" element={<BankingDashboardLayout />}>
            <Route index element={<Account />} />
            <Route path="account" element={<Account />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="cards" element={<Cards />} />
            <Route path="loans" element={<Loans />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/library" element={<LibraryPortalLayout />}>
            <Route index element={<Books />} />
            <Route path="Books" element={<Books />} />
            <Route path="authors" element={<Authors />} />
            <Route path="categories" element={<Categories />} />
            <Route path="members" element={<Members />} />
          </Route>
          <Route path="/customer" element={<CustomerDashboardLayout />}>
            <Route index element={<Orders />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="profilec" element={<Profilec />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/learning" element={<LearningDashboardLayout />}>
            <Route index element={<MyCourses />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="attendancel" element={<Attendancel />} />
            <Route path="profilel" element={<Profilel />} />
          </Route>
          <Route path="/more/*" element={<More />} />
        </Route>
      </Routes>
    </>
  )
}

export default App