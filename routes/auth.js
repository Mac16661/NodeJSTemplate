const express = require("express");
const router = express.Router();

const handleAuth = require("../controllers/authUser");

router.post("/", handleAuth);

module.exports = router;
