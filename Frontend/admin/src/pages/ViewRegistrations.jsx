import React, { useEffect, useState } from 'react';
import API from '../api';

const ViewRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegs = async () => {
      const res = await API.get('/conferences/registrations/all');
      setRegistrations(res.data);
    };
    fetchRegs();
  }, []);

  return (
    <div>
      <h2>All Registrations</h2>
      {registrations.map((r, i) => (
        <div key={i}>
          <h3 style={{ textAlign: 'center'}}>{r.title} ({r.date})</h3>
          <ul>
            {r.attendees.map(u => (
              <li key={u._id}>{u.name} - {u.email}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewRegistrations;
