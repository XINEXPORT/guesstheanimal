import "./App.css"
import MainGame from "./components/MainGame.jsx"
import { Outlet, Link} from "react-router-dom"

const App=() =>{
    return  (
        <>
        <header>
        <Link to="/game">Game</Link>
        </header>
        <Outlet   />
        </>
    )
}

//Need to make a router



export default App;