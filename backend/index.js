const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Mee',
  password: '12345678',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contacts', async (req, res) => {
  const { name, email, mobile, message } = req.body;

  console.log('Received request:', req.body);

  try {
    const query = 'INSERT INTO contacts (name, email, mobile, message) VALUES ($1, $2, $3, $4)';
    const values = [name, email, mobile, message];

    await pool.query(query, values);
    res.status(200).send('Message received');
  } catch (err) {
    console.error('Error executing query:', err.stack);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
