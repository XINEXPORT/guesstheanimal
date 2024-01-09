import './CorrectAnswer.css';
import Quiz from './Quiz.jsx';
import MainGame from "./MainGame.jsx"
import IncorrectAnswer  from './IncorrectAnswer.jsx';
import lodash from 'lodash';
import {useState, useEffect} from 'react';

//CORRECT ANSWER PROPERTIES

const CorrectAnswer =({animals, setQuiz, setAnswered, currentanswer, setUserResponse})=>{
let newChoices = lodash.sampleSize(animals, 3)
while (newChoices.includes(currentanswer)){
    newChoices = lodash.sampleSize(animals, 3)
}

return(
<main>
    <h1 id = "correct">
        Correct!
    </h1>
        <button id="play-again" onClick={()=>{
            setQuiz(newChoices)
            setUserResponse(null)
            setAnswered(false)
        }}>Play Again</button>
    </main>
)}


export default CorrectAnswer