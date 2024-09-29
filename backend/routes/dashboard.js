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

router.get("/rentprice", (req, res) => {
  const rentingIncome = "SELECT SUM(renting_price) FROM rentings";

  const promise1 = new Promise((resolve, reject) => {
    db.query(rentingIncome, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data[0]["SUM(renting_price)"]);
    });
  });

  //promis 1 get renting price count
  Promise.all([promise1])
    .then((results) => {
      res.json({
        rentingsIncome: results[0],
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error executiong ", errors: err });
    });
});

module.exports = router;
