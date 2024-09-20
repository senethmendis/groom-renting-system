const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

//routers
dotenv.config();
app.use(express.json());
app.use(cors());

const products = require("./routes/products");
const rentings = require("./routes/rentings");
const port = process.env.SERVERPORT;

app.use("/products", products);
app.use("/rentings", rentings);

// test route
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
