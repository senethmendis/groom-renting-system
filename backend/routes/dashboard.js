const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  const query1 = "SELECT COUNT(*) FROM rentings";
  const query2 = "SELECT COUNT(*) FROM products";

  const promise1 = new Promise((resolve, reject) => {
    db.query(query1, (err, data) => {
      if (err) {
        reject(err);
      }
      //console.log(data);
      resolve(data[0]["COUNT(*)"]);
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    db.query(query2, (err, data) => {
      if (err) {
        reject(err);
      }
      //console.log(data);
      resolve(data[0]["COUNT(*)"]);
    });
  });

  //use 2 promisses ti  get the count of rentings and products

  Promise.all([promise1, promise2])
    .then((results) => {
      res.json({
        rentingsCount: results[0],
        productsCount: results[1],
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error executing quries", errors: err });
    });
});

module.exports = router;
