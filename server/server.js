const express = require("express");

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require("path");

// Initialize an instance of Express.js
const app = express();

// Specify on which port for Express.js server
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.json({ message: "API server running successfully!" });
});

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Booking System app listening at http://localhost:${PORT}`)
);
