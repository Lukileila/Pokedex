import Card from '../components/Card.jsx'; 
import Grass from '../assets/images/grass.jpg'; 
import {useEffect} from 'react';


export default function Pokedex({allPokemon}){    
   
    console.log("hi from pokedex. All Pokemon:",allPokemon);
    useEffect(() => {
    console.log("hi from pokedex. All Pokemon:",allPokemon);},[allPokemon]);
     
  
/* 
   const TestPokemon={
    name: "Testi",
    type: "Testers",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    attack: 1,
    defense: 2,
    speed: 3,
    }; */

    return (
    <>
    <div
      className="min-h-screen bg-repeat"
      style={{
        backgroundImage: `url(${Grass})`,
      }}
    >   <div className='h-32'></div>
        <div className="min-h-screen flex flex-wrap justify-center">
           {/*  <Card {...TestPokemon}/> */}
{/*             <Card name={allPokemon[1].name.english}
              type={allPokemon[0].type}
              image={allPokemon[0].sprites.front}
              attack={allPokemon[1].base.Attack}
              defense={allPokemon[1].base.Defense}
              speed={allPokemon[1].base.Speed}
              /> */}
             {allPokemon.map((Pokemon)=><Card name={Pokemon.name.english}
              type={Pokemon.type}
              image={Pokemon.sprites.front}
              attack={Pokemon.base.Attack}
              defense={Pokemon.base.Defense}
              speed={Pokemon.base.Speed} />)}  
        </div>


            
    </div>
    </>
    )
}
