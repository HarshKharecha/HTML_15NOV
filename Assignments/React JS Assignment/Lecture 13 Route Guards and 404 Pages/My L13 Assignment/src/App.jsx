import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Loader from './components/Loader';
import ProtectedRoute from './components/ProtectedRoute';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Existing dashboards lazy-loaded
const CompanyHome = lazy(() => import('./pages/CompanyHome'));
const StudentDashboardLayout = lazy(() => import('./pages/StudentDashboardLayout/StudentDashboardLayout'));
const StudentProfile = lazy(() => import('./pages/StudentDashboardLayout/StudentProfile'));
const StudentCourses = lazy(() => import('./pages/StudentDashboardLayout/StudentCourses'));
const StudentAssignments = lazy(() => import('./pages/StudentDashboardLayout/StudentAssignments'));
const AdminDashboardLayout = lazy(() => import('./pages/AdminDashboardLayout/AdminDashboardLayout'));
const AdminUsers = lazy(() => import('./pages/AdminDashboardLayout/AdminUsers'));
const AdminProducts = lazy(() => import('./pages/AdminDashboardLayout/AdminProducts'));
const AdminOrders = lazy(() => import('./pages/AdminDashboardLayout/AdminOrders'));
const AdminReports = lazy(() => import('./pages/AdminDashboardLayout/AdminReports'));
const EmployeeDashboardLayout = lazy(() => import('./pages/EmployeeDashboardLayout/EmployeeDashboardLayout'));
const EmployeeList = lazy(() => import('./pages/EmployeeDashboardLayout/EmployeeList'));
const EmployeeDetails = lazy(() => import('./pages/EmployeeDashboardLayout/EmployeeDetails'));
const EmployeeAttendance = lazy(() => import('./pages/EmployeeDashboardLayout/EmployeeAttendance'));
const EmployeeSalary = lazy(() => import('./pages/EmployeeDashboardLayout/EmployeeSalary'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />

          {/* Protected User Route */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Admin Route */}
          <Route
            path="admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminUsers />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="reports" element={<AdminReports />} />
          </Route>

          <Route
            path="student"
            element={
              <ProtectedRoute allowedRole="student">
                <StudentDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<StudentProfile />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="courses" element={<StudentCourses />} />
            <Route path="assignments" element={<StudentAssignments />} />
          </Route>

          <Route
            path="employee"
            element={
              <ProtectedRoute allowedRole="employee">
                <StudentDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<EmployeeList />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="details" element={<EmployeeDetails />} />
            <Route path="attendance" element={<EmployeeAttendance />} />
            <Route path="salary" element={<EmployeeSalary />} />
          </Route>

          {/* Legacy Protected & Layout Routes */}
          <Route path="companyhome" element={<CompanyHome />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;