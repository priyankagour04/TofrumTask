const express = require("express");

const router = express.Router();
const Product = require('../models/productModel');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

// Create a new product
router.post("/", createProduct);



// Get all products
router.get("/", getAllProducts);



// Update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct )



module.exports = router;
