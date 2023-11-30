// Imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Imports for pages
import Layout from './components/Layout.jsx';
import Error from './pages/Error.jsx';
import Pokedex from './pages/Pokedex.jsx';
import Arena from './pages/ArenaPage.jsx';

import Leaderboard from './pages/Leaderboard.jsx';
import Account from './pages/Account.jsx';
import axios from 'axios';

// Imports for state management
import {useState, useEffect} from 'react';

/* const { DEV, BACKEND_URL_DEPLOY, BACKEND_URL_DEV } = import.meta.env;   // Maybe implement later */



const App = () => {


/* Oh god what have I done? And still: It works!
let allPokemon =[];

const AllPokemon = (async () => {
  try {    
    const {data: returnedData} = await axios.get(`http://localhost:3000/pokemon`);
    console.log("allPokemon", returnedData);
    allPokemon = returnedData;
  } catch (error) {
    console.error(error);
  }
})();
 */


const [allPokemon,setAllPokemon] = useState([]);

 
useEffect(() => {
  async function getAllPokemon() {
    try {
      const response = await fetch(`http://localhost:3000/pokemon`);
      if (response.ok) {
        const data = await response.json();
        setAllPokemon(data);
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error(error);
    }
  }

  getAllPokemon();
}, []);


console.log("Hi from App",allPokemon);

return (
 
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path='/' element={<Pokedex/> }/>
        <Route index element={<Pokedex/>} />
        <Route path="pokedex" element={<Pokedex allPokemon={allPokemon} />}/>      
        <Route path='pokedex/:pokemonid'  element={<none/>} />
        <Route path="arena"          element={<Arena/>}/>            
        <Route path="leaderboard"    element={<Leaderboard/>}/>      
        <Route path="account"    element={<Account/>}/>           
        <Route path="*" element={<Error/>} />        
      </Routes>
      </Layout>
    </BrowserRouter>
  
)
};

export default App;

