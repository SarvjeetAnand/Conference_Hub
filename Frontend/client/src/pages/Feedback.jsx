import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Feedback() {
  const { id } = useParams();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/feedback', {
      conference: id,
      message
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    alert('Feedback submitted!');
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Submit Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea placeholder="Enter feedback..." value={message}
            onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Feedback;
