const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const allPokemon = require('./pokedex.json');

//Middlewares:
app.use(cors()); // sets origin to all by default and thus enables Cross-Origin Resource Sharing (CORS)
app.use(express.json()); 

app.route('/pokemon').get((req, res) => {
  return res.json(allPokemon);
});

app.route('/pokemon/:id').get((req, res) => {
  const { id } = req.params;
  return res.json(allPokemon[id-1])
});

app.listen(port, () =>
  console.log(`Server listening on port ${port}!`)
);


