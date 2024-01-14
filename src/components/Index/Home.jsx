import './Home.css';
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';

const Home = ({}) => {
    const {animals} =useLoaderData()
    const [animalImg, setAnimalImg] = useState()

    let allAnimals = animals.map(
        (animalObj)=>{
             return <img key={animalObj.animalId} src={animalObj.animalImg}/>
        }
    )
    return(
        <main id="home">
            <div id = "allanimals">
            {allAnimals}
            </div>
        </main>
    )
}

export default Home;