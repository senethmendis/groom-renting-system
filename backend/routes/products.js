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

module.exports = router;
