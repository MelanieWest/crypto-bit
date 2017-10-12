// Require mysql npm
var mysql = require('mysql');

// Connect mysql
var connection;

if (process.env.JAWSDB_URL) {
  //if deployed to heroku...
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //else deploy locally
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crypto'
  });
}

// Export the Connection
module.exports = connection;