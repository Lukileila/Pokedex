const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { body, validationResult } = require("express-validator");

const allPokemon = require("./pokedex.json");

//Middlewares:
app.use(cors()); // sets origin to all by default and thus enables Cross-Origin Resource Sharing (CORS)
app.use(express.json());

app.route("/pokemon").get((req, res) => {
  return res.json(allPokemon);
});

app.get("/pokemon/:id", [body("id").toInt()], (req, res) => {
  console.log(validationResult(req));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  if (id <= allPokemon.length) {
    return res.json(allPokemon[id - 1]);
  } else {
    return res.status(404).json({ error: "Pokemon not found. We only have the first 100 ones." });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));