import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ConferenceCard from '../components/ConferenceCard';

function Home() {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/conferences')
      .then((res) => setConferences(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>All Conferences</h2>
        {conferences.map((conf) => <ConferenceCard key={conf._id} conf={conf} />)}
      </div>
    </>
  );
}

export default Home;
