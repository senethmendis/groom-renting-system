const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const query = "SELECT * FROM products";
    db.query(query, (err, data) => {
      if (err) throw err;
      // console.table(data);
      return res.json(data);
    });
  } catch (error) {
    console.error("Fetching prodcut data failed!", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const query = "SELECT * FROM products WHERE product_id = ?";

    db.query(query, [id], (err, data) => {
      if (err) throw err;
      // console.table(data);
      return res.json(data);
    });
  } catch (error) {
    console.error("Fetching prodcut data failed!", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const query = "DELETE FROM products WHERE product_id=?";
    db.query(query, [id], (err, data) => {
      if (err) throw err;
      if (data.affectedRows === 0) {
        return res.status(404).json({ messafe: "Product Not Found!" });
      }

      return res.status(200).json({ message: "Product Deleted!" });
    });
  } catch (error) {
    console.error("Deleting Renting data failed!", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", (req, res) => {
  try {
    const query =
      "INSERT INTO products (`product_name`, `product_code`, `note`) VALUES (?)";
    const values = [
      req.body.product_name,
      req.body.product_code,
      req.body.notes,
    ];
    db.query(query, [values], (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      return res.json("New  product created");
    });
  } catch (error) {
    console.log(error);
  }
});

/////////////////////////////////////////////////

// app.put("/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const query =
//     "UPDATE products SET product_name = ?, category = ?, price = ?, unit = ?,stock_quantity= ?,image_url= ? WHERE product_id = ?";
//   const values = [
//     req.body.product_name,
//     req.body.category,
//     req.body.price,
//     req.body.unit,
//     req.body.stock_quantity,
//     req.body.image_url,
//   ];
//   db.query(query, [...values, productId], (err, data) => {
//     if (err) return err;
//     return res.json("Product Updated!");
//   });
// });

/////////////////////////////////////////////////

router.put("/", (req, res) => {
  const prductId = req.params.id;
  const query =
    "UPDATE products SET product_name = ? , product_code = ? , note = ?   WHERE product_id = ?;";
  const values = [req.body.product_name, req.body.product_code, req.body.note];

  db.query(query, [...values, prductId], (err, data) => {
    if (err) return err;
    return res.json("Product Updated!");
  });
});

module.exports = router;
