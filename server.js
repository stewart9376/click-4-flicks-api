const express = require("express");
const app = express();
require("dotenv").config();
const { CORS_ORIGIN } = process.env;
const port = process.env.PORT || 5050;
const cors = require("cors");
app.use(cors(CORS_ORIGIN));
app.use(express.json());
app.use(express.static("public"));

const recommendationsRoutes = require("./routes/recommendationsRoute");

app.use("/api/recommendations", recommendationsRoutes);

const showtimesRoutes = require("./routes/showtimes");

app.use("/api/showtimes", showtimesRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
