import '../App.css';
import Quiz from './Quiz.jsx';
import axios from 'axios';
import {useState} from 'react';

const MainGame = ({initialAnimalList}) =>{
    const [animalList, setAnimalList] = useState(initialAnimalList);


const animalCard = animalList.map((animal) =>{
    const {animalId, animalImg, animalName, animalSound, animalQuestion} = animal
    return(
        <AnimalCard
            key={animalId}
            initialAnimalList={{animalId, animalImg, animalName, animalSound, animalQuestion}}
            />
    )
})

console.log(animalCard);

return(
    <main>
        <h1 className = 'guesstheanimalheader'>Guess the Animal</h1>
        <div className = 'animalcard'>
            {animalCard}
        </div>
    </main>
)}


export default MainGame