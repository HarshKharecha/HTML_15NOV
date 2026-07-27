import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DashboardLayout from './DashboardLayout';
import UsersPage from './UsersPage';
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';
import UserActivity from './UserActivity';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<h2>Welcome to the Admin Dashboard</h2>} />

          <Route path="users" element={<UsersPage />}>
            <Route index element={<Navigate to="usr-101/profile" replace />} />

            <Route path=":userId">
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="settings" element={<UserSettings />} />
              <Route path="activity" element={<UserActivity />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;