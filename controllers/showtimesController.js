const knex = require("knex")(require("../knexfile"));

const getAllShowtimes = async (req, res) => {
  try {
    const allShowtimes = await knex("showtimes");
    if (!allShowtimes.length) {
      res.status(404).json(`Showtimes list not found`);
    }
    res.json(allShowtimes);
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

module.exports = {
  getAllShowtimes,
};
