
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppContext } from './contexts/AppContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import MedicinesPage from './pages/MedicinesPage';
import CustomersPage from './pages/CustomersPage';
import BillingPage from './pages/BillingPage';
import ReportsPage from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';
import ReorderManagementPage from './pages/ReorderManagementPage';
import SalesReportPage from './pages/SalesReportPage'; // New
import PurchaseReportPage from './pages/PurchaseReportPage'; // New
import ProfitLossReportPage from './pages/ProfitLossReportPage'; // New
import Layout from './components/Layout';
import { UserRole } from './types';

const App: React.FC = () => {
  const { state } = useAppContext();
  const { currentUser } = state;

  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/" 
          element={
            currentUser ? <Layout><DashboardPage /></Layout> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/medicines" 
          element={
            currentUser ? <Layout><MedicinesPage /></Layout> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/customers" 
          element={
            currentUser ? <Layout><CustomersPage /></Layout> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/billing" 
          element={
            currentUser ? <Layout><BillingPage /></Layout> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/reports/archive" // Changed path for original reports page
          element={
            currentUser ? <Layout><ReportsPage /></Layout> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/reports/sales" 
          element={
            currentUser && (currentUser.role === UserRole.ADMIN || currentUser.role === UserRole.PHARMACIST) ? (
              <Layout><SalesReportPage /></Layout>
            ) : (
              <Navigate to={currentUser ? "/" : "/login"} />
            )
          } 
        />
        <Route 
          path="/reports/purchases" 
          element={
            currentUser && (currentUser.role === UserRole.ADMIN || currentUser.role === UserRole.PHARMACIST) ? (
              <Layout><PurchaseReportPage /></Layout>
            ) : (
              <Navigate to={currentUser ? "/" : "/login"} />
            )
          } 
        />
        <Route 
          path="/reports/profit-loss" 
          element={
            currentUser && currentUser.role === UserRole.ADMIN ? (
              <Layout><ProfitLossReportPage /></Layout>
            ) : (
              <Navigate to={currentUser ? "/" : "/login"} />
            )
          } 
        />
        <Route 
          path="/reorders" 
          element={ 
            currentUser && currentUser.role === UserRole.ADMIN ? (
              <Layout><ReorderManagementPage /></Layout>
            ) : (
              <Navigate to={currentUser ? "/" : "/login"} />
            )
          } 
        />
        <Route 
          path="/users" 
          element={
            currentUser && currentUser.role === UserRole.ADMIN ? (
              <Layout><UsersPage /></Layout>
            ) : (
              <Navigate to={currentUser ? "/" : "/login"} />
            )
          } 
        />
        <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
