const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM system_info";
  db.query(query, (err, data) => {
    try {
      if (err) throw err;
      if (data.affectedRows === 0) {
        return res.status(404).json({ message: "data Not Found!" });
      }
      res.json(data[0]);
    } catch (error) {
      console.error("Fetching prodcut data failed!", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM system_users";
  db.query(query, (err, data) => {
    try {
      if (err) throw err;
      if (data.affectedRows === 0) {
        return res.status(404).json({ message: "data Not Found!" });
      }
      res.json(data[0]);
    } catch (error) {
      console.error("Fetching prodcut data failed!", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

module.exports = router;
