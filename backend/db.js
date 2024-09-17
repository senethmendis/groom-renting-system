const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const databaseport = process.env.DATABASEPORT;

const db = mysql.createConnection({
  host: host,
  user: user,
  port: databaseport,
  password: password,
  database: database,
});

db.connect((err) => {
  if (err) {
    console.log(err, "Error Connecting to the database");
    return;
  }
  console.log("connected to database!");
});

module.exports = db;
