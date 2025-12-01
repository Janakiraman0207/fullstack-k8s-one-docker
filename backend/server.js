const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Headphones", price: 2500 },
  { id: 3, name: "Smartwatch", price: 3999 }
];

// API endpoint
app.get("/api/products", (req, res) => {
  res.json(products);
});

// For any other route, send index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Fullstack app running on port ${PORT}`);
});
