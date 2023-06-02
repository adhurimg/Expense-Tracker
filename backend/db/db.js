const { Client } = require('pg');

const db = new Client({
    host: 'localhost',
    port: 5432,
    user: 'kk',
    database: 'exptrc'
});

db.connect((err) => {
    if (err) {
        console.error('connection error', err.stack);
    } else {
        console.log('connected');
    }
});
