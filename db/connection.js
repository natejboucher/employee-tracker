const mysql = require('mysql2');

//require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'zerotwo',
      database: 'employee_tracker'
    },
    console.log('Connected to the Employee Tracker database.')
  );

  module.exports = db;