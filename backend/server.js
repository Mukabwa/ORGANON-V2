const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// ROUTES
const authRoutes = require("./routes/authRoutes");

const timelineRoutes =
  require("./routes/timelineRoutes");

const definitionRoutes =
  require("./routes/definitionRoutes");

const occurrenceRoutes =
  require("./routes/occurrenceRoutes");

const routineRoutes =
  require(
    "./routes/routineRoutes"
  );

const routineInsertionRoutes =
  require(
    "./routes/routineInsertionRoutes"
  );

const projectRoutes =
  require(
    "./routes/projectRoutes"
  );

const goalRoutes =
  require(
    "./routes/goalRoutes"
  );


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

app.use(
  "/api/timeline",
  timelineRoutes
);

app.use(
  "/api/definitions",
  definitionRoutes
);

app.use(
  "/api/occurrences",
  occurrenceRoutes
);

app.use(
  "/api/routines",
  routineRoutes
);

app.use(
  "/api/routine-insertions",
  routineInsertionRoutes
);

app.use(
  "/api/projects",
  projectRoutes
);

app.use(
  "/api/goals",
  goalRoutes
);

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});