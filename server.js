require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const studentsRoutes = require('./routes/students');
const teachersRoutes = require('./routes/teachers');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/w03_students_teachers';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Swagger setup — must be after app is initialized
const setupSwagger = require('./swagger/swagger'); // correct path
setupSwagger(app); // call after app and MongoDB setup

// Routes
app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) return next(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
