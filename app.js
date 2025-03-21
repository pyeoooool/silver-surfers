const express = require('express'); //importing the Express.js library, a framework for Node.js
const { Pool } = require('pg'); //Pool is a class from the pg (node-postgres) library

const app = express(); //we put the express() method in the app variable

// PostgreSQL configuration
const pool = new Pool({
  user: 'postgres', // PostgreSQL username
  host: 'localhost', // Server host
  database: 'silversurfersdb', // Your database name
  password: 'postgres', // PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Test database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Database connection error:', err.stack));

// Example route to fetch data
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching users');
  }
});
/* app.get('/users', async (req, res) => {})
Defines an HTTP GET route at the /users endpoint.
Executes an SQL query (SELECT * FROM users) to fetch all rows from the users table in the database.
Sends the resulting rows back to the client as JSON.
If there's an error, it logs the error and sends a 500 (Internal Server Error) response.
*/

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
