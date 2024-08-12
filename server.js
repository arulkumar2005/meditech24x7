const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'arul2005',
  database: 'meditech'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Register endpoint
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    // Insert user into the database
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, hashedPassword], (err, results) => {
      if (err) throw err;
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Fetch user from the database
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];
      
      // Compare passwords
      bcrypt.compare(password, user.password, (err, match) => {
        if (err) throw err;

        if (match) {
          // Generate JWT token
          const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
          res.json({ message: 'Login successful', token });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      });
    } else {
      res.status(401).json({ message: 'User not found' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
