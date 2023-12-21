import '../index.css';
import Quiz from './Quiz.jsx';
import axios from 'axios';
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import {Link} from 'react-router-dom'
import SoundButtonLink from './SoundButtons';

const Home = ({}) => {
    const {animals} =useLoaderData()
    const [animalImg, setAnimalImg] = useState()

    console.log(animals)

    let allAnimals = animals.map(
        (animalObj)=>{
             return <img src={animalObj.animalImg}/>
        }
    )

    console.log(allAnimals)

    return(
        <main id="home">
            <h1>Welcome to Guess the Animal</h1>
            <div id = "allanimals">
            {allAnimals}
            </div>
        </main>
    )
}

export default Home;