import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRole }) {
  // Read authentication token and user role from Local Storage
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  // Task 8 & 9: Redirect unauthorized users to Login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Task 13: Role-based route guard
  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;