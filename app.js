// app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bfhlRouter = require('./routes/bfhl');

const app = express();

// Enhanced CORS configuration for public API
const corsOptions = {
  origin: '*', // Allow all origins for public API
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: false // Set to false for public API
};

// Middleware
app.use(cors(corsOptions));

// Configure helmet to be less restrictive for API
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false
}));

// Only use morgan in development to reduce noise in production logs
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('combined'));
}

app.use(express.json({ limit: '10mb' }));

// Add explicit OPTIONS handler for all routes
app.options('*', cors(corsOptions));

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: "BFHL API is running. Use POST /bfhl to process data.",
    endpoints: {
      "GET /bfhl": "Returns operation code",
      "POST /bfhl": "Processes input data array"
    }
  });
});

// Routes
app.use('/bfhl', bfhlRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    is_success: false,
    error: 'Internal server error'
  });
});

// 404 handler (keep last)
app.use('*', (req, res) => {
  res.status(404).json({
    is_success: false,
    error: 'Route not found. Available routes: GET /, GET /bfhl, POST /bfhl'
  });
});

module.exports = app;