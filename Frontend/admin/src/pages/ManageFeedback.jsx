import React, { useEffect, useState } from 'react';
import API from '../api';

const ManageFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    const res = await API.get('/feedback');
    setFeedbacks(res.data);
  };

  const deleteFeedback = async id => {
    await API.delete(`/feedback/${id}`);
    fetchFeedback();
  };

  useEffect(() => { fetchFeedback(); }, []);

  return (
    <div>
      <h2>Manage Feedback</h2>
      {feedbacks.map(fb => (
        <div style={{textAlign:"center"}} key={fb._id}>
          <p><strong>{fb.user.name}</strong> on <i>{fb.conference.title}</i>: {fb.message}</p>
          <button style={{width:100}} onClick={() => deleteFeedback(fb._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageFeedback;
