import "./App.css"
import Header from "./components/Header.jsx"
import { Outlet, Link} from "react-router-dom"

const App=() =>{
    return  (
        <div id = "main">
        <Header/>
        <Outlet/>
        </div>
    )
}


export default App;