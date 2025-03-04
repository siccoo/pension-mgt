import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import PasswordRecovery from "./components/auth/PasswordRecovery";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import ToastNotifications from "./components/notifications/ToastNotifications";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      {/* <ToastNotifications /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
      </Routes>
    </Router>
  );
};

export default App;
