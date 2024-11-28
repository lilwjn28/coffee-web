const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const accountRoutes = require('./routes/account');
const productRoutes = require('./routes/product');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sử dụng các routes
app.use('/api/account', accountRoutes);
app.use('/api/product', productRoutes);

// Chạy server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
