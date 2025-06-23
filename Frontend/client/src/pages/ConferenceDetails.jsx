import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function ConferenceDetails() {
  const { id } = useParams();
  const [conf, setConf] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/conferences/${id}`)
      .then(res => setConf(res.data));
  }, [id]);

  const handleRegister = async () => {
    await axios.post(`http://localhost:5000/api/conferences/${id}/register`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    alert('Registered!');
  };

  if (!conf) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>{conf.title}</h2>
        <p>{conf.description}</p>
        <p><strong>Date:</strong> {conf.date}</p>
        <p><strong>Location:</strong> {conf.location}</p>
        <button onClick={handleRegister}>Register</button>
        <br /><br />
        <Link to={`/feedback/${conf._id}`}>Submit Feedback</Link>
      </div>
    </>
  );
}

export default ConferenceDetails;
