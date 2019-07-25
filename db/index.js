var mysql = require('mysql');
const { database, user, password } = require('./auth');

var connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  password: password,
  database: database
});

connection.connect(err => {
  if (err) console.log('db Connection error', err);
});

exports.connection = connection;
