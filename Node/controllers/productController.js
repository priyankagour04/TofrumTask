const Product = require('../models/productModel'); 

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields (name, description, price, category) are required!" });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update product details
const updateProduct = async (req, res) => {
  const { id } = req.params;
  
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields (name, description, price, category) are required!" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params; // Get the product ID from URL parameters
    
    try {
      // Find the product by ID and delete it
      const deletedProduct = await Product.findByIdAndDelete(id);
  console.log(id);
      // If no product found
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Return a success message
      res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = { createProduct, getAllProducts, updateProduct , deleteProduct};
