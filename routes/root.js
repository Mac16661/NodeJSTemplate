const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/image", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "image.html"));
});

module.exports = router;
