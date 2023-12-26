import "./App.css"
import MainGame from "./components/MainGame.jsx"
import { Outlet, Link} from "react-router-dom"

const App=() =>{
    return  (
        <>
        <header id = "navlinks">
        <Link to ="/" id = "homelink">Home</Link>
        <Link to = "/game" id = "gamelink">Game</Link>
        <Link to ="/animalflashcards" id = "animal-flashlink">Animal Flash Cards</Link>
        </header>
        <Outlet   />
        </>
    )
}


export default App;