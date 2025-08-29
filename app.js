// app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bfhlRouter = require('./routes/bfhl');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/', bfhlRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    is_success: false,
    error: 'Internal server error'
  });
});
// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running. Use POST /bfhl to test."
  });
});


// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    is_success: false,
    error: 'Route not found'
  });
});

module.exports = app;
