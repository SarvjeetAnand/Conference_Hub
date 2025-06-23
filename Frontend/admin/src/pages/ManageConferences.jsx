import React, { useEffect, useState } from 'react';
import API from '../api';
import ConferenceForm from '../components/ConferenceForm';

const ManageConferences = () => {
    const [conferences, setConferences] = useState([]);
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        fetchConferences();
    }, []);

    const fetchConferences = async () => {
        const res = await API.get('/conferences');
        setConferences(res.data);
    };

    const createConference = async (data) => {
        await API.post('/conferences', data);
        fetchConferences();
    };

    const updateConference = async (data) => {
        await API.put(`/conferences/${editing._id}`, data);
        setEditing(null);
        fetchConferences();
    };

    const deleteConference = async (id) => {
        await API.delete(`/conferences/${id}`);
        fetchConferences();
    };

    return (
        <div>
            <h2>Manage Conferences</h2>
            {editing ? (
                <ConferenceForm initialData={editing} onSubmit={updateConference} submitText="Update" />
            ) : (
                <ConferenceForm onSubmit={createConference} />
            )}
            <ul>
                {conferences.map(conf => (
                    <li key={conf._id}>
                        {conf.title} - {conf.date}
                        <div>
                            <button style={{width:100}} onClick={() => setEditing(conf)}>Edit</button>
                            <button style={{width:100}} onClick={() => deleteConference(conf._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageConferences;
