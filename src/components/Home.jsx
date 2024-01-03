import '../index.css';
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';

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
            <div id = "allanimals">
            {allAnimals}
            </div>
        </main>
    )
}

export default Home;