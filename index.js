
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Data deletion endpoint
app.post('/delete-user-data', (req, res) => {
  const userId = req.body.user_id;
  console.log('Received data deletion request for user: ${userId}');
  // TODO: Add logic to delete user data from your database or storage
  res.status(200).send({ status: 'User data deletion initiated.' });
});

// Privacy policy route
app.get('/privacy-policy', (req, res) => {
  res.send('<h1>Privacy Policy</h1><p>To request deletion of your data, please send a POST request to /delete-user-data with your user_id.</p>');
});

// Root route
app.get('/', (req, res) => {
  res.send('Graph API Webhooks Sample App with Data Deletion Support');
});

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
