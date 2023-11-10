// Imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Imports for pages
import Layout from './components/Layout.jsx';
import Error from './pages/Error.jsx';
import Pokedex from './pages/Pokedex.jsx';
import Arena from './pages/ArenaPage.jsx';
/*  Imports commented out as pages don't exist yet
import Leaderboard from './pages/Leaderboard.jsx';
import Account from './pages/Account.jsx'; */


// Imports for state management
import {useState, useEffect} from 'react';

/* const { DEV, BACKEND_URL_DEPLOY, BACKEND_URL_DEV } = import.meta.env;   // Maybe implement later */

const App = () => {



/* Leftover copypasta for inspo:
  async function getAllProducts() {
    try {
      const response = await fetch(`${DEV 
        ? VITE_BACKEND_URL_DEV 
        : VITE_BACKEND_URL_DEPLOY }/products`);
      if (response.ok) {
        const data = await response.json();
        setAllEntries(data);
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error(error);
    }
  }


  getAllProducts();

  }, []);
 */


// Some routes commented out as respective pages don't exist yet.

console.log("Hi from App");
return (
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokedex/> }/>
        <Route index element={<Pokedex/>} />
  {/*    <Route path="pokedex"        element={<Pokedex/>}/>     
        <Route path='pokedex/:pokemonid'  element={<ProductPage />}              /> */}
        <Route path="arena"          element={<Arena/>}/>      {/*        
        <Route path="leaderboard"    element={<Leaderboard/>}/>      
        <Route path="account"    element={<Account/>}/>           */}
        <Route path="*" element={<Error/>} />        
      </Routes>
    </BrowserRouter>
  </Layout>
)
};

export default App;

