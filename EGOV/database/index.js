const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1b-45x2S',
  database: 'egov'
});



module.exports= pool.promise()