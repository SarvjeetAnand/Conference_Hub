import React from 'react';
import { Link } from 'react-router-dom';

function ConferenceCard({ conf }) {
  return (
    <div style={{ background: "#fff", padding: 15, marginBottom: 15 }}>
      <h2>{conf.title}</h2>
      <p>{conf.description}</p>
      <p><strong>Date:</strong> {conf.date} | <strong>Location:</strong> {conf.location}</p>
      <Link to={`/conference/${conf._id}`}>View Details</Link>
    </div>
  );
}

export default ConferenceCard;
