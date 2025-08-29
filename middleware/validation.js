const validateBfhlInput = (req, res, next) => {
  try {
    const { data } = req.body;

    // Check if data exists and is an array
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input: 'data' must be an array"
      });
    }

    // Validate array is not empty
    if (data.length === 0) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input: 'data' array cannot be empty"
      });
    }

    next();
  } catch (error) {
    res.status(400).json({
      is_success: false,
      error: "Invalid JSON format"
    });
  }
};

module.exports = { validateBfhlInput };