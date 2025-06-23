import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="/manage-conferences">Manage Conferences</Link><br />
        <Link to="/view-registrations">View Registrations</Link><br />
        <Link to="/manage-feedback">Manage Feedback</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
