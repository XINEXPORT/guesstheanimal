import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx'
import MainGame from './components/MainGame.jsx'
import Quiz from './components/Quiz.jsx'
import axios from 'axios';

//PAGE ROUTES

const router=createBrowserRouter(
    createRoutesFromElements(
<Route path="/" element={<App/>}>
    <Route
        index
        element={<MainGame/>}
        loader = {async()=>{
            let res = await axios.get('/api/animal')
            return {animals:res.data}
            //this is what use loaderdata returns
        }}
    />

    </Route>
    )
    )


export default router;