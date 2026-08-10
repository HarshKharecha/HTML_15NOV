import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import ThemeProvider from './context/ThemeContext';
import StudentProvider from './context/StudentContext';

function AppContent() {
  const { user } = useContext(AuthContext);

  // Task 17: Protected Dashboard access
  return user ? <Dashboard /> : <Login />;
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <StudentProvider>
          <AppContent />
        </StudentProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;