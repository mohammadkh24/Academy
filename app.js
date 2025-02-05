const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Get req.body
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

// Not Found Page
app.use((req, res) => {
  return res.status(404).json({
    error: {
      type: "Not Found",
      message: "Page Not Found",
    },
  });
});

module.exports = app;
