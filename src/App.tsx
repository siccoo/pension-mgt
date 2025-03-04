import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import PasswordRecovery from "./components/auth/PasswordRecovery";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ToastNotifications from "./components/notifications/ToastNotifications";
import MemberDashboard from './components/dashboard/MemberDashboard';
import ContributionForm from './components/contribution/ContributionForm';
import ContributionHistory from './components/contribution/ContributionHistory';
import StatementGenerator from './components/statement/StatementGenerator';
import NotificationCenter from './components/notifications/NotificationCenter';
import "./index.css";

const App: React.FC = () => {
  const [contributions, setContributions] = React.useState<any[]>([]);

  const addContribution = (contrib: any) => {
    setContributions((prev) => [...prev, { ...contrib, status: 'Pending' }]);
  };
  return (
    <Router>
      <ToastNotifications />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MemberDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contributions"
          element={
            <ProtectedRoute>
              <div className="container mx-auto p-4">
                <ContributionForm onAdd={addContribution} />
                <ContributionHistory contributions={contributions} />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/statement"
          element={
            <ProtectedRoute>
              <StatementGenerator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <NotificationCenter />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
