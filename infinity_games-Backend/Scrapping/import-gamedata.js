const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Games = require("./../models/gameModel");

dotenv.config({ path: "./../config.env" });

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

// READ JSON FILE
const games_list = JSON.parse(
  fs.readFileSync(`${__dirname}/data13.json`, "utf-8")
);

// //   Import Data into DB
const importData = async () => {
  try {
    await Games.create(games_list);
    console.log("Data Successfully Loaded");
    process.exit();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
// //   Delete Data from DB
const deleteData = async () => {
  try {
    await Games.deleteMany();
    console.log("Data Successfully Deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

importData();
