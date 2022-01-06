const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.json());

// ------------------------------------ PRODUCTS --------------------------------
let products = [
  {
    id: uuidv4(),
    productName: "Keyboard",
    price: "15€",
  },
  {
    id: uuidv4(),
    productName: "Monitor",
    price: "120€",
  },
];

// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// get a single product
app.get("/products/:id", (req, res) => {
  const result = products.find((product) => product.id === req.params.id);
  res.send(result);
});

// create a new product
app.post("/products", (req, res) => {
  console.log(req.body);
  products.push({
    id: uuidv4(),
    productName: req.body.productName,
    price: req.body.price,
  });

  res.send("new product is created");
});

// delete a product
app.delete("/products/:id", (req, res) => {
  const result = products.findIndex((product) => product.id === req.params.id);
  if (result !== -1) {
    products.splice(result, 1);
    res.send("Deleted successfully");
  } else {
    res.send("No product found");
  }
});

// delete all products
app.delete("/products", (req, res) => {
  products.splice(0, products.length);
  res.send("All products deleted");
});

// modify a product
app.put("/products/:id", (req, res) => {
  const result = products.findIndex((product) => product.id === req.params.id);
  if (result !== -1) {
    products.splice(result, 1);
    products.push({
      id: uuidv4(),
      productName: req.body.productName,
      price: req.body.price,
    });
    res.send("Updated successfully");
  } else {
    res.send("No product found");
  }
});

// ------------------------------------ USERS --------------------------------
let users = [
  {
    id: uuidv4(),
    name: "Joe Smith",
    address: "Oulu",
    username: "j.smith",
    password: "j.password",
  },
];

// get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// create user
app.post("/users", (req, res) => {
  console.log(req.body);
  users.push({
    id: uuidv4(),
    name: req.body.name,
    address: req.body.address,
    username: req.body.username,
    password: req.body.password,
  });

  res.send("new user is created");
});

// ------------------------------------ PURCHASE / INVOICE --------------------------------

let invoices = [
  {
    id: uuidv4(),
    productName: "Laptop",
    price: "600€",
  },
];

// get invoices of a user
app.get("/invoices", (req, res) => {
  res.json(invoices);
});

// get a single invoice
app.get("/invoices/:id", (req, res) => {
    const result = invoices.find((invoice) => invoice.id === req.params.id);
    res.send(result);
  });

// delete a invoice
app.delete("/invoices/:id", (req, res) => {
  const result = invoices.findIndex((invoice) => invoice.id === req.params.id);
  if (result !== -1) {
    invoices.splice(result, 1);
    res.send("Deleted successfully");
  } else {
    res.send("No invoice found");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
