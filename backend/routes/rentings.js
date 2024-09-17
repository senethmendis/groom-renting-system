const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const query = "SELECT * FROM rentings";
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

module.exports = router;
