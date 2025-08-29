const express = require('express');
const router = express.Router();
const DataProcessor = require('../utils/processor');
const { validateBfhlInput } = require('../middleware/validation');

// User information - UPDATE THESE WITH YOUR DETAILS
const USER_INFO = {
  user_id: "john_doe_17091999", // Format: {full_name_ddmmyyyy}
  email: "john@xyz.com",
  roll_number: "ABCD123"
};

// GET endpoint (optional - for testing)
router.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
});

// POST endpoint - Main logic
router.post('/bfhl', validateBfhlInput, async (req, res) => {
  try {
    const { data } = req.body;
    
    const processor = new DataProcessor(USER_INFO);
    const result = processor.processData(data);
    
    res.status(200).json(result);
    
  } catch (error) {
    console.error('Processing error:', error);
    res.status(500).json({
      is_success: false,
      error: "Failed to process data"
    });
  }
});

module.exports = router;