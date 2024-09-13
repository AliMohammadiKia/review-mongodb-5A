import mongoose from "mongoose"; // const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("successfully connected to db 🥂");
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
};

export default dbConnection; // module.exports = dbConnection;
