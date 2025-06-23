import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import ManageConferences from './pages/ManageConferences';
import ViewRegistrations from './pages/ViewRegistrations';
import ManageFeedback from './pages/ManageFeedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-conferences" element={<ManageConferences />} />
        <Route path="/view-registrations" element={<ViewRegistrations />} />
        <Route path="/manage-feedback" element={<ManageFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;
