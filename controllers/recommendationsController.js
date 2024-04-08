const knex = require("knex")(require("../knexfile"));

const getAllRecommendations = async (req, res) => {
  try {
    const allRecommendations = await knex("movies");
    if (!allRecommendations.length) {
      res.status(404).json(`Movie list not found`);
    }
    res.json(allRecommendations);
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

module.exports = {
  getAllRecommendations,
};
