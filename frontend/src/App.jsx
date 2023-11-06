import  { useState } from 'react';
import axios from 'axios';
import Pokemon from './components/Pokemon.jsx';

const App = () => {
  const [playerPokemon, setPlayerPokemon] = useState({
    name: 'Name',
    
    attack: 0,
    defense: 0,
    speed: 0,
  });

  const [computerPokemon, setComputerPokemon] = useState({
    name: 'Name',
    attack: 0,
    defense: 0,
    speed: 0,
  });

  const [winStatus, setWinStatus] = useState(null);

  const randomId = () => Math.floor(Math.random() * 898);

  const fight = async () => {
    const randomId1 = randomId();
    const randomId2 = randomId();

    try {
      const [response1, response2] = await Promise.all([
        axios.get(`/${randomId1}`),
        axios.get(`/${randomId2}`),
      ]);

      setPlayerPokemon({
        name: response1.data.name,
        image: response1.data.image,
        attack: response1.data.stats.attack,
        defense: response1.data.stats.defense,
        speed: response1.data.stats.speed,
      });

      setComputerPokemon({
        name: response2.data.name,
        image: response2.data.image,
        attack: response2.data.stats.attack,
        defense: response2.data.stats.defense,
        speed: response2.data.stats.speed,
      });

      if (
        playerPokemon.attack + playerPokemon.defense + playerPokemon.speed >
        computerPokemon.attack + computerPokemon.defense + computerPokemon.speed
      ) {
        setWinStatus('Player Wins!');
      } else if (
        playerPokemon.attack + playerPokemon.defense + playerPokemon.speed <
        computerPokemon.attack + computerPokemon.defense + computerPokemon.speed
      ) {
        setWinStatus('Computer Wins!');
      } else {
        setWinStatus('Tie!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">PokéFight</h1>
        <div className="flex space-x-4">
          <Pokemon {...playerPokemon} />
          <Pokemon {...computerPokemon} />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={fight}
        >
          FIGHT!
        </button>
        <div className="mt-4">
          {winStatus && <p className="text-xl">{winStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;

