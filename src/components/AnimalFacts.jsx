import './AnimalFacts.css';
import Home from './Home.jsx';
import {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import {Link} from 'react-router-dom'


const AnimalFacts = ({})=>{
const {animals} =useLoaderData()
const [animalName, setAnimalName] = useState()
const [animalImg, setAnimalImg] = useState()    
const [animalDetails, setAnimalDetails] = useState()


let allAnimals = animals.map(
    (animalObj)=>{
         return <img key={animalObj.id} src={animalObj.animalImg} alt={`Animal ${animalObj.id}`} details = {animalObj.animalDetails}/>
    }
)

console.log(allAnimals)

return(
    <main id = "animal-cards">
    <div id = "rooster">
    {allAnimals[0]}
    </div>
    <div id = "cat">
    {allAnimals[1]}
    </div>
    <div id = "duck">
    {allAnimals[2]}
    </div>
    <div id = "pig">
    {allAnimals[3]}
    </div>
    <div id = "dog">
    {allAnimals[4]}
    </div>
    <div id = "fly">
    {allAnimals[5]}
    </div>
    <div id = "mouse">
    {allAnimals[6]}
    </div>
    <div id = "owl">
    {allAnimals[7]}
    </div>
    </main>
)
}

export default AnimalFacts;