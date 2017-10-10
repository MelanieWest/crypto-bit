// Require mysql npm
var mysql = require('mysql');

// Connect mysql
var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crypto'

});


if (process.env.JAWSDB_URL) {
  //if deployed to heroku...
  connect = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //else deploy locally
  connect = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', 
    database : 'crypto'
  });
}

// Export the Connection
module.exports = connection;