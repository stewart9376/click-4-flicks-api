const router = require("express").Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

const knex = require("knex")(require("../knexfile"));

const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    const missingFields = [];
    if (!username) missingFields.push("username");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");
    const errorMessage = `Please fill in the required fields: ${missingFields.join(
      ", "
    )}`;
    return res.status(400).json({ error: errorMessage });
  }
  try {
    const existingUser = await knex("users")
      .where({ username })
      .orWhere({ email })
      .first();
    if (existingUser) {
      const takenField =
        existingUser.username === username ? "username" : "email";
      return res
        .status(400)
        .json({ error: ` This ${takenField} has already been taken` });
    }
    const hashedPassword = bcrypt.hashSync(password, 6);
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    await knex("users").insert(newUser);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Failed registration" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    const missingFields = [];
    if (!username) missingFields.push("username");
    if (!password) missingFields.push("password");
    const errorMessage = `Please fill in the required fields: ${missingFields.join(
      ", "
    )}`;
    return res.status(400).json({ error: errorMessage });
  }
  try {
    const user = await knex("users").where({ username: username }).first();
    if (!user) {
      return res.status(400).json({ error: "User doesn't exist" });
    }
    const passwordCorrect = bcrypt.compareSync(password, user.password);
    if (!passwordCorrect) {
      return res.status(400).send({ error: "Invalid password" });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Failed login" });
  }
});
router.get("/", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: "Please login" });
  }
  const authToken = req.headers.authorization.split(" ")[1];
  if (!authToken || !process.env.JWT_SECRET) {
    return res.status(401).json({ error: "Auth token or secret is missing" });
  }
  try {
    const verified = jwt.verify(authToken, process.env.JWT_SECRET);
    if (verified) {
      const { id } = verified;
      const user = await knex("users").where({ id }).first();
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    }
  } catch (error) {
    return res.status(401).json({ error: "Invalid auth token" });
  }
});
module.exports = router;
