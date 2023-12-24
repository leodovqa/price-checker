const express = require('express');
const {Pool} = require('pg');

// Replace these variables with your PostgreSQL credentials
const pool = new Pool({
    user: 'ecflptzx',
    host: 'surus.db.elephantsql.com',
    database: 'ecflptzx',
    password: '2J7XG1Qc146lH4cpcjmzlscWlw7l0jHH',
    port: 5432,
});

const app = express();
const port = 3000;

app.get('/api', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
