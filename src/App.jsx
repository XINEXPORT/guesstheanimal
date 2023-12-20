import "./App.css"
import MainGame from "./components/MainGame.jsx"
import { Outlet } from "react-router-dom"

const App=() =>{
    return  (
        <>
        <Outlet   />
        </>
    )
}

//Need to make a router



export default App;