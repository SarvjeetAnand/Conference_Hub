const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const conferenceRoutes = require('./routes/conferenceRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(cors({
  origin: '*', // admin panel frontend URL
  credentials: true     
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/conferences', conferenceRoutes);
app.use('/api/feedback', feedbackRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => console.log('Server running'));
}).catch((err) => console.error(err));
