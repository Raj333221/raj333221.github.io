// filepath: /c:/Raj333221/CoPilot/pubBlogsite/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'feedback'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Handle form submission
app.post('/submit-feedback', (req, res) => {
    const feedback = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };

    const sql = 'INSERT INTO feedback SET ?';
    db.query(sql, feedback, (err, result) => {
        if (err) {
            res.status(500).send('Error saving feedback.');
        } else {
            res.status(200).send('Feedback saved successfully.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});