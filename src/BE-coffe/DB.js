const mysql = require('mysql');

// Kết nối MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coffee_db',
});

db.connect((err) => {
  if (err) {
    console.error('Kết nối MySQL thất bại:', err);
    process.exit(1);
  }
  console.log('Đã kết nối MySQL');
});

module.exports = db;
