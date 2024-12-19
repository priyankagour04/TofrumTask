const express = require('express');
const bodyParser = require('body-parser');
require('./config/db'); // Assuming this connects your MongoDB
const productRoutes = require("./routes/productsRoutes"); // Correct path to productRoutes

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, CRUD API!');
});

// Use the product routes with the correct `/api/products` path
app.use('/api/products', productRoutes);

// Port to run the server on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
