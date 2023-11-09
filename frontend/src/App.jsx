import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './components/PokemonFight.jsx';
import PokeBG from '../src/assets/images/PokeBG.jpeg'; 

const App = () => {
  const [playerPokemon, setPlayerPokemon] = useState({
    name: 'Name',
    attack: 0,
    defense: 0,
    speed: 0,
  });


  const randomId = () => Math.floor(Math.random() * 898);

  const getPokemon = async () => {
    try {
      // const [userResponse, computerResponse] = await Promise.all([
      //   axios.get(`http://localhost:3000/pokemon/${randomId1}`),
      //   axios.get(`http://localhost:3000/pokemon/${randomId2}`),
      // ]);
      
      const {data: userResponse} = await axios.get(`https://lazy-gold-pigeon-hat.cyclic.app/pokemon//${randomId()}`);
    

      console.log(userResponse)

      setPlayerPokemon({
        name: userResponse.name.english,
        type: userResponse.type,
        image: userResponse.sprites.front,
        attack: userResponse.base.Attack,
        defense: userResponse.base.Defense,
        speed: userResponse.base.Speed,
      });

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [])

  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage: `url(${PokeBG})`,
      }}
    >   <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-4  ">PokéFight</h1>
        <div className="flex space-x-4">
          <Pokemon {...playerPokemon} />
        </div>
        
      </div>
    </div>
  );
};

export default App;

