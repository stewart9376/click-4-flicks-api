const express = require("express");
const router = express.Router();
const showtimesController = require("../controllers/showtimesController");

router.route("/").get(showtimesController.getAllShowtimes);

module.exports = router;
