const express = require("express");
const products = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("api is running... ");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:slug", (req, res) => {
  const product = products.find((p) => p.slug === req.params.slug);
  res.send(product);
});

app.listen(5000, console.log("server running on port 5000"));
