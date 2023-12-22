import '../index.css';
import Quiz from './Quiz.jsx';
import MainGame from "./MainGame"
import IncorrectAnswer  from './IncorrectAnswer.jsx';
import lodash from 'lodash';
import {useState, useEffect} from 'react';

//CORRECT ANSWER PROPERTIES

const CorrectAnswer =({animals, setQuiz, setAnswered, setUserResponse})=>{
let newChoices = lodash.sampleSize(animals, 3)


return(
<main>
    <h1>
        Correct!
    </h1>
    {/* <p id="animal-details">{q[0].animalDetails}</p> */}
        <button onClick={()=>{
            setQuiz(newChoices)
            setUserResponse(null)
            setAnswered(false)
        }}>Play Again</button>
    </main>
)}


export default CorrectAnswer