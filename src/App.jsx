import "./App.css"
import MainGame from "./components/MainGame.jsx"
import { Outlet, Link} from "react-router-dom"

const App=() =>{
    return  (
        <>
        <header id = "navlinks">
        <Link to ="/" id = "homelink">Home</Link>
        <Link to ="/game">Game</Link>
        </header>
        <Outlet   />
        </>
    )
}


export default App;