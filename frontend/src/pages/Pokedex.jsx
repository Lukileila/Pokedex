import Card from '../components/Card.jsx'; 
import Grass from '../assets/images/grass.jpg'; 
import {useEffect} from 'react';


export default function Pokedex({allPokemon}){    
   
    console.log("hi from pokedex. All Pokemon:",allPokemon);
    useEffect(() => {
    console.log("hi from pokedex. All Pokemon:",allPokemon);},[allPokemon]);
     
  

   const TestPokemon={
    name: "Testi",
    type: "Testers",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    attack: 1,
    defense: 2,
    speed: 3,
    };

    return (
    <>
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage: `url(${Grass})`,
      }}
    >     <Card {...TestPokemon}/>
          <Card name={allPokemon[1].name.english}/>
    </div>
    </>
    )
}
