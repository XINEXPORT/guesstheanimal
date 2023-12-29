import "./App.css"
import Header from "./components/Header.jsx"
import { Outlet, Link} from "react-router-dom"

const App=() =>{
    return  (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}


export default App;