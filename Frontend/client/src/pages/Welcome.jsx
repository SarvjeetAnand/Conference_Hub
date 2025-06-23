// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎉 Welcome to Conference Hub!</h1>
      <p>Your one-stop platform to explore, register, and share feedback for amazing conferences!</p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/register">
          <button style={{ marginRight: '10px' }}>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h3>Features for Users:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>✅ View list of upcoming conferences</li>
          <li>✅ See full conference details</li>
          <li>✅ Register to attend any event</li>
          <li>✅ Submit feedback on attended conferences</li>
        </ul>
      </div>
    </div>
  );
}

export default Welcome;
