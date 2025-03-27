const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Import routes (to be implemented)
// const authRoutes = require('./routes/authRoutes');
// const postRoutes = require('./routes/postRoutes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(helmet()); // Set security HTTP headers
app.use(morgan('dev')); // HTTP request logger
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to WhisperFeed API' });
});

// Apply routes (to be implemented)
// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: err.message
  });
});

module.exports = app; 