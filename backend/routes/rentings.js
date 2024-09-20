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

router.post("/", (req, res) => {
  const query =
    "INSERT INTO `rentings` (`customer_name`, `customer_number`, `customer_nic`, `rented_date`, `return_date`, `product_name`, `product_code`, `note`,`renting_price`,`customer_address`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.number,
    req.body.nic,
    req.body.rentedDate,
    req.body.returnDate,
    req.body.productName,
    req.body.productCode,
    req.body.notes,
    req.body.price,
    req.body.address,
  ];
  db.query(query, [values], (err, data) => {
    if (err) throw err;
    return res.json("New Rent Added!");
  });
});

router.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const query = "DELETE FROM rentings WHERE renting_id=?";
    db.query(query, [id], (err, data) => {
      if (err) throw err;
      if (data.affectedRows === 0) {
        return res.status(404).json({ messafe: "Renting Not Found!" });
      }

      return res.status(200).json({ message: "Renting Deleted!" });
    });
  } catch (error) {
    console.error("Deleting Renting data failed!", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
