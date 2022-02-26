const Prompt = require('./lib/Prompt');
const db = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    new Prompt().promptUser();
})