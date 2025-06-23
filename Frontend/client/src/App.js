import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ConferenceDetails from './pages/ConferenceDetails';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/conference/:id" element={<ConferenceDetails />} />
        <Route path="/feedback/:id" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
