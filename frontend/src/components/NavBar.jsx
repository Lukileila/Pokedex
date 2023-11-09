import { Link } from 'react-router-dom';

function NavBar () {
    return (
    <nav className="flex justify-evenly">
        <ul className="flex justify-around gap-6">
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>Pokedex</li>
            <li>
                <Link to="./pages/ArenaPage">Arena</Link></li>
            <li>Ladder</li>
            <li><a href="https://www.smogon.com/forums/">Forum</a></li>
        </ul>
        <ul className="flex gap-5">
            <li>
            <Link  to="./pages/LoginPage">Login</Link>    
            </li>
            <li>Register</li>
        </ul>
    </nav>
)
}

export default NavBar;