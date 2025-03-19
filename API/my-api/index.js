// index.js

// Import express module
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic Route (GET request)
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Define some example endpoints
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, welcome to the API!' });
});

// A POST endpoint
app.post('/api/user', (req, res) => {
  const user = req.body;  // Get data from request body
  res.json({ message: 'User created!', user: user });
});

// A GET endpoint with dynamic parameters
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Fetching user with ID: ${userId}` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//add middleware to handle errors
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next();  // Pass control to the next handler
  });

  
// connect database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB!'))
.catch((err) => console.log('Error connecting to MongoDB:', err));


// add authentication route
const jwt = require('jsonwebtoken');

// Route for generating token
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // In real life, validate user credentials against a database.
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protect routes with middleware
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(403).json({ message: 'Access denied' });

  jwt.verify(token, 'secretkey', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

