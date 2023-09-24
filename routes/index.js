var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  // Render HTML content as a string
  const htmlContent = '<html><body><h1>Hello from Express</h1></body></html>';
  
  // Send the HTML content as JSON
  res.json({ html: htmlContent });
});

// POST route for handling form submissions
router.post('/api/submit-form', (req, res) => {
  const formData = req.body; // The JSON data sent in the request body

  // Log the submitted form data (for demonstration purposes)
  console.log('Form Data from frontend to backend:', formData);

  // Respond with a success message or the submitted form data
  res.json({ message: 'Form data received successfully', formData });
});

module.exports = router;
