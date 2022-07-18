const mysql = require('mysql2');

// connect to the database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'K3wl!o05',
      database: 'company'
    },
    console.log('Connected to the company database.')
  );

  module.exports = db;