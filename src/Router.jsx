import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

const RequireRole = ({ role, children }) => {
  const current = typeof window !== 'undefined' ? localStorage.getItem('scaleshield_role') : null;
  if (!current) return <Navigate to="/login" replace />;
  if (current !== role) return <Navigate to={current === 'admin' ? '/dashboard/admin' : '/dashboard/employee'} replace />;
  return children;
};

const Router = () => {
  const [, setAuthedRole] = React.useState(() => (typeof window !== 'undefined' ? localStorage.getItem('scaleshield_role') : null));

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login onAuth={setAuthedRole} />} />
      <Route
        path="/dashboard/admin"
        element={
          <RequireRole role="admin">
            <AdminDashboard />
          </RequireRole>
        }
      />
      <Route
        path="/dashboard/employee"
        element={
          <RequireRole role="employee">
            <EmployeeDashboard />
          </RequireRole>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
