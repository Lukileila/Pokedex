import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './components/PokemonFight.jsx';
import PokeBG from '../src/assets/images/PokeBG.jpeg'; 

const Arena = () => {
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

  const getPokemon = async () => {
    try {
      // const [userResponse, computerResponse] = await Promise.all([
      //   axios.get(`http://localhost:3000/pokemon/${randomId1}`),
      //   axios.get(`http://localhost:3000/pokemon/${randomId2}`),
      // ]);
      
      const {data: userResponse} = await axios.get(`https://lazy-gold-pigeon-hat.cyclic.app/pokemon//${randomId()}`);
      const {data: computerResponse} = await axios.get(`https://lazy-gold-pigeon-hat.cyclic.app/pokemon//${randomId()}`);
    

      console.log(userResponse)
      console.log(computerResponse)

      setPlayerPokemon({
        name: userResponse.name.english,
        type: userResponse.type,
        image: userResponse.sprites.front,
        attack: userResponse.base.Attack,
        defense: userResponse.base.Defense,
        speed: userResponse.base.Speed,
      });

      setComputerPokemon({
        name: computerResponse.name.english,
        type: computerResponse.type,
        image: computerResponse.sprites.front,
        attack: computerResponse.base.Attack,
        defense: computerResponse.base.Defense,
        speed: computerResponse.base.Speed,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [])

  const fight = () => {
      if (
        playerPokemon.attack + playerPokemon.defense + playerPokemon.speed >
        computerPokemon.attack + computerPokemon.defense + computerPokemon.speed
      ) {
        setWinStatus(`Your ${playerPokemon.name} wins!`);
      } else if (
        playerPokemon.attack + playerPokemon.defense + playerPokemon.speed <
        computerPokemon.attack + computerPokemon.defense + computerPokemon.speed
      ) {
        setWinStatus(`Computer's ${computerPokemon.name} Wins!`);
      } else {
        setWinStatus('Tie!');
      }
    }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage: `url(${PokeBG})`,
      }}
    >      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4  ">PokéFight</h1>
        <div className="flex space-x-4">
          <Pokemon {...playerPokemon} />
          <Pokemon {...computerPokemon} />
        </div>
        <button
          className="flex items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={fight}
          disabled={playerPokemon.name === 'Name'}
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

export default Arena;