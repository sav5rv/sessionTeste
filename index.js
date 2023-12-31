const express = require('express');
const session = require('express-session');

const app = express();

app.use(require('cors')())


// Configure the session middleware
app.use(session({
  secret: 'my-secret-key',
  resave: true,
  saveUninitialized: true
}));

// Define a route to store data in the session

app.post('/store-data', (req, res) => {
  console.log("acesso app POST");
  const username = req.body.username;
  const email = req.body.email;

  req.session.username = username;
  req.session.email = email;

  res.send('Data stored in session successfully');
});

// Define a route to retrieve data from the session
app.get('/get-data', (req, res) => {
  console.log("acesso app GET");
  const username = req.session.username;
  const email = req.session.email;

  const data = {
    username,
    email
  };

  res.json(data);
});

app.listen(5500, () => {
  console.log('Server is listening on port 5500');
});
