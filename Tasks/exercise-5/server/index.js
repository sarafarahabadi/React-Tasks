const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const productData = require("./productData.json");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// ------------------------------------ PRODUCTS --------------------------------

let productId = productData.products.length;

app.get("/", (req, res) => {
  res.send("Hello world");
});

// get all products
app.get("/products", (req, res) => {
  res.json(productData.products);
});

// create a new product
app.post("/products", (req, res) => {
  productId++,
    productData.products.push({
      id: productId,
      productName: req.body.productName,
      price: req.body.price,
    });

  res.send("new product is created");
});

// delete a product
app.delete("/products/:id", (req, res) => {
  const result = productData.products.findIndex(
    (product) => product.id == req.params.id
  );

  if (result !== -1) {
    productData.products.splice(result, 1);
    res.send("Deleted successfully");
  } else {
    res.send("No product found");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
