import './Header.css'
import {Link} from 'react-router-dom'

const Header=()=>{
    return(
        <header>
            <h1>Welcome to Guess the Animal</h1>
            <nav>
            <Link to ="/" id = "homelink">Home</Link>
            <Link to = "/game" id = "gamelink">Game</Link>
            <Link to ="/animalflashcards" id = "animal-flashlink">Animal Flash Cards</Link>
            </nav>
        </header>
    )}

    export default Header;