var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'relatedTracks'
});

connection.connect(err => {
  if (err) console.log('db Connection error', err);
});

exports.connection = connection;
