const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config");

// Initialize an instance of Express.js
const app = express();

// Specify on which port for Express.js server
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cors middleware
const corsOptions = {
  origin: config.clientUrl, // frontend URI (ReactJS)
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res
    .status(201)
    .json({ message: "Booking System API server running successfully!" });
});

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Booking System app listening at http://localhost:${PORT}`)
);
