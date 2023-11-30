export default function Leaderboard(){    
   console.log("hi from pokedex");
   

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
    <div className="min-h-screen flex items-center justify-center bg-yellow-500">
     <ol className='list-decimal text-5xl'><li>There</li>
     <li>are no</li>
     <li>winners</li>
     <li>here</li>
     </ol>
    </div>
    </>
    )
}
