import './FinishQuiz.css';
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom';

//PROPERTIES
const FinishQuiz = () => {
    const {animals} =useLoaderData()
    const [animalImg, setAnimalImg] = useState()

    let allAnimals = animals.map(
        (animalObj)=>{
             return <img src={animalObj.animalImg}/>
        }
    )
    return(
        <main id="home">
            <div id = "finalanimals">
            <h1 className = "finished">Finished!</h1>
            <img id = "fireworks" src = './public/img/fireworks-1993221.svg'/>
            {/* {allAnimals} */}
            </div>
        </main>
    )
}

export default FinishQuiz;