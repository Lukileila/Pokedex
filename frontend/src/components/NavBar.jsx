import { Link } from "react-router-dom";

function NavBar () {
   return ( 
    <>
        <nav className="absolute bg-red-800 border-l-2 border-b-2 border-red-900 md:text-2xl text-white right-0 p-5 rounded-bl-3xl drop-shadow-xl">
            <ul className="flex justify-around gap-6">
                <li>Pokedex</li>{/* 
                <li><Link to="arena">Arena</Link></li> */}
                <li>Leaderboard</li>
                <li>
                <a href="https://www.smogon.com/forums/">Login</a> 
                </li>
                <li>Register</li>
            </ul>
        </nav>
    </>
)
}

export default NavBar;