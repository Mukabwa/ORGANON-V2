const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// ROUTES
const authRoutes = require("./routes/authRoutes");

const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// DATABASE
connectDB();


// TEST ROUTE
app.get("/", (req, res) => {
  res.send("ORGANON V2 API Running");
});


// API ROUTES
app.use("/api/auth", authRoutes);


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});