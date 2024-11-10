const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoutes")
const cors = require("cors");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to DataBase");
  } catch (error) {
    console.error("Connection Error:", error.message);
  }
};

connectDB();
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
