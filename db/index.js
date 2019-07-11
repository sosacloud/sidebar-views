var mysql = require('mysql');

var connection = mysql.createConnection({
  host: `localhost`,
  username: 'root',
  password: 's1c4o8t7t',
  database: 'relatedTracks'
});

connection.connect((err) => {
  if (err) console.log('db Connection error', err);
});

exports.connection = connection;