const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const secretKey = 'secret_key'; // Để tạo JWT (nên bảo mật trong biến môi trường)

// Đăng ký tài khoản
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash mật khẩu
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO accounts (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err) => {
    if (err) return res.status(500).json({ message: 'Đăng ký thất bại', error: err });
    res.json({ message: 'Đăng ký thành công' });
  });
});

// Đăng nhập
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM accounts WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi đăng nhập', error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Tài khoản không tồn tại' });

    const user = results[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
      res.json({ message: 'Đăng nhập thành công', token });
    } else {
      res.status(401).json({ message: 'Sai mật khẩu' });
    }
  });
});

module.exports = router;
