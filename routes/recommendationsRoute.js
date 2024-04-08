const express = require("express");
const router = express.Router();
const recommendationsController = require("../controllers/recommendationsController");

router.route("/").get(recommendationsController.getAllRecommendations);

module.exports = router;
