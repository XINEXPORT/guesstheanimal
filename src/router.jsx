import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx'
import Home from './components/Index/Home.jsx'
import MainGame from './components/Game/MainGame.jsx'
import axios from 'axios';
import AnimalFacts from './components/AnimalFlashCards/AnimalFacts.jsx';
import LoginPage from './components/Login/LoginPage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import FinishQuiz from './components/Game/FinishQuiz.jsx';
import { useDispatch } from 'react-redux';

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
//FINISH QUIZ VIEW
        path = "/finishquiz"
        element = {<FinishQuiz/>}
        loader = {async()=>{
            let res = await axios.get('/api/animal')
            return {animals:res.data}
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
//FAVORITE ANIMALS VIEW
        path = "/dashboard"
        element={<Dashboard/>}
        loader = {async()=>{
            let userInfo = await axios.get ('/api/user')
            if(userInfo.data.error){
                return {userInfo:userInfo.data}
            } else {
                let favAnimalData = await axios.get ('/api/favoriteanimals')
    
                return {
                        favoriteanimals:favAnimalData.data.animals,
                        userInfo:userInfo.data
                    }
            }
        }}
/>
<Route
    path = "/game/finish"
    element = {<FinishQuiz/>}
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