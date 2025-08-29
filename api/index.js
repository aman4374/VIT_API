// api/index.js
const app = require('../app');

// Vercel calls this function per request
module.exports = (req, res) => {
  app(req, res);
};
