const express = require('express');
const db = require('../db');

const router = express.Router();

// Lấy danh sách sản phẩm
router.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi khi lấy sản phẩm', error: err });
    res.json(results);
  });
});

// Thêm sản phẩm mới
router.post('/products', (req, res) => {
  const { name, price, description } = req.body;

  const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
  db.query(query, [name, price, description], (err) => {
    if (err) return res.status(500).json({ message: 'Thêm sản phẩm thất bại', error: err });
    res.json({ message: 'Thêm sản phẩm thành công' });
  });
});

// Cập nhật sản phẩm
router.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const query = 'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?';
  db.query(query, [name, price, description, id], (err) => {
    if (err) return res.status(500).json({ message: 'Cập nhật sản phẩm thất bại', error: err });
    res.json({ message: 'Cập nhật sản phẩm thành công' });
  });
});

// Xóa sản phẩm
router.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ message: 'Xóa sản phẩm thất bại', error: err });
    res.json({ message: 'Xóa sản phẩm thành công' });
  });
});

module.exports = router;
