const promptUser = require('./lib/prompt');
const db = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    promptUser();
})