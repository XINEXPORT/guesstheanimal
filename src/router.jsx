import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx'
import Home from './components/Home.jsx'
import MainGame from './components/MainGame.jsx'
import Quiz from './components/Quiz.jsx'
import axios from 'axios';
import AnimalFacts from './components/AnimalFacts.jsx';
import LoginPage from './components/LoginPage.jsx';
import Dashboard from './components/Dashboard.jsx';


//PAGE ROUTES
const router=createBrowserRouter(
    createRoutesFromElements(

//HOME PAGE
<Route path="/" element={<App/>}>
    <Route index element={<Home/>}
            loader = {async()=>{
                let res = await axios.get('/api/animal')
                return {animals:res.data}
                //this is what use loaderdata returns for HomePage
            }}
        />
    <Route
//GAME PAGE
        path = "/game"
        element={<MainGame/>}
        loader = {async()=>{
            let res = await axios.get('/api/animal')
            return {animals:res.data}
            //this is what use loaderdata returns for MainGame
        }}
    />
<Route
//ANIMAL FACTS PAGE
        path = "/animalflashcards"
        element={<AnimalFacts/>}
        loader = {async()=>{
            let res = await axios.get ('/api/animal')
            return {animals:res.data}
        }}
/>
<Route
//MY DASHBOARD
        path = "/dashboard"
        element={<Dashboard/>}
        loader = {async()=>{
            let res = await axios.get ('/api/user')
            return {user:res.data}
        }}
/>
<Route
//LOGIN
path = "/login"
element={<LoginPage/>}
Loader = {async()=>{
    let res = await axios.get('/api/login')
    return {login:res.data}
}}

/>
</Route>
    )
    )

export default router;