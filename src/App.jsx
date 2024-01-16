import "./App.css"
import ScrollToTop from "./utils/ScrollToTop.jsx"
import Header from "./components/Index/Header.jsx"
import { Outlet, Link} from "react-router-dom"

const App=() =>{
    return  (
        <div id = "main">
        <ScrollToTop/>    
        <Header/>
        <Outlet/>
        </div>
    )
}

export default App;