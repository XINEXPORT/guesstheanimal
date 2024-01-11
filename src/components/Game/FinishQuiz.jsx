import './FinishQuiz.css';
import React from 'react';
import Confetti from './Confetti';
import {useState} from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';

//PROPERTIES
const FinishQuiz = () => {
    const {animals} =useLoaderData()
    const [animalImg, setAnimalImg] = useState()
    const navigate = useNavigate();

    let allAnimals = animals.map(
        (animalObj)=>{
             return <img src={animalObj.animalImg}/>
        }
    )
    return(
        <main id="home">
            <div id = "finalanimals">
            <h1 className = "finished">Finished!</h1>
            <button onClick={()=>{navigate("/animalflashcards")}} id="animalflashcards" style={{}}>Continue to Animal Flash Cards</button>
            {/* <img id = "fireworks" src = './public/img/fireworks-1993221.svg'/> */}
            <Confetti/>
            {/* {allAnimals} */}
            </div>
        </main>
    )
}

export default FinishQuiz;